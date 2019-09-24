import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/foodBox";
import AddNew from "./components/addNew";
import Button from "react-bootstrap/Button";
import { isTemplateElement } from "@babel/types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(event) {
    console.log("clicked");
    this.setState({
      active: event.target
    });
  }

  render() {
    return (
      <div className="container">
        <FoodBox foods={foods} />
        {/* <input type="checkbox" onChange={this.toggle} /> */}
        <Button onClick={this.toggle} variant="danger my-5">
          Danger
        </Button>
        {this.state.active && <AddNew />}
      </div>
    );
  }
}

export default App;
