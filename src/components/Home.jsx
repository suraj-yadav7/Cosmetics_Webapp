import React, { useState, useEffect } from "react";
import "../style/home.scss";
import img1 from "../assest/img1.jpg";
import img2 from "../assest/img2.jpg";
import img3 from "../assest/img3.jpg";
import img4 from "../assest/img4.jpg";
import product1 from "../assest/product1.jpg";
import product2 from "../assest/product2.jpg";
import product3 from "../assest/product3.jpg";
import product4 from "../assest/product4.jpg";
import product5 from "../assest/product5.jpg";
import product6 from "../assest/product6.jpg";
import subimg1 from "../assest/subimg1.jpg";
import homeImg from "../assest/homeImg.jpg";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3, img4];

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(nextImage, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div id="home">
        <div className="firstSection">
          <div className="introText">
            <h3>
              Get a glass skin with prematched boosted 3-6 active products
            </h3>
            <h1>
              See fast results with more actives suitable for sensitive skin.
            </h1>
            <p>
              See fast results with Sophisticated Medical Grade Skincare takes
              the guesswork out of finding the perfect routine for you with a
              Reputable Double Bay Skincare Routine.
            </p>
            <button> Create your glass skin routine </button>
          </div>
          <div className="carousel">
            <img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className="carousel-image"
            />
          </div>
        </div>
        <div className="secdondSection">
          <div>
            <h3>Shop by skin concern</h3>
            <p>
              The skin takes Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Officiis quibusdam, nesciunt nulla ullam nisi ratione
              adipisci molestias. Totam accusantium molestias at
            </p>
          </div>
          <div className="shopItem">
            <ul>
              <li>
                <img src={product1} alt="#" />
                BestSeller
              </li>
              <li>
                <img src={product2} alt="#" />
                Dark & red sports
              </li>
              <li>
                <img src={product3} alt="#" />
                First time buyer
              </li>
              <li>
                <img src={product4} alt="#" />
                Glass skin pack
              </li>
            </ul>
            <ul>
              <li>
                <img src={product4} alt="#" />
                Pigmentation
              </li>
              <li>
                <img src={product5} alt="#" />
                Wrenkles
              </li>
              <li>
                <img src={product6} alt="#" />
                Redness
              </li>
              <li>
                <img src={product1} alt="#" />
                Brightning
              </li>
            </ul>
          </div>
        </div>

        <div className="thirdSection">
          <div className="infoText">
            <h4>Cosmeceutical Skincare</h4>
            <h2>
              Is a hybrid between pharmaceutical and cosmetic products
              containing actives that target specific concerns.
            </h2>
            <h5>
              Actives are ingredients scientifically proven to make a visible
              chance to the skin at race value and on a cellular level.
            </h5>
            <p>
              They're the ingredients that work to brighten pigment, reduce many
              other specific concerns Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Obcaecati, quidem.
            </p>
            <button>Know More</button>
          </div>
          <div className="subImgLeft">
            <img src={subimg1}></img>
          </div>
        </div>
        <div className="fourthSection">
          <div className="infoText2">
            <h3>Build your own personalised routine</h3>
            <p>
              Guidance Build out your very own complete Double Bay
              Cosmeceuticals regime thats tailored specifically to you.
            </p>
          </div>
          <div className="productCards">
            <div className="productCard">
              <img src={product4} alt="Product 1" />
              <h3>Product 1</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <h4>$39.99</h4>
              <button>Add to Cart</button>
            </div>
            <div className="productCard">
              <img src={product3} alt="Product 2" />
              <h3>Product 2 </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <h4>$59.99</h4>
              <button>Add to Cart</button>
            </div>
            <div className="productCard">
              <img src={product4} alt="Product 3" />
              <h3>Product 3 </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque.
              </p>
              <h4>$49.00</h4>
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="freeDelivery">
            <div className="homeImg">
              <img src={homeImg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
