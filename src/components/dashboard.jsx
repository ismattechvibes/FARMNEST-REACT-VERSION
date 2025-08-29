import React, { useState } from "react";
import Style from "../dashboard.module.css";
import Logo from './images/logo.png'

const Dashboard = () => {
  const[active, setActive] = useState('Seller Dashboard')
  return (
    <>
    <section className={Style.nav}>
      <div>
        <h2>{active}</h2>
      </div>
      <div>
        <div className={Style.search}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search..."/>
        </div>
      </div>
    </section>
      
    <div className={Style.sidebar}>
      <section className={Style.sidebarCont}>

        <div className="close">
          <i class="fa-solid fa-xmark"></i>
        </div>

            <div className={Style.profile}>
              <div className={Style.profImg}>
                <img src={Logo} alt="..."/>
              </div>
              <div className="brand-name"></div>
            </div>
            <div className={Style.list}>
              <ul>
                <div className={Style.li}>
                  <i className="fa-regular fa-house"></i>
                  <li>Home</li>
                </div>
                <div className={Style.li}>
                  <i className="fa-solid fa-receipt"></i>
                  <li>Order</li>
                </div>
                <div className={Style.li}>
                  <i className="fa-solid fa-basket-shopping"></i>
                  <li>Product</li>
                </div>
                <div className={Style.li}>
                  <i className="fa-solid fa-signal"></i>
                  <li>Reports</li>
                </div>
                <div className={Style.li}>
                  <i className="fa-solid fa-users"></i>
                  <li>Buyers</li>
                </div>
                <div className={Style.li}>
                  <i className="fa-solid fa-gear"></i>
                  <li>Settings</li>
                </div>
              </ul>
            </div>
      </section>
    </div>
    <div className={Style.herosection}>
      <div className={Style.heroCont}>
        <div className={Style.firstRow}>
        <div className={Style.head}>
        <div>
          <h3>
            Sales Overview
          </h3>
        </div>

        <div className={Style.msg}>
          <ul>
            <li>
              Orders
            </li>
            <li>
              Messages
            </li>
          </ul>
        </div>
      </div>
      <div className={Style.secRow}>
        <div className="sales sale1">
          <h4>0$</h4>
          <p>Today</p>
        </div>
        <div className="sales sale2">
          <h4>0</h4>
          <p>Pending</p>
        </div>
        <div className="sales sale3">
          <h4>0</h4>
          <p>Completed</p>
        </div>
        <div className="sales sale4">
          <h4>0</h4>
          <p>Low</p>
        </div>
      </div>     
      </div>

      <div className={Style.second}>
        <div className={Style.recentOrd}>
          <h3>Recent Order</h3>
          <table>
            <thead>
              <th>Order ID</th>
              <th>Buyer</th>
              <th>Date</th>
              <th>Status</th>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div className={Style.products}>
          <h3>Products</h3>
          <div className={Style.addProduct}>
            <button>+Add New Product</button>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
