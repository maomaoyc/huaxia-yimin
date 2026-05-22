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
  const file = form.get('file');
  const fileName = file instanceof File ? file.name : '';
  const lines = [
    `提交人：${form.get('name') || ''}`,
    `联系方式：${form.get('contact') || ''}`,
    `标题：${form.get('title') || ''}`,
    `链接：${form.get('resourceUrl') || ''}`,
    `文件名：${fileName}`,
    '',
    String(form.get('message') || '')
  ];

  const sent = await sendMail(context.env, '作者最新文章与视频上传', lines.join('\n'));

  return Response.json({
    ok: true,
    sent,
    stored: false,
    fileStored: false
  });
}
