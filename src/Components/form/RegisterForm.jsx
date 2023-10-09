import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';


const RegisterForm = () => {
  const { createAccWithMail } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const url = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    setSuccess('')
    setError('')
    // validation
    if(password.length < 6){
      toast.error('At lease 6 character is needed');
      return
    }
    else if(!(/^(?=.*[A-Z](?=.*[\W_]).+$)/).test(password)){
      toast.error('give at lease one special character and capital letter')
      return
    }
    
    // creating the account
    createAccWithMail(email, password)
      .then((data) => {
        // update name and image
        updateProfile(data.user, {
          displayName: name,
          photoURL: url
        })
          .then((data) => {
            console.log(data);
          })
          .catch((err) => console.log(err));
        toast.success('Successfully created the user')
        window.location.reload();
        })
      .catch((err) => {
        console.log(err);
        toast.error('Something went wrong ');
      });
  };

  return (
    <div className="min-h-screen my-8">
      <div className="flex-col w-11/12 md:w-2/3 mx-auto border p-10 rounded-xl">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register Here</h1>
        </div>
        <div className="">
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
              <button className="btn bg-orange-500 text-white hover:bg-orange-600">
                Register
              </button>
            </div>
            <p className="text-center">
              Already Have an account?{" "}
              <Link to={"/login"} className="font-bold text-orange-600">
                Login?
              </Link>
            </p>
            <p className="text-center text-green-600 font-bold">{success}</p>
            <p className="text-center text-red-600 font-bold">{error}</p>
          </form>
        </div>
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default RegisterForm;
