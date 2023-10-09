import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  const { signInUser, googleAuth } = useContext(AuthContext);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleGoogleLogin = () => {
    setSuccess("");
    setError("");
    googleAuth()
    .then(data =>{
      console.log(data);
      setSuccess("User Login Successfully")
    })
    .catch(err => console.log(err))
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setError("");
    setSuccess("");

    signInUser(email, password)
      .then((data) => {
        console.log(data);
        setSuccess("Successfully logged in");
        e.target.reset();
      })
      .catch((err) => {
        setError('Wrong user name or password')
      });
      
  };

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
              <Link to={"/register"} className="font-bold text-orange-600">
                Register
              </Link>
            </p>
            {/* google */}
            <div
              className="rounded-3xl border w-fit mx-auto flex gap-3 p-2 cursor-pointer"
              onClick={handleGoogleLogin}
            >
              <FaGoogle className="text-2xl"></FaGoogle>
              <p>Continue with Google</p>
            </div>
            <p className="text-center text-green-700 font-bold">{success}</p>
            <p className="text-center text-red-700 font-bold">{error}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
