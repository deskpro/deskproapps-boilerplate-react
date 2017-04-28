import React from 'react';

export default class App extends React.Component {

  static propTypes = {
    dpapp: React.PropTypes.object,
    ui: React.PropTypes.func.isRequired
  };

  componentDidMount() {
    const { ui } = this.props;
    ui('enable', { loader: false });
  }

  render() {
    return (<div>Hello World</div>);
  }
}
