import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useData } from "../context/DataContext";
import SearchResult from "../components/searchResult/SearchResult";
import SectionTitle from "../components/sectionTitle/SectionTitle";
import Line from "../components/line/Line";
import { useClerk } from "@clerk/clerk-react";
import { ImBin2 } from "react-icons/im";
function ProfilePage(props) {
  const params = useParams();
  const { recipes, likeRecipe, bookmarkRecipe, deleteRecipe } = useData();
  const clerk = useClerk();
  const ownRecipes = recipes.filter(
    (recipe) => recipe.author === params.userId
  );
  return (
    <div className="container profile">
      <SectionTitle
        title={params.userId != clerk.user?.id ? "Recipes" : "Your recipes"}
      />
      <Line />
      {ownRecipes.map((recipe) => (
        <SearchResult
          {...recipe}
          description={recipe.instructions.join(", ")}
          key={recipe.id}
          ingredients={recipe.ingredients.join(", ")}
          likeRecipe={likeRecipe}
          userId={clerk.user?.id}
          bookmarkRecipe={bookmarkRecipe}
        >
          {params.userId == clerk.user?.id ? (
            <>
              <button className = "profile__delete" onClick = {(e) => deleteRecipe(recipe.id)}>
                <ImBin2 /> delete
              </button>
            </>
          ) : null}
        </SearchResult>
      ))}
    </div>
  );
}

ProfilePage.propTypes = {};

export default ProfilePage;
