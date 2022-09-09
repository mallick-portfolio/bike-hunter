import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeModal } from "../../feature/slice/modalSlice.js";
const MessageModal = ({ item }) => {
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
    <div className="modal-container">
      <div className="mt-64 md:mt-0">
        <div className="modal-in">
          <div className="modal-col">hello world</div>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
