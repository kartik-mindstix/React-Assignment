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
				<div key={product.id} className="productBox">
					<div className="cartProductImage">
						<img src={product.image} alt="product image"></img>
					</div>
					<div className="productInfo">
						<h2 className="productName">{product.title}</h2>
						<p className="totalPrice">${roundUp(product.totalPrice)}</p>
					</div>
					<div className="quantityButtons">
						<button className="addButton" onClick={() => handleAddProduct(product)}>
							+
						</button>
						<p className="productQuantity">{product.quantity}</p>
						<button className="removeButton" onClick={() => handleRemoveProduct(product.id)}>
							-
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default CartCard;
