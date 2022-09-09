import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReviewRow = ({ review, index }) => {
  return (
    <tr>
      <td class="order-td">
        <div class="flex items-center">
          <div class="flex-shrink-0 w-20">
            <p class="font-medium text-lg">{index + 1}</p>
          </div>
        </div>
      </td>
      <td class="order-td">
        <div class="ml-3">
          <p class="text-primary font-medium text-lg">
            {review?.des.slice(0, 80)}
          </p>
        </div>
      </td>
      <td class="order-td">
        <p class="text-base font-medium text-tertiary">{review?.rating}</p>
      </td>
      <td class="order-td">
        <div className="flex lg:items-center items-start">
          <button className="xicon">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ReviewRow;
