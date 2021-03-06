const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        createServer((req, res) => {
            const { pathname, query } = parse(req.url, true);

            // if (pathname === '/a') {
            //     app.render(req, res, '/b', query)
            // } else if (pathname === '/b') {
            //     app.render(req, res, '/a', query)
            // } else {
                handle(req, res);
            //}
        })
            .listen(port, (err) => {
                if (err) throw err;
                console.log('> Ready on http://localhost:'+port)
            })
    });