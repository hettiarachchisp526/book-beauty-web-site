

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ image, title }) => {
  return (
    <div className="p-4 transition duration-300 transform rounded-lg shadow-md bg-[#FFFBF2] hover:scale-105">
      <img src={image} alt={title} className="object-cover w-full mb-4 rounded-md h-72 md:h-96" />
      <h3 className="text-lg font-semibold text-[#4A4A4A]">{title}</h3>
      <a href="#" className="inline-block mt-2 text-[#FB7902]">
        Explore Now <span className="text-xl">→</span>
      </a>
    </div>
  );
};

export default ServiceCard;
