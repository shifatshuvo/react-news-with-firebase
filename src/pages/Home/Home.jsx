import NavBar from "../shared/NavBar/NavBar";
import Header from "../shared/header/Header";
import LeftSideNav from "../shared/leftSideNav/LeftSideNav";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header />
      <BreakingNews />
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* left side nav Start */}
        <div>
          <LeftSideNav />
        </div>
        {/* left side nav End */}
        {/* Middle Content div Start */}
        <div className="md:col-span-2">
          <h3 className="text-3xl">News Coming Soon..</h3>
        </div>
        {/* Middle Content div End */}
        {/* Right side nav Start */}
        <div>
          <RightSideNav />
        </div>
        {/* Right side nav End */}
      </div>
    </div>
  );
};

export default Home;