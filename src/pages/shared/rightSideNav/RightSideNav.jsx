import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import  qZone1 from "../../../assets/qZone1.png";
import  qZone2 from "../../../assets/qZone2.png";
import  qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div className="space-y-5 my-4">
      {/* Login with Start */}
      <div className="p-4 space-y-3 border rounded-md text-center">
        <h2 className="text-3xl font-semibold">Login with</h2>
        <button className="btn btn-outline w-full">
          <FcGoogle className="text-3xl" />
          <p>Google</p>
        </button>
        <button className="btn btn-outline w-full">
          <SiGithub className="text-3xl" />
          <p>Github</p>
        </button>
      </div>
      {/* Login with End */}
      {/* Find us on Start */}
      <div className="border rounded-md text-center p-4">
        <h3 className="text-3xl font-semibold">Find Us On</h3>
        <div className="flex md:flex-col justify-center items-start md:space-y-2 py-2 md:pl-8 md:space-x-0 space-x-3">
          <Link to={"https://www.google.com"}>
            <button className="btn btn-primary"><FaFacebook className="text-3xl" /> Facebook</button>
          </Link>
          <Link to={"https://www.google.com"}>
            <button className="btn btn-primary"><FaTwitter className="text-3xl" /> Twitter</button>
          </Link>
          <Link to={"https://www.google.com"}>
            <button className="btn btn-primary"><FaSquareInstagram className="md:text-3xl text-xl" />Instagram</button>
          </Link>
        </div>
      </div>
      {/* Find us on End */}
      {/* Q Zone Start */}
      <div className="flex flex-col rounded-md space-y-4 border md:p-4 p-10">
        <h3 className="text-3xl font-semibold text-center">Q Zone</h3>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      {/* Q Zone End */}
    </div>
  );
};

export default RightSideNav;
