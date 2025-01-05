import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import useWindowSize from "../../utils/CustomHooks/useWindowSize"; 
import MobileNavbar from "./MobileNavbar/MobileNavbar"; 

const Navbar = () => {
	const navigate = useNavigate();
	const productQuantity = useSelector((state) => state.cart.totalQuantity);
	const screenWidth = useWindowSize(); 

	return (
		<>
			{screenWidth > 768 ? (
				<nav className="navbar">
					<div className="navbar-left">
						<Link to="/" className="logo">
							<span className="logo-text">E-COM</span>
						</Link>
						<Link to="/products" className="nav-link">
							Products
						</Link>
						<Link to="/brands" className="nav-link">
							Markets
						</Link>
						<Link to="/special-offers" className="nav-link">
							Special Offers
						</Link>
					</div>
					<div className="navbar-right">
						<div className="search-bar">
							<input
								type="text"
								className="search-input"
								placeholder="Search"
							/>
							<button className="search-button">
								<span role="img" aria-label="search">
									<IoMdSearch />
								</span>
							</button>
						</div>
						{productQuantity >= 1 && (
							<div
								className="cart-icon-container"
								onClick={() => navigate(`/cart`)}
							>
								<span role="img" aria-label="cart" className="cart-icon">
									<BsCart4 />
								</span>
								<span className="cart-count">{productQuantity}</span>
							</div>
						)}
					</div>
				</nav>
			) : (
				<MobileNavbar productQuantity={productQuantity} navigate={navigate} />
			)}
		</>
	);
};

export default Navbar;
