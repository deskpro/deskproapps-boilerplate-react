import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component
{
  static propTypes = { dpapp: React.PropTypes.object.isRequired };

  shouldComponentUpdate() { return false; }

  render() { return (<div>Hello world</div>); }
}
