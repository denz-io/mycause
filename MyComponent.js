import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input value={this.state.value} type="text" onChange={this.handleChange} />
      </div>
    );
  }
}

export default MyComponent;
