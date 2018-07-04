import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import {
  color,
} from '../style/constants';

const CloseStyle = glamorous.button(
  {
    float: 'right',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    lineHeight: 1.2,
    color: color.black,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 0,
    padding: 0,
    WebkitAppearance: 'none',
    opacity: 0.5,
    ':hover': {
      color: color.black,
      textDecoration: 'none',
      opacity: 0.75,
    },
    ':focus': {
      outline: 0,
      color: color.black,
      textDecoration: 'none',
      opacity: 0.75,
    },
  },
);

function Close({ onClick, className }) {
  return (
    <CloseStyle type="button" aria-label="Close" onClick={onClick} className={className}>
      <span aria-hidden="true">
        &times;
      </span>
    </CloseStyle>
  );
}

Close.defaultProps = {
  className: '',
  onClick: null,
};

Close.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Close;
