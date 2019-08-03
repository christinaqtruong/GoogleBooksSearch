import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <Container>
    <form className="search">
      <div className="form-group">
        <label htmlFor="book ">Book Title:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="book"
          list="books"
          type="text"
          className="form-control"
          placeholder="Search for a book"
          id="book"
        />
        <datalist id="books">
          {props.books.map(book => (
            <option value={book} key={book} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
    <Row>
          <Col size="md-3">
            <Link to="/books">← View Saved Books</Link>
          </Col>
        </Row>
    </Container>
  );
}

export default SearchForm;
