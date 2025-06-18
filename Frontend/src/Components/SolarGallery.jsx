import React from "react";
import image1 from '../assets/Images/gallery1.jpeg'
import image2 from '../assets/Images/gallery2.jpeg'
import image3 from '../assets/Images/gallery3.jpeg'
import image4 from '../assets/Images/gallery4.jpeg'
import image5 from '../assets/Images/gallery5.jpeg'
import image6 from '../assets/Images/gallery6.jpeg'
import image7 from '../assets/Images/gallery7.jpeg'
import image8 from '../assets/Images/gallery8.jpeg'
const SolarGallery = () => {
  

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  "https://imgs.search.brave.com/DNjCh7r1Yt5617rPaGyFkNLWc-J4_HM2goLfjYUOwsw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTEx/MDAyMzI3L3Bob3Rv/L3NvbGFyLXBhbmVs/cy13aXRoLXRlY2hu/aWNpYW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVVWdEgz/TGVQTWdnTlhBYTY4/ME1xdjFRdkNSN2ZF/d1lYRlgtNTU0ajBC/UFE9",
  "https://media.gettyimages.com/id/1350971530/photo/working-on-installing-solar-panels.jpg?s=612x612&w=0&k=20&c=EhxbY5O1HnGh-W1iAip-gcFpXVwaKn2DSYP4_W0xELc=",
  "https://media.gettyimages.com/id/1340816904/photo/senior-engineer-and-aboriginal-australian-apprentice-working-together-on-solar-farm.jpg?s=612x612&w=0&k=20&c=8R06bbXX7DLtgftL22aJO2qYYRTXewZe5JzD0vSL4GE=",
  "https://media.gettyimages.com/id/1278948452/photo/team-electrician-installing-solar-panels-working-on-alternative-energy-sources-clean.jpg?s=612x612&w=0&k=20&c=8zZA3-iIk0fhBHk9-x4_PCY6QBjxUtLn5Q2SYcWXATQ=",
  "https://media.gettyimages.com/id/1419732470/photo/female-engineer-sitting-on-a-rooftop-with-solar-panels-using-technology.jpg?s=612x612&w=0&k=20&c=xaNka-eEc_9aeShBlbvz0grMxleJevbSHHZ_dWF48Lc=",
  "https://media.gettyimages.com/id/1709769020/photo/solar-panel.jpg?s=612x612&w=0&k=20&c=hcycBq--1GGVGnn_z-XGcNR7xDxfpWP0oCh4j4Lf28Q=",
  "https://media.gettyimages.com/id/1295919758/photo/solar-energy-systems-engineer-perform-analysis-solar-panels.jpg?s=612x612&w=0&k=20&c=PRTBadnBEStmWLU-ONk8bz63Xl7lnxsNSWhA0ePyjsY=",
  "https://media.gettyimages.com/id/1424142286/photo/electrician-connecting-a-solar-inverter.jpg?s=612x612&w=0&k=20&c=T_Sr0CI5h6LEK16yxhNhZD7JoQhXdtV75qdBunZHt0g=",
  "https://media.gettyimages.com/id/1341067688/photo/blue-collar-worker-points-towards-sun-setting-over-power-distribution-center-with-white.jpg?s=612x612&w=0&k=20&c=xDPjEqxymxRHlNF0QveoHNqc96d4QWMGbaPABcnAV7s=",
  "https://media.gettyimages.com/id/1453138158/photo/an-aerial-view-of-uk-solar-panels-at-sunset.jpg?s=612x612&w=0&k=20&c=ihcS9vB5k5f9Ib3Hk7x9ZAoKyoCLw65kAcgtLODDI80="
];


  return (
    <section className="py-12 mt-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Solar Project Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={src}
                alt={`Solar project ${index + 1}`}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarGallery;
