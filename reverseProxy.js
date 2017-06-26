const path = require('path');
const redbird = require('redbird');

const proxy = redbird({
  port: 80,
  ssl: {
    port: 443,
    redirect: true,
  },
  letsencrypt: {
    path: path.join(__dirname, 'certs'),
    port: 9999,
  },
});

const routes = [
  ['spncrwd.com', 'localhost:3000'],
];

routes.forEach(([from, to]) => {
  proxy.register(from, to , {
      ssl: {
        letsencrypt: {
          email: 'spencercwood@gmail.com',
          production: true,
        },
      },
    }
  );
});
