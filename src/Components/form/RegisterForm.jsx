import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const RegisterForm = () => {
    const { createAccWithMail } = useContext(AuthContext)
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photoURL, email, password.length);

        // validation
        

        // creating the account
        createAccWithMail(email, password)
        .then(data=> {
            console.log(data.user)
            setSuccess('Successfully Created User');
        })
        .catch(err => {
            console.log(err)
            setError(err)
        })
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register Here</h1>
        </div>
        <div className="card shadow-2xl bg-base-100 w-2/3">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="url"
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-500 text-white hover:bg-orange-600">Register</button>
            </div>
            <p className="text-center">Already Have an account? <Link to={'/login'} className="font-bold text-orange-600">Login?</Link></p>
            <p className="text-center text-green-600 font-bold">{success}</p>
            <p className="text-center text-red-600 font-bold">{error}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
