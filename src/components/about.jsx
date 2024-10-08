import backgroundImage from "../assets/back-image.png";
import travelImage from "../assets/travel-image3.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="p-6 md:ml-20">
        <div className="flex flex-col relative h-ful">
          <h1 className=" font-poppins font-bold text-5xl mt-40 py-3">
            About Us
          </h1>
          <h1 className="text-teal-500 text-1xl mb-2 font-poppins font-medium md:text-1xl">
            We specialize in providing unforgettable experiences in Ethiopia,{" "}
            <br />
            from breathtaking landscapes to rich cultural heritage
          </h1>
          <p className="text-black mb-6 font-poppins w- text-sm">
            Ethiopia, the cradle of humanity, is a land rich in history,
            culture, and breathtaking landscapes. <br />
            From the rugged peaks of the Simien Mountains to the ancient
            rock-hewn churches of Lalibela, <br />
            Ethiopia offers an unparalleled journey through time and nature.
          </p>

          <div>
            <Link
              className="bg-teal-500 text-white rounded-3xl py-3 px-8 font-medium inline-block hover:text-black hover:bg-transparent hover:border-teal-500 hover:border duration-300 border border-transparent"
              to="/"
            >
              Back to Home
            </Link>
          </div>
        </div>

        <motion.img
          src={travelImage}
          className=" py-20 hidden md:block rotate-35 w-full xl:w-1/3 xl:absolute bottom-0 right-40 top-2"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: 1 }}
        />
      </div>
    </motion.div>
  );
};

export default About;
