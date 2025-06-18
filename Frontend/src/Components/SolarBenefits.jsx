import React from "react";

const SolarBenefits = () => {
  const benefits = [
    {
  title: "Bijli Ka Bill Kam Hona",
  desc: "Solar panels lagane se aapka electricity bill har mahine bahut kam ho jata hai.Ye ek long-term saving plan jaisa hai, jisme aap har saal hazaron rupaye bacha sakte ho.Sirf bill hi nahi, balki solar system lagane se aap environment ko bhi support karte ho kyunki ye ek clean aur renewable energy source hai.\n✅ Net metering system ke through aap bijli company ko extra power bech sakte ho, jisse aapka meter reverse chalega aur aur bhi saving hogi.\n✅ Aaj ke time me solar ek one-time investment hai jiska benefit aapko 25 saal tak milta hai.",
  image:
    "https://imgs.search.brave.com/lbPavFs0PAL5mxmsu9kR2aJC0UbnyU6QLGnE0QRy6bY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wcm91ZC1pbmRp/YW4tZmFybWVyLXN0/YW5kaW5nLWJ5LXNv/bGFyLXBhbmVscy1w/cm9tb3RpbmctcmVu/ZXdhYmxlLXN1c3Rh/aW5hYmxlLWVuZXJn/eV8xMDc2MjYzLTQ3/MjIuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA"
}
,
    {
      title: "Environment Friendly",
      desc: "Solar energy ek clean aur green energy source hai jo pollution nahi karta. Yeh environment ke liye safe hai aur carbon emissions ko bhi kam karta hai. Iska use karne se fossil fuels jaise diesel aur coal ki dependency kam hoti hai, jisse hawa aur paani dono ki quality sudhar jaati hai. Solar panels bina koi awaaz kiye kaam karte hain, isliye noise pollution bhi nahi hota. Long-term me yeh ek aisi sustainable choice hai jo future generations ke liye ek healthy environment ensure karti hai. \n ✅ Har ek installed solar system nature ko protect karne ka ek kadam hota hai – future generation ke liye clean aur sustainable environment banane me madad milti hai.",
      image:
        "https://imgs.search.brave.com/FBfY-3DjbiW6AoiAWs856w-NX3YldgeVsNq7ysuWe18/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODcx/NjEzMzk0L3Bob3Rv/L3NvbGFyLXBhbmVs/cy1hdC1zdW5yaXNl/LXdpdGgtY2xvdWR5/LXNreS1pbi1ub3Jt/YW5keS1mcmFuY2Ut/c29sYXItZW5lcmd5/LW1vZGVybi1lbGVj/dHJpYy1wb3dlci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/cHpuRWlwRU1MQnps/b3lCS2RSNGJVTXZ0/bnZ0TWlyS184dkNT/V2l6dFhuaz0",
    },
    {
      title: "Government Subsidy",
      desc: "Bharat sarkar solar installation ke liye subsidy provide karti hai. Yeh subsidy installation cost kaafi kam kar deti hai, jisse har ghar solar afford kar sakta hai.\n  ✅ Residential users ke liye MNRE  ke through 20% se 40% tak ki subsidy milti hai, jo system ke size pe depend karti hai. \n ✅ Subsidy ke saath installation ke baad aapko Net Metering ki facility bhi milti hai, jisse aap extra power grid me bech kar aur bhi saving kar sakte ho. \n ✅ Solar system lagate hi aapka paisa ek tarah se investment ban jaata hai — kam bill + subsidy + long-term benefits = double fayda!",
      image:
        "https://cdn.prod.website-files.com/6593b8b8d36dd8c114c94371/680f22f890b99bb5d509dbb3_solar%20subsidy%20in%20rajasthan%20(1).webp",
    },
    {
      title: "Long Term Investment",
      desc: "Solar panel ek baar lagane ke baad 25+ saal tak chalte hain. Maintenance kam hoti hai aur return on investment bahut accha hota hai. \n✅ 5–6 saal me aap apni lagayi hui poori cost recover kar lete ho, uske baad ki savings pure munafa hoti hain.\n✅ Solar installation inflation-proof hai — jaise-jaisey bijli ke rate badhte hain, aapki savings bhi utni hi badhti hain.\n✅ Ek baar install karne ke baad solar panel 25 se 30 saal tak kaam karta hai, jisme sirf minimal maintenance chahiye hoti hai — na fuel ki zarurat, na monthly expenses..",
      image:
        "https://imgs.search.brave.com/_bJ3bO4CxNYdXftYZQ6yEs_RipIijDSTPdQNQRgNHUI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmV5/cmVuZXJneS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MTIvVW5kZXJzdGFu/ZGluZy1Pbi1Hcmlk/LVNvbGFyLVN5c3Rl/bXMtQS1Db21wcmVo/ZW5zaXZlLUd1aWRl/LTEwLXBuZy5hdmlm",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        <h2 className="text-4xl font-bold text-center text-green-600 mb-4">
          Solar Lagane Ke Fayde
        </h2>

        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                {benefit.title}
              </h3>
              <p className="whitespace-pre-line text-gray-700 text-lg leading-relaxed">
                {benefit.desc}
              </p>
            </div>

            {/* Image Section */}
            <aside className="w-full lg:w-1/2">
              <img
                src={benefit.image}
                alt={benefit.title}
                className="rounded-2xl shadow-lg w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </aside>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolarBenefits;
