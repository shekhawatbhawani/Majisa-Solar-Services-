import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "Govt subsidy kaise milti hai?",
    answer:
      "Government subsidy ke liye aapko registered solar vendor ke through apply karna hota hai. Subsidy amount state policy ke hisab se alag ho sakta hai. Generally, 20% to 40% tak ki subsidy mil sakti hai."
  },
  {
    question: "Installation kitne din me hota hai?",
    answer:
      "Installation site ki complexity aur system size ke hisab se 3-7 din ke andar poora process complete ho jata hai."
  },
  {
    question: "Solar lagwane ka cost kya hai?",
    answer:
      "Cost depend karta hai system ke size aur type (on-grid ya off-grid) par. Basic residential solar system ki shuruaat ₹40,000 se ho sakti hai per kW."
  },
  {
    question: "Warranty kya hoti hai?",
    answer:
      "Solar panels par 25 saal tak ki performance warranty milti hai. Inverter aur other components par 5 se 10 saal tak ki warranty hoti hai."
  },
  {
    question: "Net metering kya hoti hai?",
    answer:
      "Net metering ek system hai jisme aap jo extra electricity grid me bhejte ho, uska adjustment aapke bill me hota hai. Isse aapka bill bahut kam ya zero ho sakta hai."
  },
  {
    question: "Kya electricity bill zero ho jata hai?",
    answer:
      "Agar aapka solar system aapki total electricity consumption se zyada power generate kare to aapka bill zero tak aa sakta hai."
  },
  {
    question: "Maintenance kitna hota hai?",
    answer:
      "Solar systems ka maintenance bahut kam hota hai. Aapko bas panels ko time-to-time clean karna hota hai aur inverter check rakhna hota hai."
  },
  {
    question: "Kaunse documents chahiye hote hain installation ke liye?",
    answer:
      "Aapko address proof, ID proof aur electricity bill ki copy chahiye hoti hai. Vendor aur DISCOM aapko guide kar dete hain."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen px-4 py-20 bg-slate-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">
          FAQs – Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-300 rounded-md overflow-hidden bg-white shadow"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left px-4 py-3 flex justify-between items-center font-medium text-slate-800 hover:bg-slate-200 focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-slate-700">
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-3 text-sm text-slate-700 bg-slate-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;