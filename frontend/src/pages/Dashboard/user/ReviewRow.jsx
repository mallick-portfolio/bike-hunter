import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReviewRow = ({ review, index }) => {
  return (
    <tr>
      <td className="order-td">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-20">
            <p className="font-medium text-lg">{index + 1}</p>
          </div>
        </div>
      </td>
      <td className="order-td">
        <div className="ml-3">
          <p className="text-primary font-medium text-lg">
            {review?.des.slice(0, 80)}
          </p>
        </div>
      </td>
      <td className="order-td">
        <p className="text-base font-medium text-tertiary">{review?.rating}</p>
      </td>
      <td className="order-td">
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
