import { MdOutlineLocationCity } from "react-icons/md";
import HomeImg from "./home-img.jpg";
import "./home.css";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="home-text" data-aos="zoom-in-up">
        <h1>Discover Most Suitable Property</h1>
        <p>
          Fins a variety of properties that suit you very easily, forget all
          difficulties in finding a residence for you
        </p>
        <div className="home-input">
          <form onSubmit={() => alert("nothing happen still ;)")}>
            <input type="text" placeholder="location..." />
            <MdOutlineLocationCity
              className="home-icon"
              color="black"
              size="38px"
            />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
      <div className="home-img" data-aos="zoom-in-up">
        <img
          src={HomeImg}
          alt="A building in Taichung City, Taiwan"
          width="300px"
          height="400px"
        />
      </div>
    </div>
  );
};

export default Home;
