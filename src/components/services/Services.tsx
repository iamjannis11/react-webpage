import "./services.css";
import ServiceImg from "./service-img.jpg";
import { FaUserCircle } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import { BsFillHouseCheckFill } from "react-icons/bs";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-img" data-aos="zoom-in-up">
        <img src={ServiceImg} />
      </div>
      <div className="services-text">
        <div className="text-box" data-aos="zoom-in-up">
          <span>OurValue</span>
          <h2>Value We Give To You</h2>
          <p>
            We always readty to help by providing the best service for you. We
            believe a good place to live can make your life better.
          </p>
        </div>
        <div className="value-box" data-aos="zoom-in-up" data-aos-delay="200">
          <FaUserCircle className="user-icon" size="25px" color="gray" />
          <p>Best interest rates on the market</p>
          <FaHandHoldingHeart className="heart-icon" size="25px" color="gray" />
        </div>
        <div className="value-box" data-aos="zoom-in-up" data-aos-delay="200">
          <BsShieldFillCheck className="user-icon" size="25px" color="gray" />
          <p>Best interest rates on the market</p>
          <FaHandHoldingHeart className="heart-icon" size="25px" color="gray" />
        </div>
        <div className="value-box" data-aos="zoom-in-up" data-aos-delay="200">
          <BsFillHouseCheckFill
            className="user-icon"
            size="25px"
            color="gray"
          />
          <p>Best price on the market</p>
          <FaHandHoldingHeart className="heart-icon" size="25px" color="gray" />
        </div>
      </div>
    </div>
  );
};

export default Services;
