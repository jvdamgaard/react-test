import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Track from './index.jsx';

const track = {
  id: 1,
  name: 'Test track',
  preview_url: 'http://playpreview-url.com',
};

storiesOf('Track', module)
  .add('with name and play preview handler', () => (
    <Track track={track} playPreview={action('playPreview')} />
  ));
