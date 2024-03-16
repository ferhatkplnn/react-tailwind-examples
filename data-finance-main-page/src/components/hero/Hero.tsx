import Typed from "../Typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] -mt-24 w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold sm:py-6">
          Grow with data.
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for{" "}
            <Typed textArray={["BTB", "BTC", "SASS"]} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
