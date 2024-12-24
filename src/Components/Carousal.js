import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../CustomCss/Carousel.css';
import '../CustomCss/backgroundAnimation.css'; // Import the new CSS
import AdditionalContent from './AdditionalContent';
import Cards from './Cards';

const CustomCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <button className="slick-arrow slick-prev">&#10094;</button>,
    nextArrow: <button className="slick-arrow slick-next">&#10095;</button>
  };

  return (
    <div className='container'>
      <div className="dynamic-background"></div> {/* Add the dynamic background */}
      <Slider {...settings}>
        <div>
          <img src="/Images/Img1.jpeg" alt="Private Theater For Celebration And Movie Streaming" className="carousel-image" />
          <div className="carousel-caption">
            <h5>Private Theater For Celebration And Movie Streaming</h5>
          </div>
        </div>
        <div>
          <img src="/Images/Img2.jpeg" alt="Screen With Sony Surround Speakers and Sofa" className="carousel-image" />
          <div className="carousel-caption">
            <h5>Screen With Sony Surround Speakers and Sofa</h5>
          </div>
        </div>
        <div>
          <img src="/Images/Img3.jpeg" alt="Celebrate Birthdays Anniversaries and Much More" className="carousel-image" />
          <div className="carousel-caption">
            <h5>Celebrate Birthdays Anniversaries and Much More</h5>
          </div>
        </div>
      </Slider>
      <div className='additional-content'>
        <AdditionalContent />
      </div>
      <Cards />
    </div>
  );
};

export default CustomCarousel;
