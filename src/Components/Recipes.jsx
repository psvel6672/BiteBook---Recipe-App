import React, { useState, useEffect } from "react";
import { fetchData } from "./Common";

import { useParams } from "react-router-dom";

const Recipes = () => {
  const { recipe } = useParams();

  const rootUrl = "https://dummyjson.com/recipes/";

  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getTags = async () => {
      const getTagsFromURL = await fetchData(`${rootUrl}tags`);
      setTags(getTagsFromURL);
    };
    getTags();
  }, []);

  const [recipesList, setRecipesList] = useState(null);

  const fetchRecipes = async () => {
    try {
      
      const resp = await fetchData(`${rootUrl}tag/${recipe}`);

      if (resp.recipes.length === 0) {
        const resp2 = await fetchData(`${rootUrl}search?q=${recipe}`);
        setRecipesList(resp2.recipes);
      } else {
        setRecipesList(resp.recipes);
      }
    } catch (err) {
      console.log(err);
      setRecipesList(null);
    }
  };

  useEffect(() => {
    setRecipesList(null);
    fetchRecipes();
  }, [recipe]);

  if (!recipesList) {
    return <p>Loading recipes...</p>;
  }

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-9 col-lg-9">
          <h2>Fresh Out of the Oven</h2>
          <p className="my-4">
            Discover the newest recipes just added to BiteBokk — hot, tasty, and
            ready to inspire your next meal.From quick bites to hearty mains,
            these fresh picks are straight from our test kitchen! 🍽️🔥
          </p>

          <div className="row">
            <h4 className="text-warning mb-2">
              <b>
                <i className="fa-solid fa-kitchen-set me-1"></i> {recipe}{" "}
                Recipes
              </b>
            </h4>
          </div>

          <div className="d-flex">
            <div className="row">
              {(recipesList.length > 0) ? (
                recipesList.map((recipe, index) => {
                  return (
                    <div key={index} className="col-12 col-md-4 col-lg-4">
                      <div className="card my-3 recipe-card">
                        <img
                          src={recipe.image}
                          className="card-img-top p-3"
                          alt={recipe.name}
                        />
                        <div className="card-body">
                          <a
                            className="card-title"
                            href={`/recipeinfo/${recipe.id}`}
                          >
                            {recipe.name}
                          </a>
                          <br />
                          <div
                            className="btn-group btn-group-sm my-3"
                            role="group"
                            aria-label="Small button group"
                          >
                            {recipe.tags.map((tag, index1) => {
                              return (
                                index1 <= 2 && (
                                  <a
                                    key={index1}
                                    type="a"
                                    href={`/recipes/${tag}`}
                                    className="btn btn-outline-warning text-muted"
                                  >
                                    {tag}
                                  </a>
                                )
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="m-3"><p>{`No data found...`}</p></div>
              )}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 col-lg-3">
          <h2 className="mb-3">Tags</h2>
          <ul className="list-group list-group-flush taglist">
            {tags.map((tag, index) => {
              return (
                <li key={index} className="list-group-item">
                  <a href={`${tag}`}>{tag}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Recipes;
