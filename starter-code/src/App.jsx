import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/foodBox";
import { isTemplateElement } from "@babel/types";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        name: "José",
        age: 26,
        profession: "LT WD IH"
      }
    };
  }

  render() {
    return (
      <div className="container">
        <button>Add New Food</button>
        <FoodBox foods={foods} />
        {/* <div className="container">
          {foods.map(item => (
            <div className="row my-4 py-4">
              
            </div>
          ))}
        </div> */}
      </div>
    );
  }
}

export default App;
