import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
import Logo from './img/mlogo.png';
function Navbar({ click }) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <Link to="/my-online-shop">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <ul className="navbar_links">
        <li>
          <Link to="/cart" className="cart_link">
            <ShoppingCartIcon />
            <span>
              {' '}
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/my-online-shop">Shop</Link>
        </li>
      </ul>
      <div className="hamburger_menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
