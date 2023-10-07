import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Components/ServiceCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Marquee from "react-fast-marquee";

const Home = () => {
  const data = useLoaderData();

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Manegerio | Home</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>

        {/* Banner Starts */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/B3dwdqm/share-Holder-Meeting.jpg')",
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
          {/* this is cards container */}
          <div>
            <Marquee pauseOnHover={true}>
            {data.map((service) => (
              <ServiceCard key={service.id} service={service}></ServiceCard>
            ))}
            </Marquee>
          </div>

        </div>
      </div>
    </HelmetProvider>
  );
};

export default Home;
