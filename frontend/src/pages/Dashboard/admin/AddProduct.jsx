import React from "react";

const AddProduct = () => {
  return (
    <div className="container pt-12">
      <form className="login-form">
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Product Name
          </label>
          <input className="form-input" type="email" />
        </div>
        <textarea
          name="des"
          required
          rows={4}
          className="textarea w-full focus:border-primary outline-none rounded-lg pl-4 pt-4"
          placeholder="Comment your Review (character between 80 to 250)"
        ></textarea>
        <div className="flex gap-4 items-center flex-col lg:flex-row">
          <div className="my-1 lg:my-2">
            <label className="form-label" htmlFor="">
              Category Name
            </label>
            <input className="form-input" type="email" />
          </div>
          <div className="my-1 lg:my-2">
            <label className="form-label" htmlFor="">
              Product Price
            </label>
            <input className="form-input" type="email" />
          </div>
          <div className="my-1 lg:my-2">
            <label className="form-label" htmlFor="">
              Available Qunatity
            </label>
            <input className="form-input" type="email" />
          </div>
          <div className="my-1 lg:my-2">
            <label className="form-label" htmlFor="">
              Minimum Qunatity
            </label>
            <input className="form-input" type="email" />
          </div>
        </div>
        <div className="my-1 lg:my-2">
          <label className="form-label" htmlFor="">
            Image Url
          </label>
          <input className="form-input" type="email" />
        </div>

        <div>
          <input type="submit" value="Submit" className="common-btn" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
