import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { title, image, description, price, id } = service;
  const navigate = useNavigate();

  // name, image, price, shortDesc
  return (
    <div className="card card-compact shadow-xl w-80 h-96 m-10 ">
      <figure className="h-48">
        <img
          src={image}
          className=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description?.length > 200 ? description.slice(0, 200) : description}...Read More</p>
        <p className='font-bold'>Price: {price}$</p>
        <div className="card-actions justify-end">
          <button className="btn bg-orange-500 text-white hover:bg-orange-700 btn-sm" onClick={()=> navigate(`/service/${id}`)}>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  service: PropTypes.object
}