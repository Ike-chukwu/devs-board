import React from "react";
import img from "../../assets/assets/logos/maker.svg"
import './Card.scss'


const Card = () => {
  return (
    <div className="card">
      <img src={img} alt="" className="company-logo" />
      <div className="full-job-details">
        <div className="first-part">
          <span className="time">5h ago</span>
          <div className="circle"></div>
          <span className="job-type">full time</span>
        </div>
        <h4 className="job-name">senior software engineer</h4>
        <p className="company-name">scoot</p>
      </div>

      <p className="job-location">united kingdom</p>
    </div>
  );
};

export default Card;
