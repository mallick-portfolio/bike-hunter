import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import { auth } from "../../firebase.js";
const Dashboard = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="dashboard">
      <div className="dashboard-col1">
        <div className="">
          <Outlet />
        </div>
      </div>
      <div
        className={`bg-btn shadow-xl lg:w-1/6 w-full hidden lg:flex flex-col px-6 pt-6`}
      >
        <label htmlFor="" className="drawer-overlay"></label>
        <ul className="flex flex-col gap-4">
          <>
            <li>
              <Link className="dashboard-item" to={"/dashboard/order"}>
                My Orders
              </Link>
            </li>
            <li>
              <Link className="dashboard-item" to={"/dashboard/my-reviews"}>
                My Reviews
              </Link>
            </li>
            <li>
              <Link className="dashboard-item" to={"/dashboard/add-review"}>
                Add Review
              </Link>
            </li>
          </>
          <>
            <li>
              <Link className="dashboard-item" to={"/dashboard/users"}>
                Users
              </Link>
            </li>
            <li>
              <Link className="dashboard-item" to={"/dashboard/orders"}>
                Orders
              </Link>
            </li>
            <li>
              <Link className="dashboard-item" to={"/dashboard/add-product"}>
                Add Product
              </Link>
            </li>
            <li>
              <Link
                className="dashboard-item"
                to={"/dashboard/manage-products"}
              >
                Manage Products
              </Link>
            </li>
          </>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
