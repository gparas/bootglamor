import React from 'react';
import { select } from '@storybook/addon-knobs';

import { Alert } from '../../components';

const label = 'status';
const options = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  danger: 'danger',
};
const defaultValue = 'info';

const component = () => {
  const value = select(label, options, defaultValue);
  return (
    <Alert
      status={value}
    >
      {`A simple ${value} alert!`}
    </Alert>
  );
};

export default component;
