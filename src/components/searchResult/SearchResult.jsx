import React from "react";
import { GrFavorite } from "react-icons/gr";
import { FaRegBookmark } from "react-icons/fa";
import PropTypes from "prop-types";
import "./SearchResult.css";
import noimage from "../../assets/noimage.jpg";
import { FcLike } from "react-icons/fc";
import { FaBookmark } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function SearchResult(props) {
  return (
    <div className="search-result">
      <div className="search-result__left">
        <img src={props.image ? props.image : noimage} alt={props.name} />
      </div>
      <div className="search-result__right">
        <h3>
          {props.name} made by <NavLink to = {"/profile/" + props.author}>{props.username}</NavLink>
        </h3>
        <p className="search-result__ingredients">{props.ingredients}</p>
        <p className="search-result__description">{props.description}</p>
        <div className="search-result__actions">
          <button onClick={(e) => props.likeRecipe(props.id, props.userId)}>
            {props.likes.includes(props.userId) ? <FcLike /> : <GrFavorite />}
            {props.likes.length}
          </button>

          <button
            style={{
              color: props.bookmarks.includes(props.userId) ? "yellow" : "",
            }}
            onClick={(e) => props.bookmarkRecipe(props.id, props.userId)}
          >
            {props.bookmarks.includes(props.userId) ? (
              <FaBookmark />
            ) : (
              <FaRegBookmark />
            )}
            {props.bookmarks.length}
          </button>
          {props.children}
        </div>
      </div>
    </div>
  );
}
SearchResult.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default SearchResult;
