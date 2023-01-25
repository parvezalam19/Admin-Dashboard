import React from "react";
import Navbar from "../../../Navbar/Navbar";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendData } from "../../../redux/action";

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    expireDate: "",
    stock: "",
    category: "",
    unitSold: "1200",
  });
  const dispatch = useDispatch();

  const inputValue = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewProduct({
      name: "",
      description: "",
      expireDate: "",
      stock: "",
      category: "",
      unitSold: "1200",
    });
    dispatch(sendData(newProduct));
  };
  return (
    <>
      <Navbar />
      <section className="addproducts">
        <main className="product-box">
          <h3 className="addproduct-title">Add Product</h3>
          <div className="form-container">
            <div className="input-container">
              <div className="input-box">
                <label htmlFor="Product-name">Product Name</label> <br />
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={inputValue}
                />
              </div>
              <div className="input-box">
                <label htmlFor="Product-name">Description</label> <br />
                <textarea
                  type="text"
                  rows="7"
                  cols="7"
                  name="description"
                  value={newProduct.description}
                  onChange={inputValue}
                />
              </div>
              <div className="input-box">
                <label htmlFor="Product-name">Category</label> <br />
                <select
                  name="category"
                  id=""
                  value={newProduct.category}
                  onChange={inputValue}
                >
                  <option value="">Select category</option>
                  <option value="New Arrival">New Arrival</option>
                  <option value="Most Popular">Most Popular</option>
                  <option value="Trending">Trending</option>
                </select>
              </div>

              <div className="input-box">
                <div className="small-box">
                  <div className="date-box">
                    <label htmlFor="expire-data">Expire Data</label>
                    <input
                      type="date"
                      name="expireDate"
                      value={newProduct.expireDate}
                      onChange={inputValue}
                    />
                  </div>
                  <div className="date-box">
                    <label htmlFor="expire-data">Unit Stock</label>
                    <input
                      type="text"
                      name="stock"
                      value={newProduct.stock}
                      onChange={inputValue}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="image-conatiner">
              <div className="img-logo">
                <label htmlFor="logo">
                  <i className="fas fa-cloud-upload-alt upload-icon"></i>
                </label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="logo"
                  name="productImg"
                ></input>
              </div>

              <button className=" add-product upload-file-btn">
                Upload File
              </button>
            </div>
          </div>
          <button className=" add-product" onClick={handleSubmit}>
            Add Product Now
          </button>
        </main>
      </section>
    </>
  );
};

export default AddProduct;
