import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { title, image, description, price, id } = service;
  const navigate = useNavigate();

  // name, image, price, shortDesc
  return (
    <div className="p-9 rounded-lg shadow-xl">
        <img
          src={image}
          className="rounded-xl h-52 w-full"
        />
      <div className="space-y-3 flex flex-col justify-between">
        <h2 className="card-title">{title}</h2>
        <p>{description?.length > 200 ? description.slice(0, 200) : description}...Read More</p>
        <p className='text-xl bg-orange-400 text-white w-fit p-2 rounded-lg font-bold'>Price: {price}$</p>
        <div className="card-actions justify-center">
          <button className="btn bg-orange-500 text-white hover:bg-orange-700" onClick={()=> navigate(`/service/${id}`)}>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  service: PropTypes.object
};