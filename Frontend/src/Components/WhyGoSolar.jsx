import React from "react";

const WhyGoSolar = () => {
  const reasons = [
    {
      title: "Electricity Se Azadi",
      desc: "Bijli ke badhte bill se pareshan? Solar system lagake aap khud ka power generate kar sakte ho, jisse monthly bill zero ke barabar ho jata hai. \n 💰 Lifetime Savings: Ek baar investment karne ke baad aap 25 saal tak free electricity ka fayda utha sakte ho. \n 🌞 Surya ki Shakti: Din bhar ka free solar energy use karke appliances, cooler, AC sab kuch chala sakte ho bina extra bill ke. \n 🚫 Power Cut ka Khatma: Battery backup ke sath, power cut ka bhi tension nahi rahega.",
      image:
        "https://imgs.search.brave.com/v8nM7c_igoM-4KyVTtYLq2O3p8hyHVbH-SFYdZf9is4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9naGF6aWFi/YWQtdXR0YXItcHJh/ZGVzaC1pbmRpYS1h/cHJpbC0yNjBudy0x/OTUxODE5MTkyLmpw/Zw",
    },
    {
      title: "Surakshit Bhavishya",
      desc: "Fossil fuel khatam ho rahe hain, lekin solar energy ek sustainable aur endless source hai jo future ko secure karta hai.\n 🔋 Solar ek aisi energy hai jo kabhi khatam nahi hoti – suraj har din ugta hai.\n 🌱Pollution-free aur carbon emission-free source hone ke kaaran future generations ke liye bhi safe hai.\n🌍Climate change se ladne ka sabse accha tareeka – clean energy ka istemal.\n 💼 Solar industry naye jobs aur technology innovations create karti hai – desh ke development mein yogdaan.\n",
      image:
        "https://imgs.search.brave.com/1kn12Bu3L8OdCki86m1tYI8KeEE1Z3SV9vHCj3hxcho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9jb25maWRl/bnQtaW5kaWFuLWZh/cm1lci1zaG93aW5n/LXNvbGFyLTI2MG53/LTIyMzQ2NTAyMDku/anBn",
    },
    {
      title: "Property Ki Value Badhana",
      desc: "Solar panels lagane se aapke ghar ki resale value significantly badh jati hai. Aaj ke buyers energy-efficient aur eco-friendly homes ko zyada prefer karte hain. \n ✅ Attractive Selling Point – Jab koi buyer dekhta hai ki ghar pe solar panel lage hain, toh unhe lagta hai ki unka future ka bijli ka kharcha kam hoga. \n ✅ Higher ROI – Solar system ek long-term asset hota hai jo ghar ki overall worth ko increase karta hai. \n  ✅ Ready-to-Save Homes – Buyers ko ready solar system ke sath ghar milta hai toh unhe setup ka jhanjhat nahi hota, isliye wo premium price dene ko ready hote hain.",
      image:
        "https://imgs.search.brave.com/roSFG_0GzbrBNl0EfvWy-zeBS_0OsBq70qdDLtyVeDg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9uZXctcmVzaWRl/bnRpYWwtaG91c2Ut/dXNhLXdpdGgtcm9v/Zi1jb3ZlcmVkLXdp/dGgtc29sYXItcGFu/ZWxzLXByb2R1Y2lu/Zy1jbGVhbi1lY29s/b2dpY2FsLWVsZWN0/cmljaXR5LXN1YnVy/YmFuLXJ1cmFsLWFy/ZWEtY29uY2VwdC1p/bnZlc3RpbmctYXV0/b25vbW91cy1ob21l/LWVuZXJneS1zYXZp/bmdfMTI3MDg5LTI3/MjQ1LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDA",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-4">
          Hume Solar Kyun Lagwana Chahiye?
        </h2>

        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">
                {reason.title}
              </h3>
              <p className="whitespace-pre-line text-gray-700 text-lg leading-relaxed">
                {reason.desc}
              </p>
            </div>

            {/* Image Section */}
            <aside className="w-full lg:w-1/2">
              <img
                src={reason.image}
                alt={reason.title}
                className="rounded-2xl shadow-lg w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </aside>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyGoSolar;
