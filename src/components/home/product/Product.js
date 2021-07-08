import React from "react";
import "./Product.css";
import { useStateValue } from "../../../StateProvider";

function Product({ id, title, image, price, rating, description }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        description: description,
      },
    });
  };

  return (
    <div className="product" key={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">{rating}</div>
      </div>
      <img src={image} alt="" className="product__image" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
