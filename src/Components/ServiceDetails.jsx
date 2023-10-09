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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className=" relative" data-aos="zoom-in-down">
        <img src={image} alt="" className="w-1/2 mx-auto rounded-xl relative" />
        <p className="absolute rounded-xl bottom-0 right-96 bg-orange-600 p-4 text-white font-semibold text-xl">
          Price: {price}$
        </p>
      </div>
      <div
        className="my-10"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h2 className="text-2xl font-bold">Event Name: {title}</h2>
        <p>{description}</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center">
          Pricing & Pros
        </h2>
        <div className="flex items-stretch gap-5 justify-center">
          {/* services card */}
          <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-orange-600 to-orange-400 bg-clip-border p-8 text-white shadow-md my-7">
            <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
              <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                <span className="mt-2 text-4xl">$</span>
                {price}
                <span className="self-end text-4xl">/event</span>
              </h1>
            </div>
            <div className="p-0">
              <ul className="flex flex-col gap-4">
                {services?.map((service, idx) => (
                  <li key={idx} className="list-disc">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* pros */}
          <div className=" relative flex w-full max-w-[20rem] flex-col flex-grow rounded-xl bg-gradient-to-tr from-orange-600 to-orange-400 bg-clip-border p-8 text-white shadow-md my-7">
            <p className="text-2xl text-white font-bold mb-10 underline">
              Pros
            </p>
            <div className="p-0">
              <ul className="flex flex-col gap-4">
                {pros?.map((service, idx) => (
                  <li key={idx} className="list-disc">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
