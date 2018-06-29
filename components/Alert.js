import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { mix } from 'polished';

import {
  color,
  borderRadius,
} from '../style/constants';

const AlertStyle = glamorous.div(
  {
    position: 'relative',
    padding: '0.75rem 1.25rem',
    marginBottom: '1rem',
    borderRadius,
  },
  ({ status }) => ({
    color: mix(0.48, color.black, color[status]),
    backgroundColor: mix(0.8, color.white, color[status]),
    border: `1px solid ${mix(0.72, color.white, color[status])}`,
  }),
);

function Alert({ children, status, className }) {
  return (
    <AlertStyle status={status} className={className} role="alert">
      {children}
    </AlertStyle>
  );
}

Alert.defaultProps = {
  status: 'info',
  className: '',
  children: '',
};

Alert.propTypes = {
  status: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Alert;
