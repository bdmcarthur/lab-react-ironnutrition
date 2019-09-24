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
      items: foods,
      active: false
    };
    this.toggle = this.toggle.bind(this);
    // this.addItem = this.addItem.bind(this);
  }

  addItem = item => {
    const itemCopy = [...foods];
    itemCopy.push(item);
    this.setState({
      items: itemCopy
    });
  };

  toggle(event) {
    this.setState({
      active: event.target
    });
  }

  render() {
    return (
      <div className="container">
        <FoodBox foods={this.state.items} />
        <Button onClick={this.toggle} variant="danger my-5">
          Danger
        </Button>
        {this.state.active && <AddNew addItem={this.addItem} />}
      </div>
    );
  }
}

export default App;
