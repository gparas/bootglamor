import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';

import { Badge } from '../../components';

const label = 'status';
const options = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  info: 'info',
  warning: 'warning',
  danger: 'danger',
  dark: 'dark',
};
const defaultValue = 'primary';

const component = () => {
  const value = select(label, options, defaultValue);
  return (
    <Badge
      status={value}
      pill={boolean('pill', false)}
    >
      {value}
    </Badge>
  );
};

export default component;
