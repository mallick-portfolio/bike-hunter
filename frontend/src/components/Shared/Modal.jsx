import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../feature/slice/modalSlice.js";
const Modal = ({ item }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.modal.item);
  console.log(data);
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
    <div className="flex justify-center items-center h-auto lg:h-screen fixed top-0 left-0 bg-menu w-screen right-0 bottom-0  z-50 overflow-scroll lg:overflow-hidden">
      <div className="mt-64 md:mt-0">
        <div className="lg:w-2/3 w-full flex flex-col md:flex-row justify-between gap-6 p-4 lg:p-12 mx-auto bg-btn border border-primary rounded-2xl">
          <div className="w-full md:w-1/2 p-4 bg-btn shadow-3xl rounded-lg">
            <img className="w-44 mx-auto" src={data.image} alt="" />
            <h1 className="text-primary text-xl lg:text-2xl font-serif">
              {data.name}
            </h1>
            <p className="text-base font-medium py-2 text-tertiary">
              {data.des.length > 110 ? data.des.slice(0, 110) : data.des}
            </p>
            <p className="flex justify-between items-center py-0.5">
              <span className="text-primary text-base font-semibold">
                Category
              </span>{" "}
              <span className="text-primary text-xl font-semibold">
                {data.category}{" "}
              </span>
            </p>
            <p className="flex justify-between items-center py-0.5">
              <span className="text-primary text-base font-semibold">
                Price
                <span className="text-xs text-tertiary ml-1">
                  (Per Product)
                </span>
              </span>{" "}
              <span className="text-primary text-xl font-semibold">
                ${data.price}{" "}
              </span>
            </p>
            <p className="flex justify-between items-center py-0.5">
              <span className="text-primary text-base font-semibold">
                Available Quantity
              </span>{" "}
              <span className="text-primary text-xl font-semibold">
                {data.avilQty}
              </span>
            </p>
            <p className="flex justify-between items-center py-0.5">
              <span className="text-primary text-base font-semibold">
                Minimum Ordered Quantity
              </span>{" "}
              <span className="text-primary text-xl font-semibold">
                {data.minQty}
              </span>
            </p>
            <button onClick={() => dispatch(closeModal())}>
              <FontAwesomeIcon className="xicon" icon={faXmark} />
            </button>
          </div>
          <div className="w-full md:w-1/2 p-4 bg-btn shadow-3xl rounded-lg">
            <form action="">
              <div className="my-1 lg:my-2">
                <label className="form-label" htmlFor="">
                  User Name
                </label>
                <input className="form-input" type="text" />
              </div>
              <div className="my-1 lg:my-2">
                <label className="form-label" htmlFor="">
                  Contact Number
                </label>
                <input className="form-input" type="text" />
              </div>
              <div className="my-1 lg:my-2">
                <label className="form-label" htmlFor="">
                  Number of Quantity You want to Buy
                </label>
                <input className="form-input" type="text" />
              </div>
              <div className="my-1 lg:my-2">
                <label className="form-label" htmlFor="">
                  Country
                </label>
                <input className="form-input" type="text" />
              </div>
              <div className="my-1 lg:my-2">
                <label className="form-label" htmlFor="">
                  Address
                </label>
                <input className="form-input" type="text" />
              </div>
              <div className="mt-2">
                <input className="form-submit" type="submit" value={"Submit"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
