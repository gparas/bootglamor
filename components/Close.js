import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { mix } from 'polished';

import {
  color,
  fontSize,
} from '../style/constants';

const CloseStyle = glamorous.button(
  {
    float: 'right',
    fontSize: fontSize.large,
    fontWeight: 'bold',
    lineHeight: 1,
    color: color.black,
    opacity: 0.5,
    ':hover': {
      color: color.black,
      textDecoration: 'none',
      opacity: 0.75,
    },
    ':focus': { outline: 0 },
  },
  ({ status }) => ({
    color: mix(0.48, color.black, color[status]),
    backgroundColor: mix(0.8, color.white, color[status]),
    border: `1px solid ${mix(0.72, color.white, color[status])}`,
  }),
);

function Close({ children, className }) {
  return (
    <CloseStyle className={className} role="alert">
      {children}
    </CloseStyle>
  );
}

Close.defaultProps = {
  status: 'info',
  className: '',
  children: '',
};

Close.propTypes = {
  status: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Close;
