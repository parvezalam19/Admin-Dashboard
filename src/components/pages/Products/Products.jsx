import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Navbar from "../../Navbar/Navbar";
import ProductCat from "./component/productCat";
import "./Products.css";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

const Products = () => {
  let apiData = JSON.parse(localStorage.getItem("userdata"));

  const [productId, setProductId] = useState([]);

  const [productsData, setProductsData] = useState(
    apiData && apiData.productsPage && apiData.productsPage.products
      ? apiData.productsPage.products
      : []
  );

  const [checkedItems, setCheckedItems] = useState(
    Array(productsData.length).fill(false)
  );

  const navigate = useNavigate();
  const newdata = useSelector((state) => state.data);


  useEffect(() => {
    if (Object.keys(newdata).length !== 0) {
      setProductsData([...productsData, ...Object.values(newdata)]);
    }
  }, [newdata]);

  const deleteProducts = (idx) => {
    const filterProducts = productsData.filter((n, id) => id !== idx);
    setProductsData(filterProducts);
  };
  const deleteSelectedProducts = (e) => {
    e.preventDefault();
    if (!checkedItems.includes(true)) {
      alert("Please select at least one product");
    } else {
      const newProductsData = productsData.filter((_, i) => !checkedItems[i]);
      setProductsData(newProductsData);
      setCheckedItems(Array(newProductsData.length).fill(false));
    }
  };

  const checkvalue = (index) => {
    setProductId((state) => {
      return [...state, index];
    });
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    console.log(newCheckedItems);
    setCheckedItems(newCheckedItems);
  };

  return (
    <>
      <Navbar />
      <section className="products-container">
        <div className="products-list">
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            autoHeight
            autoHeightMin={0}
            autoHeightMax={400}
          >
            <table className="table">
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>PRODUCT NAME</th>
                  <th>UNIT SOLD</th>
                  <th>IN STOCK</th>
                  <th>EXPIRAY DATE</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody className="table_body">
                {productsData &&
                  productsData.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th>
                          <input
                            type="checkbox"
                            checked={checkedItems[index]}
                            onChange={() => checkvalue(index)}
                          />
                        </th>
                        <td>
                          <strong>{item.name}</strong>
                        </td>
                        <td>
                          <strong>{item.unitSold}</strong>
                        </td>
                        <td>
                          <strong>{item.stock}</strong>
                        </td>
                        <td>{item.expireDate}</td>
                        <td>
                          <button
                            className="myproduct-delete-link"
                            onClick={() => deleteProducts(index)}
                          >
                            <i className="far fa-trash-alt myproduct-delete-icon"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </Scrollbars>

          <Link to="/add-product">
            <button className="add-product">Add New Products</button>
          </Link>
          <button className="add-product" onClick={deleteSelectedProducts}>
            Delete Selected Products
          </button>
        </div>
        <div className="products-cat">
          <ProductCat productsData={apiData} />
        </div>
      </section>
    </>
  );
};

export default Products;
