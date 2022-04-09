import { useState } from "react";
import { blogList } from "../../data/BlogsData";
import BlogsCard from "./BlogsCard";

const BlogsCards = () => {
  const [blogs, setBlogs] = useState(blogList);

  return (
    <div className="blog__list-wrap">
      {blogs.map((blogs, index) => (
        <BlogsCard key={index} blogs={blogs} />
      ))}
    </div>
  );
};

export default BlogsCards;
