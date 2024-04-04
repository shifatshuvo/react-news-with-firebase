import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true} speed={60}>
        <div className="flex items-center space-x-5 mx-4">
          <Link to="/">
            <p>
              I can be a React component, multiple React components, or just
              some text.
            </p>
          </Link>
          <Link className="text-blue-500" to="/">
            <p>
              I can be a React component, multiple React components, or just
              some text.......
            </p>
          </Link>
          <Link className="text-blue-500" to="/">
            <p>I can be a React component...</p>
          </Link>
        </div>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
