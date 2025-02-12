import Image from "next/image";
import { TbTrashX } from "react-icons/tb";

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

const Product: React.FC<ProductProps> = ({ product: { id, name, price } }) => {
  return (
    <div key={id} className="flex gap-10 bg w-full items-center">
      <Image
        src={
          "https://res.cloudinary.com/dehyuw4zu/image/upload/f_auto,q_auto/v1/Epic-burger/djbd9ilopeixkdbea2kh"
        }
        alt={name}
        width={100}
        height={100}
      />
      <div className="flex gap-10">
        <h3>{name}</h3>
        <h3>{price}</h3>
        <div>
          <button className="bg-slate-300 p-2 rounded-lg border-[0.1px] border-black">
            <TbTrashX className="text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
