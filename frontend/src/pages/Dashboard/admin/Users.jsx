import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../../components/Shared/Loading.jsx";
import { auth } from "../../../firebase.js";
import useData from "../../../hooks/useData.js";
import UserRow from "./UserRow.jsx";

const Users = () => {
  const [user, loading] = useAuthState(auth);
  const url = `http://localhost:5000/users`;
  const { loading: load, data: users } = useData(url);
  if (loading || load) {
    return <Loading />;
  }
  return (
    <div class="container">
      <div class="py-8">
        <div>
          <h2 class="order-title">users</h2>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="order-th">UserName</th>
                  <th class="order-th">Email</th>
                  <th class="order-th">Role</th>
                  <th class="order-th">Action</th>
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
