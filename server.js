const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

// Serving static HTML file
app.use(express.static('public'));

// Proxy Middleware
app.use('/proxy', createProxyMiddleware({
    target: 'https://example.com', // Replace with the target server
    changeOrigin: true,
    pathRewrite: {
        '^/proxy': '', // Removes '/proxy' from the proxied request
    },
}));

app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});