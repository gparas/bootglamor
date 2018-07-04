import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import {
  color,
  borderRadius,
} from '../style/constants';

const BadgeStyle = glamorous.span(
  {
    display: 'inline-block',
    padding: '.25em .4em',
    fontSize: '75%',
    fontWeight: 'bold',
    lineHeight: 1,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    borderRadius,
    ':empty': {
      display: 'none',
    },
  },
  ({ status }) => ({
    color: '#fff',
    backgroundColor: color[status],
  }),
);

function Badge({
  children, status, className,
}) {
  return (
    <BadgeStyle status={status} className={className}>
      {children}
    </BadgeStyle>
  );
}

Badge.defaultProps = {
  status: 'primary',
};

Badge.propTypes = {
  /** primary, secondary, success, info, warning, danger, dark */
  status: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Badge;
