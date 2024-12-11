import React from "react";
import "./Header.css";
import thumbnail from "./thumbnail.jpg";
import { GoArrowRight } from "react-icons/go";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  function handleSearch(){
    const encoded = encodeURIComponent(search)
    navigate("/search/" + encoded)
    console.log(encoded)
  }
  return (
    <header className="header">
      <div className="container header__content">
        <div className="header__left">
          <h1>
            Discover Recipe <br /> & Delicious Food
          </h1>
          <div className = "header__input">
         
            <input placeholder="Search Your Favourite Food" value = {search} onChange = {(e) => setSearch(e.target.value)} />
            <button onClick = {handleSearch}>
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
