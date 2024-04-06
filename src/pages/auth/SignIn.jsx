import { Link } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";

const SignIn = () => {

  

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form.get('email'));

    
  }

  return (
    <div>
      <NavBar />
      <div className="flex justify-center md:mt-28 mt-10">
        <div className="md:w-1/3 border rounded-md">
          <h3 className="text-3xl font-semibold text-center mt-8">Sign In</h3>
          <form onSubmit={handleSignIn} className="card-body">
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
              <button className="btn btn-primary">Login</button>
            </div>
            <Link className="text-center mt-2 hover:text-blue-500" to="/sign-up">Create New Account</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;