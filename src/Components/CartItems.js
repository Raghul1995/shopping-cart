import React from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

function CartItems({ id, amount, title, price, img }) {
	//const { id, amount, title, price, img } = item;
	return (
		<article className="cart-item">
			<img src={img} alt={title} />
			<div>
				<h4>{title} </h4>
				<h4 className="item-price">${price} </h4>
				{/* remove button */}
				<button className="remove-btn" onClick={() => console.log('Remove')}>
					Remove
				</button>
			</div>
			<div>
				{/* increase amount */}

				<button
					className="amount-btn"
					onClick={() => {
						console.log('increase');
					}}
				>
					{' '}
					<svg viewBox="2 0 20 20">
						<FaAngleUp />
					</svg>
				</button>
				{/*amount*/}
				<p className="amount-btn">{amount}</p>
				{/* decrease amount */}

				<button
					className="amount-btn"
					onClick={() => {
						console.log('decrease');
					}}
				>
					{' '}
					<svg viewBox="2 0 20 20">
						<FaAngleDown />
					</svg>
				</button>
			</div>
		</article>
	);
}

export default CartItems;
