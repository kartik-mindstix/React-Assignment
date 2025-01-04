import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { fetchProductsByCategory } from "../../utils/productService";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import './CategoryListing.css'

const CategoryListingPage = () => {
	const location = useLocation();
	const category = location.state?.category || "Default Category";

	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true);
				const fetchedProducts = await fetchProductsByCategory(
					category.toLowerCase()
				);
				setProducts(fetchedProducts);
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

	return (
		<>
			<Navbar />
			<div className="category-listing-page">
				<h1 className="category-headline"> {category}</h1>
				<div className="product-list">
					<ProductCard products={products} />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default CategoryListingPage;
