import path from 'path';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackClientConfig from '../../buildConfigs/dev.client';
import serveHtml from './middleware/serve-html';

const app = express();
app.set('port', (process.env.PORT || 3000));
app.disable('x-powered-by');
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const webpackCompiler = webpack(webpackClientConfig);
app.use(webpackDevMiddleware(webpackCompiler, {
  noInfo: true,
  publicPath: webpackClientConfig.output.publicPath,
}));
app.use(webpackHotMiddleware(webpackCompiler));

app.use(express.static(path.resolve(__dirname, '../../public'), { maxAge: 24 * 60 * 60 * 1000 }));
app.get('*', serveHtml);

console.log(`
---------------------------------
 Starting Server 😊
 Environment:       ${process.env.NODE_ENV}
 Listening on port: ${app.get('port')}
---------------------------------
`);

app.listen(app.get('port'));
