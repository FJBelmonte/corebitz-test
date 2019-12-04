import "./styles.css";

import * as actions from "../../actions";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import cart from "../../assets/svg/cart.svg";

export default function Product(props) {
  const [product, setProduct] = useState();
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getProduct(props.match.params.id));
  }, []);

  useEffect(() => {
    setProduct(state.products.item[0]);
  }, [state.products.item]);

  function handleButton(product) {
    dispatch(actions.addItemCart(product, 1));
  }

  function renderProduct() {
    const { productId, productName, imageUrl, price } = product;
    return (
      <li key={productId}>
        <img src={imageUrl} />
        <div>
          <p>{productName}</p>
          <strong className='price'>R$</strong>
          <strong>{priceFormatter(price)}</strong>
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

  return product ? (
    <div className='product-container'>
      <ul>{renderProduct()}</ul>
    </div>
  ) : (
    <div className='product-container'></div>
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
