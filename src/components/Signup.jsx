import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "./Signup.css";

function Signup() {
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
          <h1>Create your account</h1>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label> <br />
              <input type="text" id="name" placeholder="Enter" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label> <br />
              <input type="text" id="email" placeholder="Enter" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label> <br />
              <input type="text" id="password" placeholder="Enter" />
            </div>
            <div className="form-group">
              <button>
                <h3>CREATE ACCOUNT</h3>
              </button>
            </div>
            <div className="form-group">
              <p>
                HAVE AN ACCOUNT ? <span>LOGIN</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
