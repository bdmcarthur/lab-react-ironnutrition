import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/foodBox";
import AddNew from "./components/addNew";
import Search from "./components/search";
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
    this.addItem = this.addItem.bind(this);
    this.search = this.search.bind(this);
  }

  search = searchTerm => {
    console.log(searchTerm);
    const itemCopy = [...foods];
    const searched = itemCopy.filter(item => {
      let name = item.name.toLowerCase();
      console.log(name);
      if (name.includes(searchTerm.term)) {
        return item;
      }
    });
    this.setState({
      items: searched
    });
  };

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
        <Search search={this.search} />
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
