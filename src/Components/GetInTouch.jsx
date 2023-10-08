const GetInTouch = () => {
  return (
    <div>
      {/* Get in touch */}
      <h2 className="text-5xl font-bold text-center text-orange-600">Get in touch</h2>
      <div className="flex items-center justify-center">
        {/* form */}
        <div className="w-full md:w-3/5">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                type="text"
                placeholder="Enter you message here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-600 text-white hover:bg-orange-700">
                submit
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:flex">
          <img
            src="https://i.ibb.co/xs1GnZ4/contact.gif"
            alt=""
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
