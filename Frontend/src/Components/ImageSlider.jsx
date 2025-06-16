import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const solarImageUrls = [
  "https://img.freepik.com/premium-vector/save-your-energy-solar-panel-social-media-post-facebook-cover-post-template_812236-2980.jpg?uid=R204348226&ga=GA1.1.1368811845.1749970491&semt=ais_hybrid&w=740",
  "https://media.istockphoto.com/id/2165536160/photo/woman-plays-with-a-sun-shading-her-face-with-hands-in-front-of-solar-panels.jpg?s=612x612&w=0&k=20&c=sCG_6qduQic2jZSTif3EvM67QkLDjcWpCBXpWx4fJ5A=",
  "https://media.istockphoto.com/id/2167474861/photo/worker-holding-solar-panel.webp?a=1&b=1&s=612x612&w=0&k=20&c=EFlAmlCef9PzAaCu08uMR1cDdgRSUB6X6Awj89U1Xmo=",
  "https://media.istockphoto.com/id/1500851820/photo/happy-young-indian-family-and-technician-standing-near-solar-panels-installation-outdoor.jpg?s=612x612&w=0&k=20&c=ltxv-vSkXNAFxhN0oZRnta58pTU9jHUo2-B7ArJmjaM=",
  "https://media.istockphoto.com/id/1916980202/photo/solar-photovoltaic-panels-on-a-wood-house-roof.jpg?s=612x612&w=0&k=20&c=4sUu3TB7FJfHqb9mC6bm7uk974BXWesL8MK69vBuI0g=",
  "https://imgs.search.brave.com/-iet_DADRNN4iFWROekyISc8CBth0hwrUVjveJzXNiM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzMzLzk1Lzk2/LzM2MF9GXzYzMzk1/OTY5Ml81RGFBZ1BS/RGlsVTBPUHhlbGF5/UFpRWlVOOGswamxN/dy5qcGc"
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {solarImageUrls.map((url, index) => (
          <div key={index}>
            <div className="w-full h-[80vh]">
              <img
                src={url}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
