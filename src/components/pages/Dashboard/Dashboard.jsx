import React from "react";
import LatestHits from "./charts/LatestHits";
import { useState, useEffect } from "react";
import './dashboard.css'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Performance from "./charts/Perfomance";
import StorageInfo from "./charts/StorageData";
import Notification from "./charts/Notification";
import OrderList from "./charts/OrderList";

const Dashboard = () => {
  const navigate = useNavigate()
  const data = JSON.parse(localStorage.getItem('userdata'))
  const user = (localStorage.getItem('userName'))
  const password = (localStorage.getItem('password'))

  useEffect(() => {
    if (user && password) {
      navigate('/dashboard')
    }
  }, []);


  return (
    <>
      <Navbar />
      <section className="dashboard-container">
        <h2 className="dashboard-title">Welcome back, Admin</h2>
        <main className="chart-container">
          <div className="chart">
            <h3>LatestHits</h3>
            <LatestHits data={data.dasbhoardPage.latestHits} />
          </div>
          <div className="chart">
            <h3>Performance</h3>
            < Performance data={data.dasbhoardPage.performance} />
          </div>
          <div className="chart">
            <h3>Storage Information</h3>
            <StorageInfo data={data.dasbhoardPage.storage} />
          </div>
          <div className="chart">
            <Notification data={data.dasbhoardPage.notifications} />
          </div>
<OrderList  data={data.dasbhoardPage.orders}/>

        </main>


      </section>
    </>
  );
};

export default Dashboard;
