import React, { useState, useEffect } from "react";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { faker } from "@faker-js/faker";
import "./ContentPage.css";

function ContentPage() {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 6;

  useEffect(() => {
    // Generate categories when component mounts
    generateCategories();
  }, []);

  const generateCategories = () => {
    const newCategories = Array.from({ length: 100 }, () =>
      faker.commerce.department()
    );
    setCategories(newCategories);
  };

  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <ul className="nav">
        <li>Help</li>
        <li>Orders & Returns</li>
        <li>Hi, John</li>
      </ul>
      <div className="nav-main">
        <h1>ECOMMERCE</h1>
        <ul className="nav-elemets-main">
          <li>
            <h4>Categories</h4>
          </li>
          <li>
            <h4>Sales</h4>
          </li>
          <li>
            <h4>Clearance</h4>
          </li>
          <li>
            <h4>New Stock</h4>
          </li>
          <li>
            <h4>Trending</h4>
          </li>
        </ul>
        <ul className="nav-elements-icons">
          <li>
            <IoSearchOutline size={30} />
          </li>
          <li>
            <IoCartOutline size={30} />
          </li>
        </ul>
      </div>
      <div className="sub-nav">
        <ul>
          <li>
            <FaAngleLeft size={30} />
          </li>
          <li>Get 10% off on business sign up</li>
          <li>
            <FaAngleRight size={30} />
          </li>
        </ul>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="form-text">
            <h1>Please mark your interests!</h1>
            <p>We will keep you notified.</p>
          </div>
          <h3>My saved interests!</h3>
          <ul>
            {currentCategories.map((category, index) => (
              <li key={index}>
                <input type="checkbox" /> {category}
              </li>
            ))}
          </ul>
          <div className="pagination">
            <ul>
              <li
                className={`${currentPage === 1 && "disabled"}`}
                onClick={() => paginate(currentPage - 1)}
              >
                &lt;&lt;
              </li>
              <li
                className={`${currentPage === 1 && "disabled"}`}
                onClick={() => paginate(currentPage - 1)}
              >
                &lt;
              </li>
              {Array.from({
                length: Math.ceil(categories.length / categoriesPerPage),
              }).map((_, index) => (
                <li
                  key={index}
                  className={`${currentPage === index + 1 && "active"}`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </li>
              ))}
              <li
                className={`${
                  currentPage ===
                    Math.ceil(categories.length / categoriesPerPage) &&
                  "disabled"
                }`}
                onClick={() => paginate(currentPage + 1)}
              >
                &gt;
              </li>
              <li
                className={`${
                  currentPage ===
                    Math.ceil(categories.length / categoriesPerPage) &&
                  "disabled"
                }`}
                onClick={() =>
                  paginate(Math.ceil(categories.length / categoriesPerPage))
                }
              >
                &gt;&gt;
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
