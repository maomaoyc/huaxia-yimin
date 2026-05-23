type Env = {
  RESEND_API_KEY?: string;
  COMMENTS_KV?: {
    get(key: string): Promise<string | null>;
    put(key: string, value: string): Promise<void>;
  };
};

const to = 'yc114de@gmail.com';

async function sendMail(env: Env, subject: string, text: string) {
  if (!env.RESEND_API_KEY) return false;
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'Huaxia Yimin <onboarding@resend.dev>',
      to,
      subject,
      text
    })
  });
  return response.ok;
}

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
  if (!env.COMMENTS_KV) {
    const sent = await sendMail(
      env,
      `章节评论：${chapter}`,
      [`章节：${chapter}`, `姓名：${next.name}`, `联系方式：${next.contact || ''}`, '', next.comment].join('\n')
    );
    return json({ ok: true, configured: false, sent, comment: next });
  }
  const key = keyFor(chapter);
  const raw = await env.COMMENTS_KV.get(key);
  const comments: CommentRecord[] = raw ? JSON.parse(raw) : [];
  comments.unshift(next);
  await env.COMMENTS_KV.put(key, JSON.stringify(comments.slice(0, 200)));
  return json({ ok: true, configured: true, comment: next });
}
