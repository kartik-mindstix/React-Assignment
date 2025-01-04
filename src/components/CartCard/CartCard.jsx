import React from "react";
import "./CartCard.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const CartCard = ({ products }) => {
	const dispatch = useDispatch();

	function handleAddProduct(product) {
		dispatch(cartActions.addToCart(product));
	}
	function handleRemoveProduct(id) {
		dispatch(cartActions.removeFromCart(id));
	}
    function roundUp(number, decimalPlaces = 2) {
        const multiplier = Math.pow(10, decimalPlaces);
        return Math.ceil(number * multiplier) / multiplier;
      }

  return (
    <div className="cartContainer">
      {products.map((product) => (
        <div key={product.id} className="productCard">
          <div className="productImage">
            <img src={product.image} alt="product" />
          </div>
          <div className="productDetails">
            <h2 className="productTitle">{product.title}</h2>
            <p className="productPrice">€ {roundUp(product.totalPrice)}</p>
          </div>
          <div className="productActions">
            <button className="removeButton" onClick={() => handleRemoveProduct(product.id)}>
              Remove
            </button>
            <div className="quantityControls">
              <button className="decreaseButton" onClick={() => handleRemoveProduct(product.id)}>
                -
              </button>
              <p className="quantity">{product.quantity}</p>
              <button className="increaseButton" onClick={() => handleAddProduct(product)}>
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartCard;

