import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Components/ServiceCard";
import { Helmet, HelmetProvider } from "react-helmet-async";
import GetInTouch from "./../Components/GetInTouch";
import CustomerReview from "../Components/CustomerReview";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  const data = useLoaderData();

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Manegerio | Home</title>
        </Helmet>

        {/* Banner Starts */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/B3dwdqm/share-Holder-Meeting.jpg')",
          }}
          data-aos="fade-down-left"
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

        <div className="my-8" data-aos="zoom-in-down">
          <h3 className="text-4xl text-center font-bold text-orange-500 hover:underline">
            Services
          </h3>
          {/* this is cards container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {data.map((service) => (
                <ServiceCard key={service.id} service={service}></ServiceCard>
              ))}
          </div>
        </div>
        {/* customer section */}
        <CustomerReview></CustomerReview>

        <GetInTouch></GetInTouch>
      </div>
    </HelmetProvider>
  );
};

export default Home;
