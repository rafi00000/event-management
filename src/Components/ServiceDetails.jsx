import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ServiceDetails = () => {
  const param = useParams();
  const { id } = param;
  const [cardDetail, setCardDetail] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const cardQuery = data.find((detail) => detail.id == id);
        setCardDetail(cardQuery);
      });
  }, []);
  console.log(cardDetail);
  const { title, image, description, price, services, pros } = cardDetail;
  return (
    <div className="my-12">
      <div className="relative">
        <img src={image} alt="" className="w-1/2 mx-auto rounded-xl" data-aos="zoom-in-down" />
        <p className="absolute rounded-xl bottom-0 right-96 bg-orange-600 p-4 text-white font-semibold text-xl">
          Price: {price}$
        </p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>


      {/* services */}

      <div>
        <div>
            <h2>Services that you will get</h2>
        </div>

        <div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
