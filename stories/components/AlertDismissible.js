import React, {Component} from 'react';
import {select} from '@storybook/addon-knobs';
import {Alert} from '../../components';

class DismissAlertExample extends Component {
  state = {
    visible: true
  };

  dismissAlert = () => {
    this.setState({visible: false});
  }

  render() {
    const label = 'status';
    const options = {
      success: 'success',
      info: 'info',
      warning: 'warning',
      danger: 'danger'
    };
    const defaultValue = 'info';
    const value = select(label, options, defaultValue);
    return this.state.visible && (
      <Alert status={value} isDismissible={this.dismissAlert}>
        {`I am an ${value} alert and I can be dismissed!`}
      </Alert>
    );
  }
}

export default DismissAlertExample;
