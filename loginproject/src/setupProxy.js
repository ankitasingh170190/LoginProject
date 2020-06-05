const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = app => {
  const proxy = createProxyMiddleware("/authenticationApi", {
    changeOrigin: true,
    autoRewrite: true,
    target: "http://localhost:8880",
  });
  app.use(proxy);
  app.use(wsProxy);
};
