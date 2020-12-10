import React from 'react';
import CartItems from './CartItems';
import { cartContext, useGlobalContext } from './Context/CartContext';

function CartContainer() {
	const { cart, total } = useGlobalContext(); // vale from the cartContext
	if (cart.length === 0) {
		// if the cart length is 0
		return (
			<section className="cart">
				{/* cart header */}

				<header>
					<h2>Shopping Cart</h2>
					<h4 className="empty-cart">Your Cart is currently empty</h4>
				</header>
			</section>
		);
	}
	return (
		<section className="cart">
			{/* cart header */}

			<header>
				<h2>Shopping Cart</h2>
			</header>
			<div>
				{/* cart items */}

				{cart.map((item) => {
					return <CartItems key={item.id} {...item} />;
				})}
			</div>
			{/* cart footer */}

			<footer>
				<hr />
				<div className="cart-total">
					<h4>
						total <span>Kr{total}</span>
					</h4>
                    <button  className="btn clear-btn"
                    onClick={() => console.log('cleared')}>Clear Cart</button> 
				</div>
			</footer>
		</section>
	);
}

export default CartContainer;

// container that holds the cartitems element which we map and destrucutre in carItems component
