import React from 'react';

class MyComponentFetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      page: 1,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchData();
    }
  }

  async fetchData() {
    let response = await fetch('/api/some/data?page=' + this.state.page);
    let data = await response.json();
    this.setState({ data });
  }

  render() {
    return (
      <div>
	//Component does not exist
        {/**<OtherComponent data={this.state.data} />*/}
        <span>Page: {this.state.page}</span>
        <button onClick={() => this.setState({ page: this.state.page + 1 })}>
          Next page
        </button>
      </div>
    )
  }
}

export default MyComponentFetch;
