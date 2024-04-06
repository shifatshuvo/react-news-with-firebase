import { useParams, useLoaderData } from "react-router-dom";
import Header from "../shared/header/Header";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import NavBar from "../shared/NavBar/NavBar";

const News = () => {
  const { id } = useParams();
  const news = useLoaderData();

  return (
    <div>
      <Header />
      <NavBar />
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-3xl">{news.title}</h2>
          <p>{id}</p>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default News;