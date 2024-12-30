import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { fetchProductsById } from "../../utils/productService";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { FaRegStar, FaStar } from "react-icons/fa";
import "./ProductDescription.css";
import Toast from "../../components/Toast/Toast";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductDescription = () => {
	const { id } = useParams();
	const dispatch = useDispatch()
	const navigate = useNavigate();

	const [product, setProduct] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [showToast, setShowToast] = useState(false);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const product = await fetchProductsById(id);
				setProduct(product);
			} catch (error) {
				console.error("Failed to load product:", error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchProduct();
	}, []);

	if (isLoading) {
		return <LoadingScreen />;
	}

	function handleToastMessage(value) {
		setShowToast(value)
	}
	function addProductToCart(){
		dispatch(cartActions.addToCart(product))
	}

	const renderStars = (rating) => {
		const fullStars = Math.round(rating);
		const emptyStars = 5 - fullStars;

		return (
			<>
				{Array(fullStars)
					.fill(0)
					.map((_, index) => (
						<FaStar key={`full-${index}`} className="star" />
					))}
				{Array(emptyStars)
					.fill(0)
					.map((_, index) => (
						<FaRegStar key={`empty-${index}`} className="star" />
					))}
			</>
		);
	};

	return (
		<>
			<Navbar />
			{showToast && (
				<Toast
					message={'Product is added to cart'}
					duration={1000} 
					onClose={() => handleToastMessage(false)} 
				/>
			)}
			<div className="product-description-container">
				<div className="image-section">
					<img src={product.image} alt={product.title} />
				</div>
				<div className="info-section">
					<h1>{product.title}</h1>
					<p className="category">Category: {product.category}</p>
					<div className="rating">{renderStars(product.rating.rate)}</div>
					<p className="price">${product.price.toFixed(2)}</p>
					<p className="description">{product.description}</p>
					<div className="product-actions">
						<button className="add-to-cart" onClick={() => {handleToastMessage(true); addProductToCart()}}>
							Add to Cart
						</button>
						<button className="go-to-cart" onClick={() => navigate(`/cart`)}>Go to Cart</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ProductDescription;
