import React from "react";
import "./Home.css";
import Product from "./product/Product";

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
          <Product
            id="56235846"
            title="AirCase 25 Ltrs Laptop Backpack | 15.6 Inch Laptop Bag For Men & Women"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71xIJSCVtZL._UX679_.jpg"
            rating={4}
          />
          <Product
            id="24581356"
            title="Butterfly Smart Wet Grinder, 2L (White) with Coconut Scrapper Attachment, 150 W"
            price={119.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/414JLnTlLnL._SY300_SX300_QL70_FMwebp_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="76582493"
            title="Vivo X60 (Shimmer Blue, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={99.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/41xNHV1Ck7L._SX300_SY300_QL70_FMwebp_.jpg"
            rating={5}
          />
          <Product
            id="81674953"
            title="Samsung 198 L 4 Star Inverter Direct-Cool Single Door Refrigerator (RR21T2H2XCR/HL, Camellia Purple, Base Stand with Drawer)"
            price={199.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/31Mck%2BwaOGL._SX342_SY445_QL70_FMwebp_.jpg"
            rating={5}
          />
          <Product
            id="34826597"
            title="pTron Tangent Lite Bluetooth 5.0 Wireless Headphones with Hi-Fi Stereo Sound, 6Hrs Playtime, Lightweight Ergonomic Neckband, Sweat-Resistant Magnetic Earbuds, Voice Assistant & Mic - (Black)"
            price={59.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/41qhEf58vbL._SX300_SY300_QL70_FMwebp_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="93487561"
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={1199.99}
            image="https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
