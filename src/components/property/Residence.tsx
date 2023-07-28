import "./property.css";

function Residence({ image, price, name, description }) {
  return (
    <div className="card" data-aos="zoom-in-up" data-aos-delay="200">
      <img src={image} className="card-img" />
      <span>{price}</span>
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Residence;
