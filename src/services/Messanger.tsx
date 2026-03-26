const sendMessage = (data: MailData & Record<string, never>) => {
  const body = new URLSearchParams(data);
  return fetch(
    'https://script.google.com/macros/s/AKfycbwO9taifwOLwbR0IAa9hzpt8yuf_rO7w5ivO9ywnaOrh6M5RKYKA45CaVemvpRs73aU/exec',
    {
      method: 'post',
      body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  ).then(() => 'done');
};

export {sendMessage};
