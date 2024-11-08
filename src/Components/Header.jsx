import React, { useState } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import Order from './Order';

const ShowNothing = () => {
    return (
    <div>
        <h2>There is nothing</h2>
    </div>
    );
};

const showOrders = (props) => {
    return (
        <div>
            {props.orders.map(el => (
                <Order key = {el.id} item = {el} onDelete = {props.onDelete}/>
            ))}
        </div>
    )
}


export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
    return (
        <header>
            <div className="logo">
                <h1>Shop</h1>
            </div>
            <nav>
                <ul className="nav">
                    <li><a href="https://github.com/Ilnurk666">About Us</a></li>
                    <li><a href="https://share.streamlit.io/user/ilnurk666">Streamlit</a></li>
                    <li><a href="https://www.arizona.edu">Arizona</a></li>  {/* Updated list item */}
                    <li><FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shopcart ${cartOpen && 'active'}`} /></li>
                </ul>
                {cartOpen && (
                    <div className='basket'>
                    {props.orders.length >0 ? showOrders(props) : ShowNothing()}
                    </div>
                )}
            </nav>
            <div className="presentation">
                {/* Add content or remove if not needed */}
            </div>
        </header>
    );
}