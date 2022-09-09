import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../../components/Shared/Loading.jsx";
import { auth } from "../../../firebase.js";
import useData from "../../../hooks/useData.js";
import ReviewRow from "./ReviewRow.jsx";

const Reviews = () => {
  const [user, loading] = useAuthState(auth);
  const url = `http://localhost:5000/reviews/${user?.email}`;
  const { loading: load, data: reviews } = useData(url);
  if (loading || load) {
    return <Loading />;
  }
  return (
    <div className="container">
      <div className="py-8">
        <div>
          <h2 className="order-title">Reviews</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="order-th">ID</th>
                  <th className="order-th">Review</th>
                  <th className="order-th">Rating</th>
                  <th className="order-th">Action</th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review, index) => (
                  <ReviewRow key={review._id} index={index} review={review} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
