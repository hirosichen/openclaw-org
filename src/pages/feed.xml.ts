import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const docs = await getCollection('docs');

  // Sort by slug for consistent ordering
  const sortedDocs = docs.sort((a, b) => a.id.localeCompare(b.id));

  return rss({
    title: 'OpenClaw 台灣社群',
    description: 'OpenClaw 台灣社群 — 在本機運行的個人 AI 助理平台，支援多種聊天 App 整合',
    site: context.site!,
    items: sortedDocs.map((doc) => ({
      title: doc.data.title,
      description: doc.data.description || '',
      link: `/docs/${doc.id}/`,
    })),
    customData: '<language>zh-TW</language>',
  });
}
