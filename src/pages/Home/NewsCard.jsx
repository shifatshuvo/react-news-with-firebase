import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import './NewsCard.css';

const NewsCard = ({ news }) => {
  const {
    _id,
    title,
    details,
    image_url,
    thumbnail_url,
    author,
    total_view,
    rating,
    category_id,
    is_trending,
    is_todays_pick,
    others_info,
  } = news;
  return (
    <div className="border rounded-md my-6">
      <div className="">
        {/* author details start */}
        <div className="bg-gray-700 flex justify-between items-center px-4 py-2">
          <div className="flex items-center space-x-4">
            <img className="w-12 rounded-full ring-2" src={author.img} alt="" />
            <div className="">
              <h4 className="text-xl font-bold">{author.name}</h4>
              <p className="text-xs">{author.published_date}</p>
            </div>
          </div>
          <div className="flex space-x-3 text-xl">
            <button className="hover:text-blue-500"><FaRegBookmark /></button>
            <button className="hover:text-blue-500"><IoShareSocial /></button>
          </div>
        </div>
        {/* author details End */}
        <div className="p-4 space-y-2">
          <h2 className="text-2xl">{title}</h2>
          <img className="" src={image_url} alt="" />
          <p className="details text-gray-500">{details}</p>
          <button className="text-blue-500 hover:text-blue-600">reade more</button>
          <hr />
          {/* rating and views start */}
          <div className="flex justify-between">
            <div className="flex items-center text-xl space-x-2">
              <div className="flex text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>{rating.number}</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaEye />
              <p>{total_view}</p>
            </div>
          </div>
          {/* rating and views end */}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
