import React from "react";
import "./Home.css";
import Image from "../../assets/Images/Image";

const Home = () => {
  return (
    <div className="ContainerHome">
      <div className="headerwithimage">
        <img src={Image.Oaulogo} alt="" />
        <p className="ptagforheader">
          Obafemi Awolowo University <br />
          Hostel Management Portal
        </p>
      </div>

      <nav className="navbarhome">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Maintenance Request</a>
          </li>
          <li>
            <a href="">Notification</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </nav>

      <div className="pagecontents">
        <div className="leftNav">
          <ul>
            <li>Student Details</li>
            <li>Payment Status</li>
            <li>ID Card</li>
            <li>Logout</li>
          </ul>
        </div>
        <div className="rightpagecontent">
          <p>Student Details</p>
          <p>Registration Number:</p>
          <p>Name:</p>
          <p>Current Part:</p>
          <p>Degree Programme:</p>
          <p>Department:</p>
          <p>Faculty:</p>
          <p>BedSpace Location:</p>
          <p>Email Address:</p>
          <img className="imagestudentdetails" src={Image.student} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
