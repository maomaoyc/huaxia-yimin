type Env = {
  COMMENTS_KV?: {
    get(key: string): Promise<string | null>;
    put(key: string, value: string): Promise<void>;
  };
};

type CommentRecord = {
  name: string;
  contact?: string;
  comment: string;
  createdAt: string;
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store'
    }
  });

const keyFor = (chapter: string) => `chapter-comments:${chapter.replace(/[^a-z0-9/_-]/gi, '').slice(0, 160)}`;

export async function onRequestGet({ request, env }: { request: Request; env: Env }) {
  if (!env.COMMENTS_KV) return json({ ok: false, configured: false, comments: [] }, 501);
  const url = new URL(request.url);
  const chapter = url.searchParams.get('chapter') || '';
  if (!chapter) return json({ ok: false, error: 'Missing chapter.' }, 400);

  const raw = await env.COMMENTS_KV.get(keyFor(chapter));
  return json({ ok: true, configured: true, comments: raw ? JSON.parse(raw) : [] });
}

export async function onRequestPost({ request, env }: { request: Request; env: Env }) {
  if (!env.COMMENTS_KV) return json({ ok: false, configured: false }, 501);
  const data = await request.formData();
  const chapter = String(data.get('chapter') || '');
  const comment = String(data.get('comment') || '').trim();
  if (!chapter || !comment) return json({ ok: false, error: 'Missing chapter or comment.' }, 400);

  const next: CommentRecord = {
    name: String(data.get('name') || '').trim() || '读者',
    contact: String(data.get('contact') || '').trim() || undefined,
    comment: comment.slice(0, 4000),
    createdAt: new Date().toISOString()
  };
  const key = keyFor(chapter);
  const raw = await env.COMMENTS_KV.get(key);
  const comments: CommentRecord[] = raw ? JSON.parse(raw) : [];
  comments.unshift(next);
  await env.COMMENTS_KV.put(key, JSON.stringify(comments.slice(0, 200)));
  return json({ ok: true, configured: true, comment: next });
}
