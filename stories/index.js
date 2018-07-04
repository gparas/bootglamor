import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import {
  AlertExample,
  AlertDismissibleExample,
  BadgeExample,
} from './components/';

import DismissAlert from './notes/DismissAlert.mkd';

const storyWrapper = story => (
  <div style={{ margin: '35px' }}>
    {story()}
  </div>
);

storiesOf('Components|Alert', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs)
  .add('Default', AlertExample);

storiesOf('Components|Alert', module)
  .addDecorator((story, context) => withInfo({
    propTablesExclude: [AlertDismissibleExample],
    source: false,
    text: DismissAlert,
  })(story)(context))
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs)
  .add('Dismiss', () => <AlertDismissibleExample />);

storiesOf('Components|Badge', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs)
  .add('Default', BadgeExample);
