import { IoIosCloseCircleOutline } from "react-icons/io";
interface OrderProps {
  order: {
    id: number;
    order: string;
    date: string;
    total: number;
    address: string;
  };
}

const Order: React.FC<OrderProps> = ({
  order: { id, order, date, total, address },
}) => {
  return (
    <div className="flex gap-4 bg-slate-200 w-full p-4 rounded-lg justify-center items-center">
      <h2>Order ID: {id}</h2>
      <h2>Order: {order}</h2>
      <h2>Date: {date}</h2>
      <h2>Total: {total}</h2>
      <h2>Address: {address}</h2>
      <button>
        <IoIosCloseCircleOutline className="text-red-600" />
      </button>
    </div>
  );
};

export default Order;
