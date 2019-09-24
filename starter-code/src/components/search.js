import React, { Component } from "react";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ term: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.search(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
