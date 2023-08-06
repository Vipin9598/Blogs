import { NavLink } from "react-router-dom";

function Card({ post }) {
  return (
    <div className="card">
      <div>
        <p className="title">
          {" "}
          <NavLink to={`/blog/${post.id}`}>
            <span>{post.title}</span>
          </NavLink>
        </p>
        <p className="detail">
          By{" "}
          <span>
            {post.author} on{" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
              <span>{post.category}</span>
            </NavLink>
          </span>
        </p>
      </div>
      <p className="detail">Posted on {post.date}</p>
      <p className="detail">{post.content}</p>
      <div className="tag">
        {post.tags.map((tag, index) => {
          return (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
              <span>{`#${tag}`}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
