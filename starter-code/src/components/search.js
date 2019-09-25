import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

export default class Search extends React.Component {
  render() {
    return (
      <div className="mx-auto container my-5 w-75">
        <Form>
          <InputGroup className="mb-3">
            <FormControl
              type="text"
              placeholder="Search"
              onChange={event => this.props.search(event.target.value)}
            />
          </InputGroup>
        </Form>
      </div>
    );
  }
}
