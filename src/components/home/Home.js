import React from "react";
import "./Home.css";
import Product from "./product/Product";

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  console.log(products);
}

getServerSideProps();

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          className="home__image"
        />

        {/* <div className="home__row">
          {products.map(product => (
            <Product
            id={product.id}
            title={product.title}
            price={product.prise}
            image="https://images-na.ssl-images-amazon.com/images/I/71xIJSCVtZL._UX679_.jpg"
            rating={4}
          />
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Home;

// https://fakestoreapi.com/products
