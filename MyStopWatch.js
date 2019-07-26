import React from 'react';

class MyStopwatch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
      intervalId: null
    };
  }

  start() {
    this.setState({
        seconds: 0,
        intervalId: setInterval(() => {
          this.setState({
            seconds: this.state.seconds + 1,
          })
        }, 1000)
    });

  }

  stop() {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState({
        intervalId: null
      });
    }
  }

  render() {
    return (
      <div>
        <span>
          {this.state.seconds} seconds have elapsed.
        </span>
        <button onClick={() => this.start()}>
          Start
        </button>
        <button onClick={() => this.stop()}>
          Stop
        </button>
      </div>
    )
  }
}

export default MyStopwatch;
