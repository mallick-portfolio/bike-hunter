import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../../components/Shared/Loading.jsx";
import { auth } from "../../../firebase.js";
import useAdmin from "../../../hooks/useAdmin.js";
import useData from "../../../hooks/useData.js";
import UserRow from "./UserRow.jsx";

const Users = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const url = `http://localhost:5000/users`;
  const { loading: load, data: users } = useData(url);
  if (loading || load || adminLoading) {
    return <Loading />;
  }
  return (
    <div className="container">
      <div className="py-8">
        <div>
          <h2 className="order-title">users</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="order-th">UserName</th>
                  <th className="order-th">Email</th>
                  <th className="order-th">Role</th>
                  <th className="order-th">Action</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user) => (
                  <UserRow key={user._id} user={user} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
