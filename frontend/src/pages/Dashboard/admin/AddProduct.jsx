import React, { useState } from "react";
import axios from 'axios'
const AddProduct = () => {
  const [data, setData] = useState({
    name: "",
    des: "",
    category: "",
    image: "",
    price: "",
    avilQty: "",
    minQty: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = {
      name: data.name,
      des: data.des,
      category: data.category,
      image: data.image,
      price: Number(data.price),
      avilQty: Number(data.avilQty),
      minQty: Number(data.minQty),
    };
    const result = await axios("")
  };

  return (
    <div className="container pt-12">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Product Name
          </label>
          <input
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            name="name"
            className="form-input"
            type="text"
          />
        </div>
        <textarea
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
          name="des"
          required
          rows={4}
          className="textarea w-full focus:border-primary outline-none rounded-lg pl-4 pt-4"
          placeholder="Description"
        ></textarea>
        <div className="flex gap-4 items-center flex-col lg:flex-row">
          <div className="my-1 lg:my-2">
            <label className="form-label" htmlFor="">
              Category Name
            </label>
            <input
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              name="category"
              className="form-input"
              type="text"
            />
          </div>
          <div className="my-1 lg:my-2">
            <label className="form-label" htmlFor="">
              Product Price
            </label>
            <input
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              name="price"
              className="form-input"
              type="number"
            />
          </div>
          <div className="my-1 lg:my-2">
            <label className="form-label" htmlFor="">
              Available Qunatity
            </label>
            <input
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              name="avilQty"
              className="form-input"
              type="number"
            />
          </div>
          <div className="my-1 lg:my-2">
            <label className="form-label" htmlFor="">
              Minimum Qunatity
            </label>
            <input
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              name="minQty"
              className="form-input"
              type="number"
            />
          </div>
        </div>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Image Url
          </label>
          <input
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            name="image"
            className="form-input"
            type="text"
          />
        </div>
        <div>
          <input
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            name=""
            type="submit"
            value="Submit"
            className="common-btn"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
