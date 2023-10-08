const CustomerReview = () => {
  return (
    <div className="my-10 space-y-5">
      <h2 className="text-2xl font-bold text-center">Our Happy Customers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card w-96 glass p-5">
          <figure>
            <img
              src="https://i.ibb.co/1YchQG4/user1.jpg"
              alt="car!"
              className="w-fit h-24 rounded-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">Michael Johnson</h2>
            <p>
              Our company annual shareholder meeting was a pivotal event for
              us, and we needed it to run smoothly. Menegerio took care of every
              detail, ensuring a seamless and productive meeting.
            </p>
          </div>
        </div>
        <div className="card w-96 glass p-5">
          <figure>
            <img
              src="https://i.ibb.co/r0Y35zj/user2.jpg"
              alt="car!"
              className="w-fit h-24 rounded-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">Michael Johnson</h2>
            <p>
              Menegerios event management services exceeded my expectations.
              They demonstrated professionalism and creativity throughout the
              entire process. The event they organized for us was a resounding
              success.
            </p>
          </div>
        </div>
        <div className="card w-96 glass p-5">
          <figure>
            <img
              src="https://i.ibb.co/SxpP8Tn/user3.jpg"
              alt="car!"
              className="w-fit h-24 rounded-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold">Robert Davis</h2>
            <p>
              I recently attended a corporate conference managed by Menegerio,
              and it was nothing short of outstanding. The flawless execution,
              engaging presentations, and overall experience were commendable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
