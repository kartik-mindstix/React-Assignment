import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../../components/CartCard/CartCard";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import emptyCartImage from "../../assets/empty_cart_image.svg";
import "./CartPage.css";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate()
	const cartProducts = useSelector((state) => state.cart.products);

	const totalItems = useSelector((state) => state.cart.totalQuantity);
	const cartTotal = useSelector((state) => state.cart.totalCost).toFixed(2);
	const deliveryCharges = 0;
	const taxes = (cartTotal * 0.1).toFixed(2);
	const paymentTotal = (
		parseFloat(cartTotal) +
		parseFloat(taxes) +
		deliveryCharges
	).toFixed(2);

  function navigateToHome(){
    navigate("/");
  }

	if (totalItems === 0) {
		return (
			<>
				<Navbar />
				<div className="empty-cart-container">
					<img
						src={emptyCartImage}
						alt="Empty Cart"
						className="empty-cart-image"
					/>
					<h2 className="empty-cart-title">Your cart is empty!</h2>
					<button className="empty-cart-button" onClick={navigateToHome}>Continue Shopping</button>
				</div>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Navbar />
			<div className="cartPageContainer">
				<div className="cartSection">
					<CartCard products={cartProducts} />
				</div>
				<div className="orderSummarySection">
					<h2>You Pay</h2>
					<h3 className="paymentTotal">$ {paymentTotal}</h3>
					<div className="orderSummaryDetails">
						<p>
							My Cart Total <span>$ {cartTotal}</span>
						</p>
						<p>
							Delivery Charges{" "}
							<span className={deliveryCharges === 0 ? "free" : ""}>
								{deliveryCharges === 0 ? "FREE" : `$ ${deliveryCharges}`}
							</span>
						</p>
						<p>
							Taxes (incl. in order total) <span>$ {taxes}</span>
						</p>
					</div>
					<hr />
					<div className="orderSummaryDetails">
						<p>
							Payment Total <span>$ {paymentTotal}</span>
						</p>
					</div>
					<p className="orderPolicyLink">View Our Order Policy</p>
					<div className="promotionCodeSection">
						<p>Have A Promotion Code?</p>
						<div className="promotionInputContainer">
							<input type="text" placeholder="Promotion Code" />
							<button className="verifyButton">Verify</button>
						</div>
					</div>
					<button className="checkoutButton">Checkout</button>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default CartPage;
