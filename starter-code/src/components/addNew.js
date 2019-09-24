import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class AddNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: "",
      image: ""
    };
  }

  handleNameInput = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleCaloriesInput = event => {
    this.setState({
      calories: event.target.value
    });
  };

  handleImageInput = event => {
    this.setState({
      image: event.target.value
    });
  };

  handleFormSubmit = event => {
    console.log(this.state);
    event.preventDefault();
    this.props.addItem(this.state);
    this.setState({
      name: "",
      calories: "",
      image: ""
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={event => this.handleNameInput(event)}
            />
          </Form.Group>

          <Form.Group controlId="calories">
            <Form.Label>Calories</Form.Label>
            <Form.Control
              type="text"
              placeholder="Calories"
              value={this.state.calories}
              onChange={e => this.handleCaloriesInput(e)}
            />
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Image URL"
              value={this.state.image}
              onChange={e => this.handleImageInput(e)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" value="Submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
