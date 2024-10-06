import backgroundImage from "../assets/back-image.png"; // Adjust the path as needed
import Header from "./header";
import SearchBox from "./searchbox";
import travelImage from "../assets/travel-image2.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />
      <div className="flex flex-col mt-20 ml-10 relative h-ful">
        <p className="text-teal-500 font-poppins">
          Discover Your Next Adventure
        </p>
        <h1 className="text-black text-3xl mb-2 font-poppins font-medium md:text-6xl">
          Explore <br />
          Breathtaking <span className="font-light">Places</span>
        </h1>
        <p className="text-black mb-6 font-poppins md:w-30 mx-w-xl text-sm">
          Travelling leaves you speechless, then turns you into a <br />
          storyteller. Join others in telling the story don’t listen to it.
        </p>
        <div>
          <SearchBox />
        </div>
        <div>
          <Link
            className="bg-teal-500 text-white rounded-3xl py-3 px-8 font-medium inline-block hover:text-black hover:bg-transparent hover:border-teal-500 hover:border duration-300 border border-transparent"
            to="/about"
          >
            Learn More
          </Link>
        </div>
      </div>

      <img
        src={travelImage}
        className="w-full xl:w-1/3 xl:absolute bottom-0 right-32 h-25"
      />
    </div>
  );
};

export default Home;
