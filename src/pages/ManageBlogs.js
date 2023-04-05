import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs, deleteBlog, updateBlogStatus } from "../actions/blogActions";

const ManageBlogs = () => {
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector((state) => state.blogs);
  const [live, setLive] = useState(true); // filter for live/non-live blogs

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deleteBlog(id));
    }
  };

  const handleStatusChange = (id, status) => {
    if (window.confirm(`Are you sure you want to change this post's status to ${status}?`)) {
      dispatch(updateBlogStatus(id, status));
    }
  };

  const handleFilterChange = (event) => {
    setLive(event.target.value === "true");
  };

  const filteredBlogs = blogs.filter((blog) => blog.live === live);

  return (
    <div>
      <h1>Manage Blogs</h1>
      <div>
        <label htmlFor="status-filter">Filter by Status:</label>
        <select name="status-filter" id="status-filter" onChange={handleFilterChange}>
          <option value={true}>Live</option>
          <option value={false}>Non-Live</option>
        </select>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {filteredBlogs.map((blog) => (
            <div key={blog.id}>
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
              <p>Category: {blog.category}</p>
              <p>Author: {blog.author}</p>
              <p>Status: {blog.live ? "Live" : "Non-Live"}</p>
              <button onClick={() => handleDelete(blog.id)}>Delete</button>
              <button onClick={() => handleStatusChange(blog.id, !blog.live)}>
                {blog.live ? "Mark as Non-Live" : "Mark as Live"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageBlogs;
