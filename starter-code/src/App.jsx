import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/foodBox";
import AddNew from "./components/addNew";
import Today from "./components/today";
import Search from "./components/search";
import Button from "react-bootstrap/Button";
import { isTemplateElement } from "@babel/types";
let today = [];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: foods,
      // today: today,
      newActive: false,
      todayActive: false,
      todaysFoods: [foods[0]],
      searched: []
    };

    this.newToggle = this.newToggle.bind(this);
    this.addItem = this.addItem.bind(this);
    this.search = this.search.bind(this);
    this.addToday = this.addToday.bind(this);
  }

  addToday = item => {
    today.push(item);
    this.setState({
      today: today
    });
    this.todayToggle();
  };

  search = searchTerm => {
    console.log(searchTerm);
    console.log(this.state.items);
    const itemCopy = [...foods];
    const searched = itemCopy.filter(item => {
      let name = item.name.toLowerCase();
      if (name.includes(searchTerm.toLowerCase())) {
        return item;
      }
    });
    this.setState({
      items: searched
    });
  };

  addItem = item => {
    const itemCopy = this.state.items;
    itemCopy.push(item);
    this.setState({
      items: itemCopy
    });
  };

  newToggle(event) {
    this.setState({
      newActive: event.target
    });
  }

  render() {
    return (
      <div className="container mb-5">
        <h1 className="display-1 text-center mt-5">IronNutrition</h1>
        <Search search={this.search} />
        <Today todayFoods={this.state.todaysFoods} />
        {this.state.items.map(foods => (
          <FoodBox foods={foods} key={foods.name} />
        ))}
        {this.state.newActive && <AddNew addItem={this.addItem} />}
        <Button
          onClick={this.newToggle}
          variant="outline-danger my-5 text-center d-block btn-lg mx-auto"
        >
          Add New Food
        </Button>
      </div>
    );
  }
}

export default App;
