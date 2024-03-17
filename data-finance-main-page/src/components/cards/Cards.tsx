import Single from "../../assets/single.png";
import Double from "../../assets/double.png";
import Triple from "../../assets/triple.png";
import CardItem from "./CardItem";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-16 bg-white">
      <div className="max-w-[1240px] mx-auto grid sm:grid-cols-3 gap-8 max-sm:space-y-12">
        <CardItem
          header="Single User"
          imgURL={Single}
          price="$149"
          p1="500 GB Storage"
          p2="1 Granted User"
          p3="Send up to 2 GB"
          buttonText="Start Trial"
        />
        <CardItem
          header="Single User"
          imgURL={Double}
          price="$149"
          p1="500 GB Storage"
          p2="1 Granted User"
          p3="Send up to 2 GB"
          buttonText="Start Trial"
        />
        <CardItem
          header="Single User"
          imgURL={Triple}
          price="$149"
          p1="500 GB Storage"
          p2="1 Granted User"
          p3="Send up to 2 GB"
          buttonText="Start Trial"
        />
      </div>
    </div>
  );
};

export default Cards;
