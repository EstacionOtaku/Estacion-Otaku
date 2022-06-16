const BlogsCard = ({ blogs }) => {
  const { description, title, createdAt, authorName, authorAvatar, cover, id } =
    blogs;
  console.log(blogs);
  return (
    <div className="blog">
      <img className="blog__cover" src={cover} alt="cover" />
      <h3 className="blog__title">{title}</h3>
      <p className="blog__description">{description}</p>
      <footer>
        <div className="blog__author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p className="blog__date">{createdAt}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogsCard;
