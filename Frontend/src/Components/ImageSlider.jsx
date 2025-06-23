import React from "react";
import Slider from "react-slick";
import banner1 from "../assets/Images/banner.jpeg";
import banner2 from "../assets/Images/banner1.jpeg";
import banner3 from "../assets/Images/banner2.jpeg";
import banner4 from "../assets/Images/banner3.jpeg";
import banner5 from "../assets/Images/projectimage.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const solarImageUrls = [
  `${banner1}`,
  "https://i0.wp.com/divyasolarpowersystems.com/wp-content/uploads/2024/11/1-PM-Surya-Ghar-Muft-Bijli-Yojana-Banner.jpg?ssl=1",
  `${banner2}`,
  `${banner3}`,
  `${banner4}`,
  `${banner5}`,
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full px-2 md:px-4 lg:px-6 py-4">
      <Slider {...settings}>
        {solarImageUrls.map((url, index) => (
          <div key={index} className="px-1">
            <div className="w-full h-[250px] sm:h-[200px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden">
              <img
                src={url}
                alt={`Slide ${index}`}
                className="w-full h-full object-fill rounded-xl"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
