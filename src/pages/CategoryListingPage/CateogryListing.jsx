import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { fetchProductsByCategory } from "../../utils/productService";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import "./CategoryListing.css";
import Dropdown from "../../components/dropdown/Dropdown";

const CategoryListingPage = () => {
	const location = useLocation();
	const category = location.state?.category || "Default Category";

	const [products, setProducts] = useState([]);
	const [sortedProducts, setSortedProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const handleSortChange = (sortOption) => {
		let sortedData = [...products];
		switch (sortOption) {
			case "Price (Low to High)":
				sortedData.sort((a, b) => a.price - b.price);
				break;
			case "Price (High to Low)":
				sortedData.sort((a, b) => b.price - a.price);
				break;
			case "Rating":
				sortedData.sort((a, b) => b.rating.rate - a.rating.rate);
				break;
			default:
				sortedData = [...products]; // Default to the original order
		}
		setSortedProducts(sortedData);
	};

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true);
				const fetchedProducts = await fetchProductsByCategory(
					category.toLowerCase()
				);
				setProducts(fetchedProducts);
				setSortedProducts(fetchedProducts); // Initialize sorted products
			} catch (err) {
				console.error("Error fetching products:", err);
				setError("Failed to load products. Please try again later.");
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, [category]);

	if (loading) {
		return <LoadingScreen />;
	}

	if (error) {
		return <div className="error-message">{error}</div>;
	}

	return (
		<>
			<Navbar />
			<div className="category-listing-page">
				<h1 className="category-headline"> {category}</h1>
				<div className="dropdown-container">
					<Dropdown onSortChange={handleSortChange} />
				</div>
				<div className="product-list">
					<ProductCard products={sortedProducts} />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default CategoryListingPage;
