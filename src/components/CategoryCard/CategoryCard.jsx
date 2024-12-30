import React from "react";
import "./CategoryCard.css";
import { FaArrowRight } from "react-icons/fa";

const CategoryCard = ({ image, title, bgColor }) => {
  return (
    <div className="category-card">
      <div
        className="category-card-image"
        style={{ backgroundColor: bgColor || "#f5f5f5" }}
      >
        <img src={image} alt={title} />
      </div>
      <button className="category-card-button">
        <span>{title}</span>
        <FaArrowRight className="category-card-icon" />
      </button>
    </div>
  );
};

export default CategoryCard;
