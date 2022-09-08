import {
  faCreditCard,
  faEye,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OrderRow = ({ order }) => {
  return (
    <tr>
      <td class="order-td">
        <div class="flex items-center">
          <div class="flex-shrink-0 w-20">
            <img class="w-full h-full rounded-full" src={order?.image} alt="" />
          </div>
          <div class="ml-3">
            <p class="text-primary font-medium text-lg">{order?.productName}</p>
          </div>
        </div>
      </td>
      <td class="order-td">
        <p class="text-base font-medium text-tertiary">{order?.qty}</p>
      </td>
      <td class="order-td">
        <p class="text-base font-medium text-tertiary">
          ${order?.qty * order?.price}
        </p>
        <p class="text-xs font-medium text-subtitle">
          Price Single - ${order?.price}
        </p>
      </td>
      <td class="order-td">
        <div className="flex lg:items-center items-start">
          <button className="xicon">
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button className="xicon mx-0 lg:mx-3">
            <FontAwesomeIcon icon={faCreditCard} />
          </button>
          <button className="xicon">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default OrderRow;
