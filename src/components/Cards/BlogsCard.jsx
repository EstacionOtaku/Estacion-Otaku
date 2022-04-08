import { Link } from "react-router-dom";

const BlogsCard = ({
  blog: { description, title, createdAt, authorName, authorAvatar, cover, id },
}) => {
  return (
    <div className="blog">
      <img className="blog__cover" src={cover} alt="cover" />
      <h3>{title}</h3>
      <p className="blog__description">{description}</p>
      <footer>
        <div className="blog__author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className="blog__link" to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogsCard;
