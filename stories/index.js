import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import {
  AlertExample,
} from './components/';

const storyWrapper = (story) => {
  return (
    <div style={{ margin: '35px' }}>
      {story()}
    </div>
  );
};

storiesOf('Components|Alert', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs)
  .add('Default', AlertExample);
