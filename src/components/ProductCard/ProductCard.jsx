import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"; // Import icons
import "./ProductCard.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCard = ({ products }) => {
	const navigate = useNavigate();

	const dispatch = useDispatch();
	function handleAddtoCart(product) {
		dispatch(cartActions.addToCart(product));
	}
	const stateItems = useSelector((state) => state.cart.products);
	console.log(stateItems);

	const renderStars = (rating) => {
		const fullStars = Math.round(rating);
		const emptyStars = 5 - fullStars;

		return (
			<>
				{Array(fullStars)
					.fill(0)
					.map((_, index) => (
						<FaStar key={`full-${index}`} className="icon" />
					))}

				{Array(emptyStars)
					.fill(0)
					.map((_, index) => (
						<FaRegStar key={`empty-${index}`} className="icon" />
					))}
			</>
		);
	};

	return (
		<div className="mainContainer">
			{products.map((product) => (
				<div
					key={product.id}
					className="box"
					
				>
					<div className="card">
						<div className="image">
							<img src={product.image} alt="product" onClick={() => navigate(`/product/${product.id}`)}/>
						</div>
						<div className="desc">
							<h1>{product.title}</h1>
							<p>{product.description}</p>
							<span>${product.price}</span>
						</div>
						<div className="stars">{renderStars(product.rating.rate)}</div>
					</div>
					<button className="btn" onClick={() => handleAddtoCart(product)}>
						<AiOutlineShoppingCart />
						Add to Cart
					</button>
				</div>
			))}
		</div>
	);
};

export default ProductCard;
