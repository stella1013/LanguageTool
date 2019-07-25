import * as React from 'react';
import {ChromePicker } from 'react-color';

class ColorPickerContainer extends React.Component<any, {}>{

  render() {
    return <div className="form-label">{this.props.label}<br/><ChromePicker /></div>;
  }
}
export default ColorPickerContainer;