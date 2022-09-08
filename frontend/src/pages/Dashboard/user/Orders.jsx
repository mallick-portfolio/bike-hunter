import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../../components/Shared/Loading.jsx";
import { auth } from "../../../firebase.js";
import useData from "../../../hooks/useData.js";
import OrderRow from "./OrderRow.jsx";

const Orders = () => {
  const [user, loading] = useAuthState(auth);
  const url = `http://localhost:5000/order/${user?.email}`;
  const { loading: load, data: orders } = useData(url);
  if (loading || load) {
    return <Loading />;
  }
  console.log(orders);
  return (
    <div class="container">
      <div class="py-8">
        <div>
          <h2 class="order-title">Orders</h2>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="order-th">
                    Order
                  </th>
                  <th class="order-th">
                    Quantity
                  </th>
                  <th class="order-th">
                    Total Amount
                  </th>
                  <th class="order-th">
                    Action
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <OrderRow key={order._id} order={order} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
