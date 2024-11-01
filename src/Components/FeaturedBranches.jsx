
// eslint-disable-next-line no-unused-vars
import React from "react";
import heroImage from "../assets/s1.jpg"; 
import heroImage1 from "../assets/s2.jpg"; 
import heroImage2 from "../assets/s3.jpg"; 

const branches = [
  { name: "Gampaha", phone: "077 64734782", image: heroImage },
  { name: "Pallewela", phone: "077 64734782", image: heroImage1 },
  { name: "Minuwangoda", phone: "077 64734782", image: heroImage2 },
  { name: "Veyangoda", phone: "077 64734782", image: heroImage },
  
];

const FeaturedBranches = () => {
  return (
    <div className="py-16 ">
      <div className="container px-4 mx-auto text-center">
      <div className="flex items-center justify-between mb-8">
      <h2 className="text-3xl font-bold text-left text-[#4A4A4A] md:text-5xl">
        Featured <span className="text-[#FB7902]">Branches</span> Near You
      </h2>
      <button className="px-6 py-2 text-white transition rounded shadow-lg bg-[#1E1E1E] hover:bg-gray-900">
        See More
      </button>
    </div>
        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-4">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="overflow-hidden transition duration-300 transform bg-white rounded-lg shadow-lg hover:scale-101"
            >
              <img
                src={branch.image}
                alt={branch.name}
                className="object-cover w-full h-48"
              />
              <div className="py-2 text-lg font-semibold text-gray-900 bg-yellow-400">
                {branch.name}
              </div>
              <div className="p-4 text-center">
                <div className="flex items-center justify-center mb-2 text-orange-500">
                  <i className="mr-2 uil uil-phone-volume"></i>
                  {branch.phone}
                </div>
                <button className="px-20 py-2 text-white transition bg-gray-700 rounded-lg shadow-lg hover:bg-gray-800">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </div>
  );
};

export default FeaturedBranches;
