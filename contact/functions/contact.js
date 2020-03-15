require('dotenv').config();

exports.handler = (event, _context, callback) => {
  console.log({ event });
  console.log('API Key:' + JSON.stringify(process.env.DUMMY_API_KEY));

  const data = JSON.parse(event.body);

  const email = {
    from: 'tae-ho.kim@gmx.de',
    to: `${data.name} <${data.email}>`,
    subject: data.subject,
    text: data.body
  };
  console.log('Email: ' + JSON.stringify(email));

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ kenshin: true })
  });
};
