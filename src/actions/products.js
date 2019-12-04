import { FETCH_ALL, FETCH_ONE } from "./types";

import productAPI from "../services/product";
import productsAPI from "../services/products";

/*
export const fetchProducts = () => async dispatch => {
  const response = await productsAPI.get();
  console.log(response.data);
  dispatch({ type: FETCH_ALL, payload: response.data });
};
*/

const products = {
  data: [
    {
      productId: "1",
      productName: "TRUFA AVELÃ 30G",
      imageUrl:
        "https://corebiz.vteximg.com.br/arquivos/ids/156669-1000-715/_0056_TRUFA-LACREME-BRANCA.png",
      price: 1.99
    },
    {
      productId: "12",
      productName: "BOMBOM GLAMOUR 200G",
      imageUrl:
        "https://corebiz.vteximg.com.br/arquivos/ids/156671-1000-715/fotos_0135_truffon-pacoca-30g.png",
      price: 1.99
    },
    {
      productId: "14",
      productName: "TRUFA BEAUTY IN AO LEITE 30G",
      imageUrl:
        "https://corebiz.vteximg.com.br/arquivos/ids/156676-1000-715/trufa-mezzo.png",
      price: 2.5
    },
    {
      productId: "15",
      productName: "PRECIOSIDADES DIET 400G",
      imageUrl:
        "https://corebiz.vteximg.com.br/arquivos/ids/156670-1000-715/_0057_TRUFA-LACREME-AO-LEITE.png",
      price: 2.1
    },
    {
      productId: "19",
      productName: "BOMBOM GLAMOUR 200G",
      imageUrl:
        "https://corebiz.vteximg.com.br/arquivos/ids/156671-1000-715/fotos_0135_truffon-pacoca-30g.png",
      price: 3.4
    }
  ]
};

export const fetchProducts = () => async dispatch => {
  const response = products;
  dispatch({ type: FETCH_ALL, payload: response.data });
};

export const getProduct = id => async dispatch => {
  const response = await productAPI.get(`/${id}`);
  dispatch({ type: FETCH_ONE, payload: response.data });
};
