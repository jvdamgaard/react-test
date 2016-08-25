import { configure } from '@kadira/storybook';
import '../public/static/styles.css';

const req = require.context('../app/components/', true, /stories\.jsx/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
