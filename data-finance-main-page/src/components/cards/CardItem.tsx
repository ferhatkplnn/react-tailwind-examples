import Button from "../shared/Button";

type CardItemProps = {
  imgURL: string;
  header: string;
  price: string;
  p1: string;
  p2: string;
  p3: string;
  buttonText: string;
};

const CardItem = ({
  imgURL,
  header,
  price,
  p1,
  p2,
  p3,
  buttonText,
}: CardItemProps) => {
  return (
    <div className="w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300">
      <img className="w-20 mx-auto -mt-12 bg-white" src={imgURL} alt="Single" />
      <h2 className="text-2xl font-bold text-center py-8">{header}</h2>
      <p className="text-center text-4xl font-bold">{price}</p>
      <div className="text-center font-medium space-y-2 mb-4">
        <p className="py-2 mx-8 border-b">{p1}</p>
        <p className="py-2 mx-8 border-b">{p2}</p>
        <p className="py-2 mx-8 border-b">{p3}</p>
        <Button className="!text-[#00df9a] bg-black" text={buttonText} />
      </div>
    </div>
  );
};

export default CardItem;
