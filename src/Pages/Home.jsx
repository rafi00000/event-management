import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Components/ServiceCard";
import Marquee from "react-fast-marquee";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      {/* Banner Starts */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('https://i.ibb.co/B3dwdqm/share-Holder-Meeting.jpg')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full">
            <h1 className="mb-5 text-7xl font-bold">
              Corporate Event Planning
            </h1>
          </div>
        </div>
      </div>

      <div className="my-8">
        <h3 className="text-4xl text-center font-bold text-orange-500 hover:underline">
          Services
        </h3>
        <Marquee pauseOnHover>
        {data.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
        </Marquee>
        
      </div>
    </div>
  );
};

export default Home;
