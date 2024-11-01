// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import heroImage from "../assets/heroimg.jpg";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  useEffect(() => {
    const btnText = document.querySelector("#bookNowText");
    if (btnText) {
      btnText.innerHTML = btnText.innerHTML
        .split("")
        .map((character) => (
          // eslint-disable-next-line react/jsx-key
          <span
            className="absolute origin-[40px_40px] text-white"
            style="transform: rotate(${index * 15}deg) translateX(40px);"
          >
            ${character}
          </span>
        ))
        .join("");
    }
  }, []);

  return (
    <div className="py-20 mt-10 ">
      <div className="container px-4 mx-auto">
        <div className="w-full mb-8 text-left">
          <h1 className="w-full font-bold leading-tight text-[#4A4A4A] text-7xl">
            Revitalize your look, embrace
            <br />{" "}
            <span
              className="text-[#FB7902]"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              confidence.
            </span>
          </h1>
          <p className="w-full mt-4 text-2xl text-[#1E1E1E]">
            Discover our retreat for men and boys, where style meets comfort.
            From sharp cuts to refreshing treatments, our skilled barbers
            deliver top-notch grooming designed to boost your confidence.
          </p>
        </div>

        <div className="relative mb-8 overflow-hidden rounded-lg shadow-lg">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-70 object-cover md:h-[450px] rounded-lg"
          />

          <a
            href="mailto:samuelabera87@gmail.com"
            id="contact_btn"
            className="w-[8rem] h-[8rem] rounded-full text-white grid place-items-center absolute lg:right-[2%] sm:right-[10%] xs:right-[10%] top-[5%] bg-white cursor-pointer [transition:all_400ms_ease] hover:shadow-2xl hover:shadow-gray-900 hover:-translate-y-[1rem] hover:text-[#000e17]"
          >
            <i className="uil uil-arrow-up-right text-orange-500 absolute text-[3.5rem]"></i>
            <p className="text-white font-bold w-[10rem] h-[6rem] flex justify-center mt-[135px] ml-[-15px]">
              BOOK NOW
            </p>
          </a>
        </div>

        <div className="flex flex-col items-center p-6 space-y-4 bg-white rounded-lg shadow-lg md:flex-row md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label className="text-sm font-semibold text-[#FB7902]">
              Saloon Name
            </label>
            <input
              type="text"
              placeholder="Enter Saloon Name"
              className="w-full py-2 bg-white border-b border-gray-300 focus:border-orange-500 focus:outline-none"
            />
          </div>
          <div className="flex-1">
            <label className="text-sm font-semibold text-orange-500">
              Location
            </label>
            <input
              type="text"
              placeholder="Where"
              className="w-full py-2 bg-white border-b border-gray-300 focus:border-orange-500 focus:outline-none"
            />
          </div>
          <button className="flex items-center justify-center px-6 py-2 text-white transition bg-[#FB7902] rounded-lg shadow-lg hover:bg-orange-600">
            <FiSearch className="mr-2" /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
