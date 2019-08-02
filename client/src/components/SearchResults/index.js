import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {console.log(props.results)}
      {props.results.map(result => (
        <li key={result.id} className="list-group-item">
          {result.volumeInfo.title} - {result.volumeInfo.authors.map(author=>{
            return <span>{author}, </span>
          })}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
