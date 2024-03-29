import React from "react";
import logo from "../assets/Images/Essentiald_logo.avif";
import apply from "../assets/Images/apply.png";
import Survey from "../assets/Images/Survey.png";
import Whipped_butter from "../assets/Images/Whipped_butter.png";
import Skin_Investment from "../assets/Images/Skin_Investment.png";
import Boxed_oil from "../assets/Images/Boxed_oil.png";
import "./Home.css";

const products = [
  {
    name: "Vanilla Butter Cream",
    image: logo,
    description: "Try out some of the nourishing Vanilla Butter Cream",
  },
  {
    name: "Apply To Skin",
    image: apply,
    description: "Apply generously to skin to hydrate and nourish.",
  },
  {
    name: "Whipped Butter",
    image: Whipped_butter,
    description: "Rich and creamy whipped butter for your skin.",
  },
  {
    name: "Skin Investment",
    image: Skin_Investment,
    description: "Invest in your skin with our premium products.",
  },
  {
    name: "Boxed Oil",
    image: Boxed_oil,
    description: "Essential oils for daily skincare routine.",
  },
  {
    name: "Surveys Are In",
    image: Survey,
    description: "Your feedback matters. See what others are saying!",
  },
];

function Home() {
  return (
    <div className="font-sans bg-yellow-100 p-10">
      <div className="text-center mb-10 bg-amber-900 text-white py-6">
        <h1 className="text-4xl font-bold">Welcome to Essential'd Skincare</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="flip-card mx-auto">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flip-card-back p-4 flex items-center justify-center bg-amber-200">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
