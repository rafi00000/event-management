const ServiceCard = ({ service }) => {
  const { title, image, description, price } = service;
  console.log(title, image, description, price);

  // name, image, price, shortDesc
  return (
    <div className="card card-compact shadow-xl w-80 h-96 m-10 ">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="h-48 w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description?.length > 200 ? description.slice(0, 200): description} ...Read More</p>
        <div className="card-actions justify-end">
          <button className="btn bg-orange-500 text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
