import React from 'react'
import { useSelector } from 'react-redux';
import Modal from './Modal.jsx';

const AllModal = () => {
  const data = useSelector((state) => state.modal);
  return (
    <div>
      {data.item && <Modal item={data.item} />}
    </div>
  )
}

export default AllModal
