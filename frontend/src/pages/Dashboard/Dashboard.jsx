import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import { auth } from "../../firebase.js";
const Dashboard = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="drawer drawer-mobile lg:px-16 pb-8 text-accent mx-auto">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content lg:px-16 px-2">
        <div className="bg-base-300 px-4 rounded-lg py-4">
          <Outlet />
        </div>
      </div>
      <div className={`drawer-side rounded-lg hidden `}>
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu text-accent p-4 overflow-y-auto w-60 bg-base-300 ">
          <>
            <li>
              <Link className="font-bold" to={"/dashboard/my-orders"}>
                My Orders
              </Link>
            </li>
            <li>
              <Link className="font-bold" to={"/dashboard/my-reviews"}>
                My Reviews
              </Link>
            </li>
            <li>
              <Link className="font-bold" to={"/dashboard/add-review"}>
                Add Review
              </Link>
            </li>
          </>
          <>
            <li>
              <Link className="font-bold" to={"/dashboard/users"}>
                Users
              </Link>
            </li>
            <li>
              <Link className="font-bold" to={"/dashboard/orders"}>
                Orders
              </Link>
            </li>
            <li>
              <Link className="font-bold" to={"/dashboard/add-product"}>
                Add Product
              </Link>
            </li>
            <li>
              <Link className="font-bold" to={"/dashboard/manage-products"}>
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
