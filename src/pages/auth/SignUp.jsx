import { Link } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";


const SignUp = () => {
  
  const {createUser} = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, photo, email, password);

    // create user
    createUser(email, password)
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.error(error);
    })
  }

  return (
    <div>
      <NavBar />
      <div className="flex justify-center md:mt-28 mt-10">
        <div className="md:w-1/3 border rounded-md">
          <h3 className="text-3xl font-semibold text-center mt-8">Sign Up</h3>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
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
                placeholder="photo url"
                name="photo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Create</button>
            </div>
            <Link className="text-center mt-2 hover:text-blue-500" to="/sign-in">Already have Account?</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
