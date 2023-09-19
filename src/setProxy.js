const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/", {
      target: "http://http://ec2-44-198-225-181.compute-1.amazonaws.com:8080",
      changeOrigin: true,
    })
  );
};