import React from "react";
import "./style.css";
import { FormBtn } from "../Form/index";
import API from "../../utils/API";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {console.log(props.results)}
      {props.results.map(result => (
        <li key={result.id} className="list-group-item">
          {result.volumeInfo.title} - {result.volumeInfo.authors.map(author=>{
            return <span>{author}, </span>
          })}
          <FormBtn /*onClick={() => handleFormSubmit}*/>
                Add Book
              </FormBtn>
        </li>
      ))}
    </ul>
  );
}

// handleFormSubmit = event => {
//   event.preventDefault();
//   API.saveBook({
//     title: props.result.volumeInfo.title,
//     author: props.result.volumeInfo.authors
//   })
// }

export default SearchResults;
