import React, { useState } from "react";
import styles from "../dashboard.module.css";
import Logo from "../components/images/logo.png";

const Dashboard = () => {
  const [active, setActive] = useState("Seller Dashboard");
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleShowModal = () => {
    setShowModal(true);
    console.log("Modal shown");
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* Top Navigation */}
      <nav className={styles.nav}>
        <div className={styles.menuIcon} onClick={toggleSidebar}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className={styles.navTitle}>
          <h2>{active}</h2>
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.search}>
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${
          sidebarVisible ? styles.sidebarVisible : ""
        }`}
      >
        <div className={styles.sidebarHeader}>
          <div className={styles.logo}>
            <div className={styles.logoPlaceholder}>
              <img src={Logo} alt="..." />
            </div>
          </div>
          <div className={styles.closeBtn} onClick={toggleSidebar}>
            <i className="fas fa-times"></i>
          </div>
        </div>

        <div className={styles.sidebarMenu}>
          <ul>
            <li className={styles.menuItem}>
              <i className="fas fa-home"></i>
              <span>Home</span>
            </li>
            <li className={styles.menuItem}>
              <i className="fas fa-receipt"></i>
              <span>Order</span>
            </li>
            <li className={styles.menuItem}>
              <i className="fas fa-shopping-basket"></i>
              <span>Product</span>
            </li>
            <li className={styles.menuItem}>
              <i className="fas fa-chart-line"></i>
              <span>Reports</span>
            </li>
            <li className={styles.menuItem}>
              <i className="fas fa-users"></i>
              <span>Buyers</span>
            </li>
            <li className={styles.menuItem}>
              <i className="fas fa-cog"></i>
              <span>Settings</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay when sidebar is visible on mobile */}
      {sidebarVisible && (
        <div className={`${styles.overlay}`} onClick={toggleSidebar}></div>
      )}

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.salesOverview}>
          <div className={styles.sectionHeader}>
            <h3>Sales Overview</h3>
            <div className={styles.filterOptions}>
              <span className={`${styles.filterOption} ${styles.active}`}>
                Recent
              </span>
              <span className={styles.filterOption}>Order</span>
            </div>
          </div>

          <div className={styles.salesCards}>
            <div className={styles.salesCard}>
              <h4>0$</h4>
              <p>Today</p>
            </div>
            <div className={styles.salesCard}>
              <h4>0</h4>
              <p>Pending</p>
            </div>
            <div className={styles.salesCard}>
              <h4>0</h4>
              <p>Completed</p>
            </div>
            <div className={styles.salesCard}>
              <h4>0</h4>
              <p>Low</p>
            </div>
          </div>
        </div>

        <div className={styles.dashboardSections}>
          <div className={styles.recentOrders}>
            <div className={styles.sectionHeader}>
              <h3>Recent Orders</h3>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Buyer</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" className={styles.noData}>
                    No orders yet
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.productsSection}>
            <div className={styles.sectionHeader}>
              <h3>Products:</h3>
              <button
                className={styles.addProductBtn}
                onClick={handleShowModal}
              >
                + Add New Product
              </button>
            </div>
            <div className={styles.productsPlaceholder}>
              <p>
                <b>No products added yet</b>
              </p>
            </div>
          </div>
        </div>
      </main>

      <section
        className={`${styles.modalCont} ${showModal ? styles.modalActive : ""}`}
      >
        <div className={styles.modalHeader}>
          <div className={styles.modLogo}>
            <img src={Logo} alt="..." />
          </div>
          <div className={styles.cancelBox} onClick={handleCancel}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.contents}>
            <div className={styles.input}>
              <div>
                <div>
                  <div className={styles.lab}>
                    <label htmlFor="">Product Name</label>
                  </div>
                </div>
                <input type="text" placeholder="Product's popular Name" />
                <br />
              </div>

              <div className={styles.catCont}>
                <div className={styles.lab}>
                  <label htmlFor="">Category</label>
                </div>
                <div className={styles.category}>
                  <select name="Products" id="">
                    <option value="">Categories</option>
                    <option value="">Seeds</option>
                    <option value="">Perishable Foods</option>
                    <option value="">Processed Organic Product</option>
                    <option value="">Equipments</option>
                    <option value="">Ferterlizers</option>
                    <option value="">Pesticides</option>
                    <option value="">Others</option>
                  </select>
                </div>
              </div>
              <div>
                <div className={styles.lab}>
                  <label htmlFor="">Description</label>
                </div>
                <div className={styles.description}>
                  <textarea
                    name="description"
                    id="de"
                    rows={4}
                    placeholder="Enter description"
                  ></textarea>
                </div>
              </div>

              <div>
                <div className={styles.lab}>
                  <label htmlFor="">Price</label>
                </div>
                <div className={styles.priceInputWrapper}>
                  <span className={styles.currencySymbol}>₦</span>
                  <input type="number" placeholder="Price" />
                </div>
              </div>

              <div>
                <div className={styles.lab}>
                  <label htmlFor="">Unit Of Measure</label>
                </div>
                <div>
                  <select name="unit" id="unit">
                    <option value="">Options</option>
                    <option value="">Pieces</option>
                    <option value="">Kilograms</option>
                    <option value="">Litres</option>
                    <option value="">Carton</option>
                    <option value="">Dozen</option>
                    <option value="">Others</option>
                  </select>
                </div>
              </div>

              <div>
                <div className={styles.lab}>
                  <label htmlFor="">Size/Quantity Per Unit</label>
                </div>
                <div>
                  <input type="text" placeholder="e.g 50kg, 100 pieces" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contents}>
            <div>
              <div className={styles.lab}>
                <label htmlFor="">Expiration</label>
              </div>
              <div>
                <input type="date" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
