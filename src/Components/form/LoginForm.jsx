import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const LoginForm = () => {

    const {signInUser} = useContext(AuthContext);

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setError('');
        setSuccess(''); 

        signInUser(email, password)
        .then(data => {
            console.log(data)
            setSuccess('Successfully logged in');
            e.target.reset();
        })
        .catch(err => {
            console.log(err)
        })
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login here</h1>
        </div>
        <div className="card bg-base-100 w-2/3">
          <form className="card-body" onSubmit={handleLogin}>
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
              <button className="btn bg-orange-500 text-white hover:bg-orange-600">
                Login
              </button>
            </div>
            <p className="text-center">
              New Here?{" "}
              <Link to={'/register'} className="font-bold text-orange-600">Register</Link>
            </p>
            <p className="text-center text-green-700 font-bold">{success}</p>
            <p className="text-center text-green-700 font-bold">{error}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
