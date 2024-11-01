import ServiceCard from "./ServiceCard";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card 3.png";

const services = [
  { id: 1, image: card1, title: "Hair Salon Haven" },
  { id: 2, image: card2, title: "Waxing Salon Haven" },
  { id: 3, image: card3, title: "Skincare Salon Haven" },
];

const MainService = () => {
  return (
    <div className="p-4 md:p-8">
      <section className="flex flex-col items-center justify-between px-6 py-8 mb-8 md:flex-row">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-semibold text-[#4A4A4A] sm:text-3xl md:text-4xl lg:text-5xl">
            Enhance your inner radiance at our{" "}
            <span className="text-[#FB7902]">beauty sanctuary</span> and let
            your true beauty shine.
          </h1>
        </div>
        <div className="mt-6 md:mt-0 md:ml-4">
          <button className="px-6 py-2 text-sm font-medium text-white bg-[#1E1E1E] rounded-md hover:bg-gray-800 md:text-base lg:text-lg">
            Explore Services
          </button>
        </div>
      </section>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            title={service.title}
          />
        ))}
      </div>
    </div>
  );
};

export default MainService;
