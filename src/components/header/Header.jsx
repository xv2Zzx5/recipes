import React from "react";
import "./Header.css";
import thumbnail from "./thumbnail.jpg";
import { GoArrowRight } from "react-icons/go";

function Header() {
  return (
    <header className="header">
      <div className="container header__content">
        <div className="header__left">
          <h1>
            Discover Recipe <br /> & Delicious Food
          </h1>
          <div className = "header__input">
         
            <input placeholder="Search Your Favourite Food" />
            <button>
              <GoArrowRight />
            </button>
          </div>
        </div>
        <div className="header__right">
          <img src={thumbnail} alt="thumbnail" />
        </div>
      </div>
    </header>
  );
}

export default Header;
