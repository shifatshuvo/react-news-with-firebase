import NavBar from "../shared/NavBar/NavBar";
import Header from "../shared/header/Header";
import LeftSideNav from "../shared/leftSideNav/LeftSideNav";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
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
        {/* News Content div Start */}
        <div className="md:col-span-2">
          {
            news.map(aNews => <NewsCard key={aNews._id} news={aNews} />)
          }
        </div>
        {/* News Content div End */}
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