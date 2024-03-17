import Typed from "../Typed";
import Button from "../shared/Button";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] -mt-24 w-full h-screen mx-auto text-center flex flex-col justify-center space-y-2">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold sm:py-6">
          Grow with data.
        </h1>

        <div className="md:text-5xl sm:text-4xl text-xl font-bold sm:py-4">
          Fast, flexible financing for{" "}
          <Typed textArray={["BTB", "BTC", "SASS"]} />
        </div>
        <p className="sm:text-2xl text-xl font-medium text-gray-500">
          Monitor your data analytics to increase revenues for BTB, BTC & SASS
          platforms.
        </p>
        <div>
          <Button text="Get Started" className="bg-[#00df9a] " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
