import React from "react";

const OrderRow = ({ order }) => {
  return (
    <tr>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
          <div class="flex-shrink-0 w-20">
            <img class="w-full h-full rounded-full" src={order?.image} alt="" />
          </div>
          <div class="ml-3">
            <p class="text-primary font-medium text-lg">{order?.productName}</p>
          </div>
        </div>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-base font-medium text-tertiary">{order?.qty}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-base font-medium text-tertiary">
          ${order?.qty * order?.price}
        </p>
        <p class="text-xs font-medium text-subtitle">
          Price Single - ${order?.price}
        </p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button className="xicon">Delete</button>
      </td>
    </tr>
  );
};

export default OrderRow;
