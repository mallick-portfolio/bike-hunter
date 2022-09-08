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
    <div className="modal-container">
      <div className="mt-64 md:mt-0">
        <div className="modal-in">
          <div className="modal-col">
            <img className="w-44 mx-auto" src={data.image} alt="" />
            <h1 className="modal-product-title">{data.name}</h1>
            <p className="text-base font-medium py-2 text-tertiary">
              {data.des.length > 110 ? data.des.slice(0, 110) : data.des}
            </p>
            <p className="modal-paragraph">
              <span className="modal-span">Category</span>{" "}
              <span className="modal-subSpan">{data.category} </span>
            </p>
            <p className="modal-paragraph">
              <span className="modal-span">
                Price
                <span className="text-xs text-tertiary ml-1">
                  (Per Product)
                </span>
              </span>{" "}
              <span className="modal-subSpan">${data.price} </span>
            </p>
            <p className="modal-paragraph">
              <span className="modal-span">Available Quantity</span>{" "}
              <span className="modal-subSpan">{data.avilQty}</span>
            </p>
            <p className="modal-paragraph">
              <span className="modal-span">Minimum Ordered Quantity</span>{" "}
              <span className="modal-subSpan">{data.minQty}</span>
            </p>
            <button onClick={() => dispatch(closeModal())}>
              <FontAwesomeIcon className="xicon" icon={faXmark} />
            </button>
          </div>
          <div className="modal-col">
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
