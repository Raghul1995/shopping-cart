import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useGlobalContext } from './Context/CartContext';

function Navbar() {
	const { amount } = useGlobalContext();
	return (
		<nav>
			<div className="nav-center">
				<h3>useReducer</h3>
				<div className="nav-container">
					<svg viewBox="0 0 20 20">
						<FaShoppingCart />
					</svg>
					<div className="amount-container">
						<p className="total-amount">{amount}</p>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
