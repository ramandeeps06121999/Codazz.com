/**
 * One-time codemod: wrap service PageClient pages with ServicePageWrapper / SubServicePageWrapper.
 * Run: node scripts/apply-service-wrappers.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const servicesDir = path.join(__dirname, '..', 'src', 'app', 'services');

function listPageClients(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) listPageClients(p, acc);
    else if (ent.name === 'PageClient.tsx') acc.push(p);
  }
  return acc;
}

function wrapperForFile(filePath) {
  const relDir = path.relative(servicesDir, path.dirname(filePath));
  const depth = relDir === '' ? 0 : relDir.split(path.sep).length;
  return depth >= 2 ? 'SubServicePageWrapper' : 'ServicePageWrapper';
}

function stripNavbarFooterImports(src) {
  return src
    .replace(/^import Navbar from ['"]@\/components\/Navbar['"];\s*\r?\n/gm, '')
    .replace(/^import Footer from ['"]@\/components\/Footer['"];\s*\r?\n/gm, '');
}

function ensureWrapperImport(src, wrapperName) {
  if (src.includes(`@/components/${wrapperName}`)) return src;
  const line = `import ${wrapperName} from '@/components/${wrapperName}';\n`;
  const useClient = /^'use client';\s*\r?\n/m.exec(src);
  if (useClient) {
    const idx = useClient.index + useClient[0].length;
    return src.slice(0, idx) + line + src.slice(idx);
  }
  return line + src;
}

function replaceShell(src, W) {
  if (!src.includes('<Navbar />')) return null;

  let replaced = src;
  let hit = false;

  const tryReplace = (re, fn) => {
    if (hit || !re.test(replaced)) return;
    replaced = replaced.replace(re, fn);
    hit = true;
  };

  tryReplace(
    /<main ref=\{(\w+)\} style=\{\{ background: '#000000', color: '#ffffff', paddingTop: 80 \}\}>/,
    (_, ref) => `<${W}><div ref={${ref}} style={{ paddingTop: 80 }}>`
  );
  tryReplace(
    /<main ref=\{(\w+)\} style=\{\{ background: '#000', color: '#fff', minHeight: '100vh' \}\}>/,
    (_, ref) => `<${W}><div ref={${ref}} style={{ paddingTop: 80 }}>`
  );
  tryReplace(
    /<main ref=\{(\w+)\} style=\{\{ background: '#000000', color: '#ffffff', fontFamily: 'inherit' \}\}>/,
    (_, ref) => `<${W}><div ref={${ref}} style={{ paddingTop: 80 }}>`
  );
  tryReplace(
    /<main style=\{\{ background: '#000000', color: '#ffffff', fontFamily: 'inherit' \}\}>/,
    () => `<${W}><div style={{ paddingTop: 80 }}>`
  );

  if (!hit) {
    replaced = replaced.replace(/<main ([^>\n]+)>/, (full, attrs) => {
      if (!attrs.includes("background: '#000") && !attrs.includes('background: "#000')) return full;
      hit = true;
      const refMatch = /ref=\{(\w+)\}/.exec(attrs);
      if (refMatch) {
        return `<${W}><div ref={${refMatch[1]}} style={{ paddingTop: 80 }}>`;
      }
      return `<${W}><div style={{ paddingTop: 80 }}>`;
    });
  }

  if (!hit) return null;

  replaced = replaced.replace(/\s*<Navbar \/>\s*\r?\n/, '\n');
  replaced = replaced.replace(/<\/main>\s*\r?\n\s*<Footer \/>/g, `</div>\n    </${W}>`);

  return replaced;
}

function migrateFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  if (src.includes('ServicePageWrapper') || src.includes('SubServicePageWrapper')) {
    return { filePath, status: 'skip-already' };
  }
  if (!src.includes("import Navbar from '@/components/Navbar'")) {
    return { filePath, status: 'skip-no-navbar' };
  }

  const wrapperName = wrapperForFile(filePath);
  let next = stripNavbarFooterImports(src);
  next = ensureWrapperImport(next, wrapperName);
  const out = replaceShell(next, wrapperName);
  if (!out) {
    return { filePath, status: 'fail-no-main-match' };
  }
  fs.writeFileSync(filePath, out, 'utf8');
  return { filePath, status: 'ok', wrapperName };
}

const files = listPageClients(servicesDir);
const results = files.map(migrateFile);
const failed = results.filter((r) => r.status === 'fail-no-main-match');
const ok = results.filter((r) => r.status === 'ok');

console.log(`OK: ${ok.length}`);
console.log(`Skip: ${results.filter((r) => r.status.startsWith('skip')).length}`);
if (failed.length) {
  console.log('FAILED (manual fix):');
  failed.forEach((f) => console.log(' ', f.filePath));
  process.exitCode = 1;
}
