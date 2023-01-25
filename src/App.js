import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/pages/Login/Login"
import Dashboard from "./components/pages/Dashboard/Dashboard";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';
import { useState, useEffect } from "react";
import Products from "./components/pages/Products/Products";
import Accounts from "./components/pages/Acoounts/Accounts";
import AddProduct from "./components/pages/Products/Addpage/AddProduct";


function App() {

  const getData = () => {
    fetch("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
      .then((response) => response.json())
      .then((res) => {
        localStorage.setItem('userdata', JSON.stringify(res))
      });

  };

  useEffect(() => {
    getData()

  }, []);



  return (
    <>

      <Router>

        <Routes>
          <Route path="/" element={<Login/>} ></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact  path="/products" element={ <Products /> } >
          </Route>
          <Route path="/add-product"  element = {<AddProduct/>}/>

          <Route path="/account" element={ <Accounts /> } />

        </Routes>
        <Footer />
      </Router>    </>
  );
}

export default App;


