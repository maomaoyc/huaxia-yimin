type Env = {
  RESEND_API_KEY?: string;
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

export async function onRequestPost(context: { request: Request; env: Env }) {
  const form = await context.request.formData();
  const mode = String(form.get('modeLabel') || '网站留言');
  const name = String(form.get('name') || '');
  const contact = String(form.get('contactInfo') || '');
  const resource = String(form.get('resourceLink') || '');
  const message = String(form.get('message') || '');
  const subject = `华夏义民网站：${mode}`;
  const text = [
    `类别：${mode}`,
    `姓名：${name}`,
    `联系方式：${contact}`,
    `资料链接：${resource}`,
    '',
    message
  ].join('\n');
  const sent = await sendMail(context.env, subject, text);
  return Response.json({ ok: true, sent, stored: false });
}
