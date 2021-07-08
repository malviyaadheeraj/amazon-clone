import React from "react";
import "./Home.css";
import Product from "./product/Product";
import { Products } from "../../dummyData";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          className="home__image"
        />

        <div className="home__row">
          {Products.map((product) => (
            <div className="home__rowProduct">
              <Product
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                description={product.description}
                rating={product.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

// https://fakestoreapi.com/products
