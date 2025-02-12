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
    <div>
      <h2>Order ID: {id}</h2>
      <h2>Order: {order}</h2>
      <h2>Date: {date}</h2>
      <h2>Total: {total}</h2>
      <h2>Address: {address}</h2>
    </div>
  );
};

export default Order;
