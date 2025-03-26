import React, { useEffect } from "react";
import Line from "../components/line/Line";
import "./SearchPage.css";
import SectionTitle from "../components/sectionTitle/SectionTitle";
import SearchResult from "../components/searchResult/SearchResult";
import { useData } from "../context/DataContext"; 
import { useClerk } from "@clerk/clerk-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
function SearchPage() {
  const params = useParams()
  const { recipes, likeRecipe, bookmarkRecipe } = useData();
  const clerk = useClerk()
  const [search, setSearch] = useState(params.searchValue||"")
  const [searchResults, setSearchResults] = useState(recipes)
  useEffect(() => {
      if(search.trim().length > 0){
        handleSearch()
      }
  },[])
  function handleSearch(){
    const results = recipes.filter((recipe) => recipe.name.toLowerCase().includes(search.toLowerCase()))
    setSearchResults(results)
  }
  return (
    <div>
      <header className="container search__header">
        <SectionTitle title="Explore recipies" />
        <div className="header__container">
          <input type="text" placeholder="recipe name, ingredient, meal type" value = {search} onChange = {(e) => setSearch(e.target.value)} />
          <button onClick = {handleSearch}>search</button> 
        </div>
      </header>
      <div className="container">
        <Line />
        {searchResults.map((recipe,) => (
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
