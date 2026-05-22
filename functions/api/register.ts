type Env = {
  RESEND_API_KEY?: string;
};

const to = 'yc114de@gmail.com';

async function sendMail(env: Env, subject: string, text: string) {
  if (!env.RESEND_API_KEY) {
    return false;
  }

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
  const name = String(form.get('name') || '');
  const contact = String(form.get('contact') || '');
  const note = String(form.get('note') || '');

  const sent = await sendMail(
    context.env,
    '读者注册',
    [`姓名：${name}`, `联系方式：${contact}`, '', note].join('\n')
  );

  return Response.json({ ok: true, sent, stored: false });
}
