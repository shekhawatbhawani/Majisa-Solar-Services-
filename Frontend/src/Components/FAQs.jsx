import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "Govt subsidy kaise milti hai?",
    answer:
      "Government subsidy pane ke liye aapko MNRE (Ministry of New and Renewable Energy) ke guidelines ke tahat registered vendor ke through online application karni hoti hai. Subsidy har state ke hisaab se alag hoti hai, lekin aam taur pe yeh 20% se 40% tak hoti hai. Subsidy seedha aapke bank account me transfer hoti hai. Vendor aapko pura process guide karega."
  },
  {
    question: "Installation kitne din me hota hai?",
    answer:
      "Site survey ke baad, system size aur requirement ke anuroop installation 3 se 7 din ke andar ho jata hai. Isme structure fitting, panel mounting, wiring, inverter installation aur testing shamil hota hai."
  },
  {
    question: "Solar lagwane ka cost kya hai?",
    answer:
      "Cost system ke type (On-grid, Off-grid, Hybrid) aur size ke upar depend karta hai. Ek 1kW ka basic residential solar system ₹40,000 – ₹60,000 tak ka pad sakta hai. Commercial systems thode mehange hote hain."
  },
  {
    question: "Warranty kya hoti hai?",
    answer:
      "Solar panels par 25 saal ki performance warranty milti hai. Inverters par 5 se 10 saal tak ki warranty hoti hai. Structure aur installation workmanship par bhi 1-2 saal tak ki warranty milti hai."
  },
  {
    question: "Net metering kya hoti hai?",
    answer:
      "Net metering ek billing mechanism hai jisme agar aapka solar system extra electricity generate karta hai, to wo grid me jati hai aur aapke electricity bill me adjust ho jati hai. Isse aapka bill ya to bahut kam aata hai ya zero."
  },
  {
    question: "Kya electricity bill zero ho jata hai?",
    answer:
      "Agar aapka system aapki monthly electricity requirement se zyada power generate karta hai, to aapka bijli bill zero tak aa sakta hai. Lekin ye depend karta hai load, season aur usage pattern par."
  },
  {
    question: "Maintenance kitna hota hai?",
    answer:
      "Maintenance bahut kam hota hai. Panels ko mahine me ek baar saaf karna chahiye. Inverter aur wiring ka annual check-up karwana chahiye. AMC (Annual Maintenance Contract) lena optional hota hai."
  },
  {
    question: "Kaunse documents chahiye hote hain installation ke liye?",
    answer: (
      <div>
        <p className="mb-2">
          Installation ke liye aapko kuch important documents ki zarurat hoti hai, jisme subsidy process aur verification dono cover hote hain:
        </p>
        <ul className="list-disc list-inside space-y-1 text-[15px]">
          <li><strong>Aadhar Card</strong> – Identity proof ke liye</li>
          <li><strong>Jan Aadhar</strong> – Rajasthan residents ke liye zaroori</li>
          <li><strong>PAN Card</strong> – Financial verification ke liye</li>
          <li><strong>Bank Passbook/Diary</strong> – Subsidy transfer ke liye account proof</li>
          <li><strong>Cancelled Cheque</strong> – Bank account confirmation ke liye</li>
          <li><strong>Recent Electricity Bill</strong> – Connection proof aur load info ke liye</li>
          <li><strong>Registered Mobile Number</strong> – Communication aur OTP purposes</li>
          <li><strong>Email ID</strong> – Official subsidy approval aur documents ke liye</li>
        </ul>
      </div>
    )
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen px-6 mt-10 py-16 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          FAQs – Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-xl overflow-hidden bg-white shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-slate-800 text-lg hover:bg-green-50 transition"
              >
                <span>{faq.question}</span>
                <span className="text-green-700">
                  {activeIndex === index ? <FiMinus size={20} /> : <FiPlus size={20} />}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 py-4 text-slate-700 text-[15px] bg-slate-50 leading-relaxed">
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
