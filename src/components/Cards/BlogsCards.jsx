import { useState } from "react";
import { blogList } from "../../data/BlogsData";
import BlogsCard from "./BlogsCard";

const BlogsCards = () => {
  const [blogs, setBlogs] = useState(blogList);

  return (
    <div className="blog__list-wrap">
      {blogs.map((blog) => (
        <BlogsCard blog={blog} />
      ))}
    </div>
  );
};

export default BlogsCards;
