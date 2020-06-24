const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  const options = {
    target: 'https://www.receitaws.com.br/v1/cnpj/27865757000102',
    changeOrigin: true,
    logLevel: 'debug',
  };
  
//   app.use(
//     createProxyMiddleware(
//       `/${process.env.REACT_APP_NOTIFICATIONS_API}`,
//       optionsNotifications
//     )
//   );
//   app.use(
//     createProxyMiddleware(
//       `/${process.env.REACT_APP_TRENDING_API}`,
//       optionsTrending
//     )
//   );
//   app.use(createProxyMiddleware(`/${process.env.REACT_APP_URL}`, options));
};
