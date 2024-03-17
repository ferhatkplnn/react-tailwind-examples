import Laptop from "../../assets/laptop.jpg";
import Button from "../shared/Button";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid sm:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="Laptop" />
        <div className="flex flex-col justify-center space-y-2">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="sm:text-4xl text-2xl font-black ">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            doloremque iure quisquam vitae voluptate consectetur, harum sint
            magni facere? Saepe est corrupti ratione voluptatum nulla amet
            beatae officia perferendis numquam.
          </p>
          <div className="text-center">
            <Button text="Get Started" className="bg-black !text-[#00df9a]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
