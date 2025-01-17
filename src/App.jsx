// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductDescription from "./pages/ProductDescriptionPage/ProductDescription";
import CartPage from "./pages/CartPage/CartPage";
import CategoryListing from "./pages/CategoryListingPage/CateogryListing";

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/product/:id" element={<ProductDescription />} />
				<Route path="/categories/:categoryName" element={<CategoryListing />} />
			</Routes>
		</Router>
	);
};
export default App;
