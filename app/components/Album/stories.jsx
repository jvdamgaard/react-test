import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Album from './index.jsx';

const album = {
  id: 1,
  images: [{}, {
    url: 'https://unsplash.it/400/400',
  }],
  name: 'Test album',
};

storiesOf('Album', module)
  .add('with image and on click handler', () => (
    <Album album={album} getTracks={action('getTracks')} />
  ));
