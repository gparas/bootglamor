import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { mix } from 'polished';
import Close from './Close';

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

const DismissButton = glamorous(Close)(
  {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '0.75rem 1.25rem',
  },
);

function Alert({
  children, status, className, isDismissible,
}) {
  return (
    <AlertStyle status={status} className={className} role="alert">
      {children}
      {isDismissible && (
        <DismissButton onClick={isDismissible} />
      )}
    </AlertStyle>
  );
}

Alert.defaultProps = {
  status: 'info',
};

Alert.propTypes = {
  /** success, info, warning, danger */
  status: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  isDismissible: PropTypes.func,
};

export default Alert;
