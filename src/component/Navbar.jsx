import React from "react";
import cartIcon from "../assets/freshcart-logo.svg";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-1 mt-2 shadow-sm">
        <div className="container-fluid navbar-custom-container">
          {/* Brand */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={cartIcon} alt="Cart Icon" className="me-2" />
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* collapse */}
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            {/* Search + Icons Bar */}
            <form className="d-flex mx-auto w-50" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for products"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success d-flex align-items-center"
                type="submit"
              >
                <i className="fa-solid fa-location-dot me-1"></i>
                Location
              </button>
            </form>

            {/* Icons */}
            <ul className="navbar-nav d-flex flex-row align-items-center gap-3">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa-regular fa-heart fa-lg"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa-regular fa-user fa-lg"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa-regular fa-bookmark fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Second navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-1">
        <div className="container-fluid navbar-custom-container d-flex flex-wrap align-items-center py-1 gap-3">
          {/* All Department button */}
          <button
            className="btn btn-success"
            type="button"
            aria-expanded="false"
            style={{ backgroundColor: "#0aad0a" }}
          >
            <svg
              className="me-1 feather feather-grid"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              stroke-linejoine="round"
            >
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            All Departments
          </button>
          {/* Nevigation Buttons */}
          <ul className="navbar-nav align-items-center">
            <li className="nav-item dropdown w-100 w-lg-auto">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="./index.html">
                    Home 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/index-2.html">
                    Home 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/index-3.html">
                    Home 3
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/index-4.html">
                    Home 4
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/index-5.html">
                    Home 5
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown w-100 w-lg-auto">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="./pages/shop-grid.html">
                    Shop Grid - Filter
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="./pages/shop-grid-3-column.html"
                  >
                    Shop Grid - 3 column
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/shop-list.html">
                    Shop List - Filter
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/shop-filter.html">
                    Shop - Filter
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="./pages/shop-fullwidth.html"
                  >
                    Shop Wide
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/shop-single.html">
                    Shop Single
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="./pages/shop-single-2.html"
                  >
                    Shop Single v2
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="./pages/shop-wishlist.html"
                  >
                    Shop Wishlist
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/shop-cart.html">
                    Shop Cart
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="./pages/shop-checkout.html"
                  >
                    Shop Checkout
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown w-100 w-lg-auto">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Stores
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="./pages/store-list.html">
                    Store List
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/store-grid.html">
                    Store Grid
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/store-single.html">
                    Store Single
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown w-100 w-lg-auto">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="./pages/blog.html">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/blog-single.html">
                    Blog Single
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="./pages/blog-category.html"
                  >
                    Blog Category
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/about.html">
                    About us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/404error.html">
                    404 Error
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown w-100 w-lg-auto">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="./pages/signin.html">
                    Sign in
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./pages/signup.html">
                    Signup
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="./pages/forgot-password.html"
                  >
                    Forgot Password
                  </a>
                </li>
                <li className="dropdown-submenu dropend">
                  <a
                    className="dropdown-item dropdown-list-group-item dropdown-toggle"
                    href="#"
                  >
                    My Account
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/account-orders.html"
                      >
                        Orders
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/account-settings.html"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/account-address.html"
                      >
                        Address
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/account-payment-method.html"
                      >
                        Payment Method
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./pages/account-notification.html"
                      >
                        Notification
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item w-100 w-lg-auto">
              <a className="nav-link" href="./dashboard/index.html">
                Dashboard
              </a>
            </li>
            <li className="nav-item dropdown w-100 w-lg-auto dropdown-flyout">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdownDocs"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Docs
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
