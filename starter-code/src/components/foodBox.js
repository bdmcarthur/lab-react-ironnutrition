import React, { Component } from "react";

export default class FoodBox extends Component {
  render() {
    const foods = this.props.foods;

    return (
      <div>
        {foods.map(food => (
          <article className="col-sm-4">
            {" "}
            <div className="">
              {" "}
              <div className="">
                {" "}
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories}</small>{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="">
              <div className=""></div>{" "}
            </div>{" "}
            <div className="">
              {" "}
              <figure className="">
                <img className="w-50" src={food.image} />{" "}
              </figure>{" "}
            </div>{" "}
            <div className="col-sm-4">
              <input className="" type="number" value="1" />{" "}
            </div>{" "}
            <div className="col-sm-4">
              <button className="">+</button>{" "}
            </div>{" "}
          </article>
        ))}
      </div>
    );
  }
}
