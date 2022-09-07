import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../feature/slice/modalSlice.js";
const Modal = ({ item }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.modal.item);
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [item]);
  return (
    <div className="flex justify-center items-center h-screen fixed top-0 left-0 bg-transparent w-screen right-0 bottom-0  z-50 overflow-hidden">
      <div className="w-1/2 p-12 mx-auto bg-btn border border-primary rounded-2xl">
        <img className="w-64" src={data.image} alt="" />
        <h1>{data.name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti illo
          maxime animi quia, ex at ea, totam debitis esse atque iste odit qui?
          Itaque molestiae, cupiditate iste officia mollitia maxime.
        </p>
        <button onClick={() => dispatch(closeModal())} className="common-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
