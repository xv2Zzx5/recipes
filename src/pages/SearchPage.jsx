import React from "react";
import Line from "../components/line/Line";
import "./SearchPage.css";
import SectionTitle from "../components/sectionTitle/SectionTitle";
import SearchResult from "../components/searchResult/SearchResult";
import Milk from "../assets/milk.jpg";
import { useData } from "../context/DataContext"; 
import { useClerk } from "@clerk/clerk-react";
function SearchPage() {
  const { recipes, likeRecipe, bookmarkRecipe } = useData();
  const clerk = useClerk()

  return (
    <div>
      <header className="container search__header">
        <SectionTitle title="Explore recipies" />
        <div className="header__container">
          <input type="text" placeholder="recipe name, ingredient, meal type" />
          <button>search</button> 
        </div>
      </header>
      <div className="container">
        <Line />
        {recipes.map((recipe,) => (
          <SearchResult
            description={recipe.instructions.join(", ")} 
            key = {recipe.id}
            image={recipe.image}
            ingredients={recipe.ingredients.join(", ")}
            name={recipe.name}
            username= {recipe.username}
            likeRecipe = {likeRecipe}
            id = {recipe.id} 
            userId = {clerk.user?.id}  
            likes = {recipe.likes}   
            bookmarkRecipe = {bookmarkRecipe}  
            bookmarks = {recipe.bookmarks}    
            author = {recipe.author}         
          />
        ))}
        
      </div>
    </div>
  );
}   
export default SearchPage;
