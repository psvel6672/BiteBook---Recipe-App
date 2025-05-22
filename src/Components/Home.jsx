import React, { useState, useEffect } from "react";

import heroSecImg from "../assets/images/cookingfemale.png";
import { fetchData } from "./Common";

const Home = () => {
  const [homeRecipes, setHomeRecipes] = useState([]);

  const defUrl = "https://dummyjson.com/recipes/";

  const fetchRecipes = async () => {
    try {
      const resp = await fetchData(`${defUrl}?limit=8&select=name,image,tags`);
      setHomeRecipes(resp.recipes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const FAQArr = [
    {
      title: "1. What is BiteBook?",
      desc: "BiteBook is your go-to digital cookbook! We serve up a delicious collection of recipes for all occasions — from quick weekday meals to indulgent desserts. Whether you're a beginner or a seasoned cook, you'll find something tasty here.",
    },
    {
      title: "2. Is BiteBook free to use?",
      desc: "Yes! BiteBook is completely free to browse and use. No subscriptions or hidden charges — just bite-sized culinary inspiration at your fingertips.",
    },
    {
      title: "3. Where do the recipes come from?",
      desc: "Recipes are sourced from verified databases and curated collections (like DummyJSON), and soon you'll be able to submit your own! We focus on quality, variety, and ease of cooking.",
    },
    {
      title: "4. Can I save my favorite recipes?",
      desc: "🔜 Coming Soon! - You’ll soon be able to create an account and save your favorite recipes for easy access.",
    },
    {
      title: "5. Do you support vegetarian or diet-specific recipes?",
      desc: "Yes! You can filter recipes by tags like Vegetarian, Vegan, Keto, Gluten-Free, and more. We're constantly expanding our collection to meet different dietary preferences.",
    },
    {
      title: "6. How can I search for recipes?",
      desc: "Use the search bar to look up recipes by name, ingredients, cuisine (e.g., Indian, Italian), or tags like “Quick”, “Healthy”, or “Kids”.",
    },
    {
      title: "7. How do I report an error or incorrect recipe?",
      desc: "If you spot a mistake or bug, you can contact us via the feedback form on the app, or email us at support@bitebook.com.",
    },
    {
      title: "8. Can I submit my own recipe?",
      desc: "📢 Feature coming soon! - We're working on letting users submit and share their own recipes with the BiteBook community.",
    },
    {
      title: "9. Is there a mobile app for BiteBook?",
      desc: "Not yet — but a mobile-friendly version of the website is available, and an Android/iOS app is on the roadmap!",
    },
    {
      title: "10. Who created BiteBook?",
      desc: "BiteBook is built with love by food enthusiasts and developers who believe good food should be easy to discover and cook. ❤️",
    },
  ];

  return (
    <>
      <section className="">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-end mt-0 mt-md-5">
              <h1 className="display-4 fw-bold text-warning">
                Cook. <span className="text-dark">Eat.</span> Repeat.
              </h1>
              <p className="lead text-muted">
                Discover easy and delicious recipes made for every day of the
                week. From quick snacks to hearty dinners — we've got your
                cravings covered.
              </p>
              <a
                href="/recipes/Indian"
                className="btn btn-warning text-white px-4 mt-3"
              >
                Browse Recipes <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>

            <div className="col-md-6 my-4 my-md-0">
              <img
                src={heroSecImg}
                alt="Delicious Recipe"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="row mb-3">
          <h2 className="fw-bold text-center text-warning">
            What's <span className="text-dark">Cooking</span> Today?
          </h2>
          <p className="text-center mt-3">
            Explore trending recipes, seasonal dishes, and step-by-step guides.{" "}
            <br /> Dinner inspiration is just a scroll away.
          </p>
        </div>

        <div className="row">
          {homeRecipes &&
            homeRecipes.map((recipe, index) => {
              return (
                <div key={index} className="col-12 col-md-3 col-lg-3">
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
            })}
        </div>

        {homeRecipes && (
          <div className="text-center my-5">
            <a
              className="btn btn-warning text-white px-4 py-2"
              href="/recipes/Indian"
            >
              Explore More{" "}
              <i className="fa-solid fa-arrow-up-right-from-square ms-1"></i>
            </a>
          </div>
        )}
      </section>

      <section>
        <div className="row text-center">
          <h2 className="faq-title">Got Questions? Get Answers</h2>
          <p>Answers to the most frequently asked questions.</p>
        </div>

        <div className="row d-flex justify-content-center my-5">
          <div className="col-12 col-md-8 col-lg-8">
            <div className="accordion" id="faqAccordion">
              {FAQArr.map((faq, index) => {

                return (
                  <div key={index} className="accordion-item">
                    <h2 className="accordion-header" id={`heading${index + 1}`}>
                      <button
                        className={`accordion-button ${index != 0 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${index + 1}`}
                        aria-expanded={index === 0 ? "true" : "false"}
                        aria-controls={`faq${index + 1}`}
                      >
                        {faq.title}
                      </button>
                    </h2>
                    <div
                      id={`faq${index + 1}`}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      aria-labelledby={`heading${index + 1}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">{faq.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
