import path from 'path';
import express from 'express';
import compression from 'compression';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../build-configs/client';
import serveHtml from './middleware/serve-html';

const PUBLIC_PATH = path.resolve(__dirname, '../public');

const app = express();
app.set('port', (process.env.PORT || 3000));
app.disable('x-powered-by');

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: '/',
}));
app.use(webpackHotMiddleware(compiler));

app.use(compression());
app.use(express.static(PUBLIC_PATH/* , { maxAge: 24 * 60 * 60 * 1000 } */));

app.get('/', serveHtml);
app.get('/search/:query', serveHtml);

console.log(`
---------------------------------
 Starting Server 😊
 Environment:       ${process.env.NODE_ENV}
 Listening on port: ${app.get('port')}
---------------------------------
`);

app.listen(app.get('port'));
