import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";
import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";
import slidesData from "../../components/Carousel/CarouselData.json";
import categoryData from "../../components/CategoryCard/CategoryData";
import "./Homepage.css";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { fetchProducts } from '../../utils/productService'; 
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { useSelector } from "react-redux";



const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const loadProducts = async () => {
        try {
          const fetchedProducts = await fetchProducts();
          setProducts(fetchedProducts);
        } catch (error) {
          console.error('Failed to load products:', error);
        } finally {
          setLoading(false);
        }
      };
  
      loadProducts();
    }, []);
  
    if (loading) {
      return <LoadingScreen/>;
    }
  	return (
		<div>
			<Navbar />
			<div className="carousel-container">
				<Carousel data={slidesData.slides} />
			</div>
            <h1 className="carousel-headline">
				Discover Our Products
			</h1>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: "20px",
				}}
			>
				{categoryData.map((category, index) => (
					<CategoryCard
						key={index}
						image={category.image}
						title={category.title}
						bgColor={category.bgColor}
					/>
				))}
			</div>
			<h1 className="carousel-headline">
				Explore Our Exclusive Collection of Products!
			</h1>
			<ProductCard products={products} />
			<Footer />
		</div>
	);
};

export default HomePage;
