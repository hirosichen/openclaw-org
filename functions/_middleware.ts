// Cloudflare Pages Function middleware
// Redirects non-www and non-canonical hostnames to https://www.openclaw.org.tw
// This consolidates ranking signals for SEO

const CANONICAL_HOST = 'www.openclaw.org.tw';

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  // Redirect non-canonical hostnames (non-www, pages.dev) to canonical
  if (url.hostname !== CANONICAL_HOST && !url.hostname.endsWith('.pages.dev')) {
    url.hostname = CANONICAL_HOST;
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
};
