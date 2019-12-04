import "./styles.css";

import * as actions from "../../actions";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import cart from "../../assets/svg/cart.svg";

export default function Home() {
  const [products, setProducts] = useState(null);
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchProducts());
  }, []);

  useEffect(() => {
    setProducts(state.products.list);
  }, [state.products.list]);

  function renderProducts() {
    return (
      products &&
      products.map(product => {
        return renderProduct(product);
      })
    );
  }

  function renderProduct(product) {
    const { productId, productName, imageUrl, price } = product;
    return (
      <li key={productId}>
        <img src={imageUrl} />
        <div>
          <Link to={`/product/${productId}`}>
            <p>{productName}</p>
            <strong className='price'>R$</strong>
            <strong>{priceFormatter(price)}</strong>
          </Link>
        </div>
        <div className='buttons'>
          <button
            type='buttons'
            onClick={() => {
              handleButton(product);
            }}>
            COMPRAR
            <img src={cart} />
          </button>
        </div>
      </li>
    );
  }

  function handleButton(product) {
    dispatch(actions.addItemCart(product, 1));
  }

  return (
    <div className='home-container'>
      <div>Produtos em destaque</div>
      <ul>{renderProducts()}</ul>
    </div>
  );
}

function priceFormatter(price) {
  //Checks if price is an integer
  if (price == parseInt(price)) {
    return price;
  }

  //Checks if price has only 1 decimal
  else if (Math.round(price * 10) / 10 == price) {
    return price + "0";
  }

  //Covers other cases
  else {
    return Math.round(price * 100) / 100;
  }
}
