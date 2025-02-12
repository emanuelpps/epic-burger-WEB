"use client";
import { useState } from "react";
import BoxContainer from "../../components/BoxContainer";
import Order from "./Order";

const OrdersContainer = () => {
  const [ordersData] = useState([
    {
      id: 1,
      order: "Orden 1",
      date: "01/01/2021",
      total: 100,
      address: "Calle 1",
    },
    {
      id: 2,
      order: "Orden 2",
      date: "02/02/2021",
      total: 200,
      address: "Calle 2",
    },
    {
      id: 3,
      order: "Orden 3",
      date: "03/03/2021",
      total: 300,
      address: "Calle 3",
    },
    {
      id: 4,
      order: "Orden 4",
      date: "04/04/2021",
      total: 400,
      address: "Calle 4",
    },
  ]);
  return (
    <>
      <BoxContainer text="Mis Pedidos" type="tertiary">
        <div className="flex flex-col gap-4 bg-slate-100 w-full p-4 rounded-lg">
          {ordersData.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </div>
      </BoxContainer>
    </>
  );
};

export default OrdersContainer;
