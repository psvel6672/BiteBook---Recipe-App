import React from "react";

const About = () => {
  return (
    <>
      <h4 className="text-warning display-6 mt-5 mb-3 windtitle fw-bold">
        About - BiteBook
      </h4>

      <div className="row text-muted">
        <div className="col-12 col-md-8 col-lg-8">
          <p>
            Welcome to <b>BiteBook</b> - your digital cookbook for discovering,
            saving, and savoring recipes from around the world!
          </p>

          <p>
            BiteBook is a sleek and simple recipe app designed for food lovers,
            home cooks, and culinary explorers. Whether you're looking for quick
            weeknight meals, exotic dishes, or comfort food favorites, BiteBook
            has something delicious for everyone.
          </p>

          <p>At its core, BiteBook is built to help you:</p>

          <ul>
            <li>Browse through a variety of recipe ideas.</li>
            <li>Quickly view ingredients and instructions.</li>
            <li>Get inspired by dishes from different cuisines and styles.</li>
            <li>Save and manage your favorite recipes with ease.</li>
          </ul>

          <p>
            To build and test the app functionality, we've integrated mock
            recipe data from the DummyJSON API - a handy tool for developers to
            simulate and prototype without relying on live data sources.
          </p>

          <p>
            BiteBook was crafted with clean UI principles, responsive layouts,
            and scalable code to ensure a smooth experience across all devices.
            As the project grows, we'll continue adding features like:
          </p>

          <ul>
            <li>User-submitted recipes</li>
            <li>Nutrition info</li>
            <li>Shopping list generation</li>
            <li>Meal planning tools</li>
          </ul>

          <p>
            This project is open source and available for contributions,
            suggestions, or forks. Check out the repository on GitHub:
          </p>

          <p>
            🔗
            <a href="https://github.com/psvel6672" className="mx-1" target="_blank">
              GitHub Repository
            </a>
             — feel free to star, fork, or contribute!
          </p>

          <p>
            Whether you're a seasoned chef or just starting your kitchen
            journey, BiteBook is here to make your cooking experience more fun
            and flavorful.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
