import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchData } from "./Common";

const RecipeDetail = () => {
  const { id } = useParams();

  const [recipeData, setRecipeData] = useState(null);

  const rootURL = `https://dummyjson.com/recipes/${id}`;

  const getRecipeData = async () => {
    const getData = await fetchData(rootURL);
    setRecipeData(getData);
  };

  useEffect(() => {
    getRecipeData();
  }, [id]);

  if (!recipeData) {
    return <p>Loading recipe details...</p>;
  }

  return (
    <>
      <div className="row mb-4">
        <div className="col-12 col-md-12 col-lg-12">
          <img
            src={recipeData.image}
            className="card-img-top"
            alt={recipeData.name}
            style={{
              width: "100%",
              height: "350px",
              objectFit: "cover",
              display: "block",
              margin: "0 auto",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>

      <h3 className=" text-warning my-5 fs-1">
        <b>{recipeData.name}</b>
      </h3>

      <div className="d-flex justify-content-between mb-4">
        <p><i className="fa-solid fa-bowl-food me-1"></i>Meal Type: {recipeData.mealType.join(", ")}</p>
        <p><i className="fa-solid fa-star me-1"></i> Rating: {recipeData.rating}</p>
      </div>

      <div className="row mb-3">
        <div className="col-12 col-md-7 col-lg-7">
          <h4><i className="fa-solid fa-list-ol me-2"></i>Instuructions:</h4>

          <div className="d-flex justify-content-between mt-4">
            <p><i className="fa-solid fa-clock me-1"></i> Preparation Time: {recipeData.prepTimeMinutes} Minutes</p>
            <p><i className="fa-solid fa-clock me-1"></i> Cooking Time: {recipeData.cookTimeMinutes} Minutes</p>
          </div>

          <div className="d-flex justify-content-between">
            <p><i className="fa-solid fa-utensils me-1"></i> Difficulty: {recipeData.difficulty}</p>
            <p><i className="fa-solid fa-bezier-curve me-1"></i> Cuisine: {recipeData.cuisine}</p>
          </div>

          <div className="steps mt-4">
            {recipeData.instructions.map((instruction, index) => (
                <div key={index} className="step-item">
                  <h4>Step {index + 1}:</h4>
                  <p>{instruction}</p>
                </div>
              ))}

            {/* <div className="step-item">
              <h4>Step 1:</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div> */}
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-5 border p-3 bg-dark text-white">
          <h4><i className="fa-solid fa-basket-shopping me-1"></i>Ingredients:</h4>

          <p className="my-4 text-warning fw-bold">Servings: {recipeData.servings}</p>

          <ul className="list-group list-group-flush">
            {recipeData.ingredients.map((ingredient, index) => (
                <li key={index} className="list-group-item bg-dark text-white">
                  {ingredient}
                </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RecipeDetail;
