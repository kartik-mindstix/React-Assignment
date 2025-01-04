import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort By");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSortChange) onSortChange(option);
  };

  return (
    <div className="sort-dropdown">
      <button
        className="dropdown-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
        <span className="dropdown-icon">▼</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleOptionClick("Price (Low to High)")}>
            Price (Low to High)
          </li>
          <li onClick={() => handleOptionClick("Price (High to Low)")}>
            Price (High to Low)
          </li>
          <li onClick={() => handleOptionClick("Rating")}>Rating</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
