import React, { Component } from "react";

export default class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.addToday(this.state);
    console.log(this.state);
    this.setState({
      name: "",
      calories: ""
    });
  }

  render() {
    const foods = this.props.foods;

    return (
      <div class="row my-4 border align-items-center w-50 mx-auto">
        <div className="my-3 col-sm-3">
          <img className="w-100" src={foods.image} />{" "}
        </div>
        <div className="my-3 col-sm-5">
          <h5>{foods.name}</h5>
          <p>{foods.calories} cal</p>{" "}
        </div>
        <div className="my-3 col-sm-2">
          <input className="my-3 w-75" type="number" value="1" />{" "}
        </div>
        <div className="my-3 col-sm-2 text-center" onClick={this.handleClick}>
          <button className="btn-danger btn-lg">+</button>{" "}
        </div>
      </div>
    );
  }
}
