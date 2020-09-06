const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app) {
    app.use(createProxyMiddleware('/country', 
        { target: 'http://localhost:5000/' }
    ));
    app.use(createProxyMiddleware('/vaccine',
        { target: 'http://localhost:5000/'}))
}