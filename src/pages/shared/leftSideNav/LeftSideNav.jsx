import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="border md:m-4 m-6 p-6 space-y-2 rounded-md">
      <h3 className="text-3xl text-center mb-4">All Category</h3>
      {categories.map((category) => (
        <Link to={`/category/${category.id}`} className="block ml-4 text-xl font-semibold hover:text-blue-500" key={category.id}>
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
