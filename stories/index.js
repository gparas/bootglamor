import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Alert from '../components/Alert';

storiesOf('Button', module)
  .add('with text', () => (
    <Alert>
      Hello Button
    </Alert>
  ));
