import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style/home.scss";
import img1 from "../assest/img1.jpg";
import img2 from "../assest/img2.jpg";
import img3 from "../assest/img3.jpg";
import img4 from "../assest/img4.jpg";
import product1 from "../assest/product1.jpg";
import product2 from "../assest/product2.jpg";
import subimg1 from "../assest/subimg1.jpg";

const Home = () => {
  return (
    <>
      <div id="home">
        <div className="firstSection">
          <div className="introText">
            <h3>
              get a glass skin with prematched boosted 3-6 active products
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
          <div className="imgCarousel">
            <Carousel
              showThumbs={false}
              autoPlay={true}
              transitionTime={3}
              infiniteLoop={true}
              howArrows={true}
              showStatus={false}
              interval={5000}
              className="custom-carousel"
            >
              <div>
                <img className="cImg" src={img2} alt="#" />
              </div>
              <div>
                <img className="cImg" src={img1} alt="#" />
              </div>
              <div>
                <img className="cImg" src={img3} alt="#" />
              </div>
              <div>
                <img className="cImg" src={img4} alt="#" />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="secdondSection">
          <div>
            <h3>Shop by skin cocern</h3>
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
                <img src={product2} alt="#" />
                First time buyer
              </li>
              <li>
                <img src={product2} alt="#" />
                Glass skin pack
              </li>
            </ul>
            <ul>
              <li>
                <img src={product2} alt="#" />
                Pigmentation
              </li>
              <li>
                <img src={product2} alt="#" />
                Wrenkles
              </li>
              <li>
                <img src={product2} alt="#" />
                Redness
              </li>
              <li>
                <img src={product2} alt="#" />
                Brightning
              </li>
            </ul>
          </div>
        </div>

        <div className="thirdSection">
          <div className="infoText">
            <h4>Cosmeceutical Skincar</h4>
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
            <button>Start bualdino vour</button>
          </div>
          <div className="subImgLeft">
            <img src={subimg1}></img>
          </div>
        </div>
        <div className="fourthSection">
          <div className="infoText2">
            <h3>
            Build your own personalised routine
            </h3>
            <p>
              Guidance Build out your very own complete Double Bay Cosmeceuticals regime thats tailored
              specifically to you.
            </p>
          </div>
          <div className="productCards">
            <div className="productCard">
              <img src={product1} alt="Product 1" />
              <h3>Product 1 Title</h3>
              <p>Description of Product 1.</p>
              <h4>$39.99</h4>
              <button>Add to Cart</button>
            </div>
            <div className="productCard">
              <img src={product1} alt="Product 2" />
              <h3>Product 2 Title</h3>
              <p>Description of Product 2.</p>
              <h4>$39.99</h4>
              <button>Add to Cart</button>
            </div>
            <div className="productCard">
              <img src={product1} alt="Product 3" />
              <h3>Product 3 Title</h3>
              <p>Description of Product 3.</p>
              <h4>$39.99</h4>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
