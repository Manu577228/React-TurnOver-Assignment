import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./OTPPage.css";

function OTPPage() {
  return (
    <div>
      <ul className="nav">
        <li>Help</li>
        <li>Orders & Returns</li>
        <li>Hi, John</li>
      </ul>
      <div className="nav-main">
        <h1>ECOMMERCE</h1>
        <ul className="nav-elements-main">
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
            <h1>Verify your email!</h1>
            <h5>Enter the 8 digit code you have received on</h5>
            <h5>anu***@gmail.com</h5>
          </div>

          <div className="otp-container">
            <input type="text" className="otp-box" maxLength="1" />
            <input type="text" className="otp-box" maxLength="1" />
            <input type="text" className="otp-box" maxLength="1" />
            <input type="text" className="otp-box" maxLength="1" />
            <input type="text" className="otp-box" maxLength="1" />
            <input type="text" className="otp-box" maxLength="1" />
            <input type="text" className="otp-box" maxLength="1" />
            <input type="text" className="otp-box" maxLength="1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPPage;
