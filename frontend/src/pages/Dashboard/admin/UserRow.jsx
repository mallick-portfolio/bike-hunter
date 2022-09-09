import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";

const UserRow = ({ user }) => {
  const handleAdmin = async (email) => {
    alert(email);
    const { data, status } = await axios.put(
      `http://localhost:5000/users/${email}`,
      {
        role: "admin",
      }
    );
    console.log(status, data);
  };

  return (
    <tr>
      <td class="order-td">
        <div class="flex items-center">
          <div class="flex-shrink-0 w-12">
            <img
              class="w-full h-full ring ring-primary rounded-full"
              src={
                user?.image
                  ? user?.image
                  : "https://placeimg.com/192/192/people"
              }
              alt=""
            />
          </div>
          <div class="ml-3">
            <p class="text-primary font-medium text-lg">{user?.name}</p>
          </div>
        </div>
      </td>
      <td class="order-td">
        <p class="text-base font-medium text-tertiary">{user?.email}</p>
      </td>
      <td class="order-td">
        <p class="text-base font-medium text-tertiary">{user?.role}</p>
      </td>
      <td class="order-td">
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleAdmin(user?.email)}
            className="common-btn4 mx-0 lg:mx-3"
          >
            Admin
          </button>
          <button className="xicon">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
