import React from "react";
import "./CategoryCard.css";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ image, title, bgColor }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/categories/${title}`, { state: { category: title } });
  };

  return (
    <div className="category-card">
      <div
        className="category-card-image"
        style={{ backgroundColor: bgColor || "#f5f5f5" }}
      >
        <img src={image} alt={title} />
      </div>
      <button className="category-card-button" onClick={handleNavigation}>
        <span>{title}</span>
        <FaArrowRight className="category-card-icon" />
      </button>
    </div>
  );
};

export default CategoryCard;
