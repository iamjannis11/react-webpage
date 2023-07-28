import "./property.css";
import { GiWorld } from "react-icons/gi";
import { SiHandshakeProtocol } from "react-icons/si";
import { SiTraefikproxy } from "react-icons/si";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import Residence from "./Residence.tsx";
import Img1 from "./property-img1.jpg";
import Img2 from "./property-img2.jpg";
import Img3 from "./property-img3.jpg";

const Property = () => {
  return (
    <div id="property" className="property">
      <div className="company-container" data-aos="zoom-in-up">
        <span className="company-icon">
          <GiWorld size="70px" className="icon" />
          <h2>Company</h2>
        </span>
        <span className="company-icon">
          <SiHandshakeProtocol size="70px" className="icon" />
          <h2>Company</h2>
        </span>
        <span className="company-icon">
          <SiTraefikproxy size="70px" className="icon" />
          <h2>Company</h2>
        </span>
        <span className="company-icon">
          <LiaProjectDiagramSolid size="70px" className="icon" />
          <h2>Company</h2>
        </span>
      </div>
      <div className="residence-container">
        <span>Best Choice</span>
        <h2>Popular Residences</h2>
        <div className="card-container" data-aos="zoom-in-up">
          <Residence
            image={Img1}
            price="$ 47,043"
            name="Alivia Pricia Jardin"
            description="Jakarta Gardeb City Street,Caikung. Pulo Gadung.Jakarta Timur, DKI Jakarta"
          />
          <Residence
            image={Img2}
            price="$ 66,252"
            name="Asatti Garden City"
            description="Pahiawan Street XVII No.215,Cinangka. Sawangan Depek, Jawa Barat"
          />
          <Residence
            image={Img3}
            price="$ 24,552"
            name="Citraland Puri Serang"
            description="Ruko Puriinah Residence Bick A7, Lingka Street.Ciravas Serang. Bantan"
          />
        </div>
      </div>
    </div>
  );
};

export default Property;
