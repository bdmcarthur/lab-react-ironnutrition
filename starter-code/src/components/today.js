import React, { Component } from "react";

export default class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  render() {
    return (
      <div className="container text-center my-5">
        <h1>Today's Foods</h1>
        {/* <ul>
          {todaysFood.map(food => (
            <li>
              key={food.name}>{food.quantity} {food.name}
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}
