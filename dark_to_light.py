import os
base = '/Users/ramanmakkar/Desktop/codazz.com/src/app'
files = []
for root, dirs, fnames in os.walk(base):
    for f in fnames:
        if f == 'PageClient.tsx':
            files.append(os.path.join(root, f))
files.sort()
print(f'Found {len(files)} files')
def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    original = content
    content = content.replace("'#0a0a14'", "'#ffffff'")
    content = content.replace('rgba(255,255,255,0.75)', 'rgba(0,0,0,0.55)')
    content = content.replace('rgba(255,255,255,0.65)', 'rgba(0,0,0,0.55)')
    content = content.replace('rgba(255,255,255,0.8)', 'rgba(0,0,0,0.6)')
    content = content.replace('rgba(255,255,255,0.55)', 'rgba(0,0,0,0.45)')
    content = content.replace('rgba(255,255,255,0.44)', 'rgba(0,0,0,0.4)')
    content = content.replace('rgba(255,255,255,0.38)', 'rgba(0,0,0,0.35)')
    content = content.replace('rgba(255,255,255,0.35)', 'rgba(0,0,0,0.35)')
    content = content.replace('rgba(255,255,255,0.25)', 'rgba(0,0,0,0.2)')
    content = content.replace('rgba(255,255,255,0.12)', 'rgba(0,0,0,0.08)')
    content = content.replace('rgba(255,255,255,0.15)', 'rgba(0,0,0,0.1)')
    content = content.replace('rgba(255,255,255,0.09)', 'rgba(0,0,0,0.06)')
    content = content.replace('rgba(255,255,255,0.08)', 'rgba(0,0,0,0.06)')
    content = content.replace('rgba(255,255,255,0.07)', 'rgba(0,0,0,0.05)')
    content = content.replace('rgba(255,255,255,0.06)', 'rgba(0,0,0,0.03)')
    content = content.replace('rgba(255,255,255,0.05)', 'rgba(0,0,0,0.03)')
    content = content.replace('rgba(255,255,255,0.04)', 'rgba(0,0,0,0.02)')
    content = content.replace('rgba(255,255,255,0.03)', 'rgba(0,0,0,0.03)')
    content = content.replace('rgba(255,255,255,0.02)', 'rgba(0,0,0,0.015)')
    content = content.replace('rgba(255,255,255,0.01)', 'rgba(0,0,0,0.01)')
    lines = content.split('\n')
    new_lines = []
    for line in lines:
        if 'rgba(255,255,255,0.7)' in line:
            line = line.replace('rgba(255,255,255,0.7)', 'rgba(0,0,0,0.55)')
        if 'rgba(255,255,255,0.6)' in line:
            line = line.replace('rgba(255,255,255,0.6)', 'rgba(0,0,0,0.5)')
        if 'rgba(255,255,255,0.5)' in line:
            line = line.replace('rgba(255,255,255,0.5)', 'rgba(0,0,0,0.4)')
        if 'rgba(255,255,255,0.4)' in line:
            line = line.replace('rgba(255,255,255,0.4)', 'rgba(0,0,0,0.4)')
        if 'rgba(255,255,255,0.3)' in line:
            if 'solid' in line or 'border' in line.lower() or 'borderColor' in line or 'Border' in line:
                line = line.replace('rgba(255,255,255,0.3)', 'rgba(0,0,0,0.15)')
            else:
                line = line.replace('rgba(255,255,255,0.3)', 'rgba(0,0,0,0.25)')
        if 'rgba(255,255,255,0.2)' in line:
            if 'solid' in line or 'border' in line.lower() or 'borderColor' in line or 'Border' in line:
                line = line.replace('rgba(255,255,255,0.2)', 'rgba(0,0,0,0.1)')
            else:
                line = line.replace('rgba(255,255,255,0.2)', 'rgba(0,0,0,0.2)')
        if 'rgba(255,255,255,0.1)' in line:
            line = line.replace('rgba(255,255,255,0.1)', 'rgba(0,0,0,0.08)')
        if 'rgba(0,0,0,0.5)' in line and '#4F46E5' not in line:
            if 'shadow' in line.lower() or 'Shadow' in line:
                line = line.replace('rgba(0,0,0,0.5)', 'rgba(0,0,0,0.06)')
        if 'rgba(0,0,0,0.4)' in line and '#4F46E5' not in line:
            if 'boxShadow' in line or 'box-shadow' in line:
                line = line.replace('rgba(0,0,0,0.4)', 'rgba(0,0,0,0.04)')
        if 'rgba(0,0,0,0.3)' in line and '#4F46E5' not in line:
            if 'shadow' in line.lower() or 'Shadow' in line:
                line = line.replace('rgba(0,0,0,0.3)', 'rgba(0,0,0,0.04)')
        if "color: '#fff'" in line:
            if '#4F46E5' not in line and '#06B6D4' not in line and '#4338CA' not in line:
                line = line.replace("color: '#fff'", "color: '#111827'")
        new_lines.append(line)
    content = '\n'.join(new_lines)
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        return True
    return False
changed = 0
for f in files:
    if process_file(f):
        changed += 1
        print(f'  Modified: {os.path.relpath(f, base)}')
print(f'\nDone. Modified {changed}/{len(files)} files.')
