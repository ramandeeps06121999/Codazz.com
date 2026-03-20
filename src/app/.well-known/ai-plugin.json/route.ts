import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', '.well-known', 'ai-plugin.json');
  const content = fs.readFileSync(filePath, 'utf-8');

  return NextResponse.json(JSON.parse(content), {
    headers: {
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
