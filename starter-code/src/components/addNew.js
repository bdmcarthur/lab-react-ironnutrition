import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class AddNew extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group controlId="calories">
          <Form.Label>Calories</Form.Label>
          <Form.Control type="text" placeholder="Calories" />
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="Image URL" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
