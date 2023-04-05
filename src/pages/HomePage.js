import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import VideoCard from '../components/VideoCard';
import Pagination from '../components/Pagination';

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(5);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const res = await axios.get('/api/blogs');
      setBlogs(res.data);
      setLoading(false);
    };

    const fetchVideos = async () => {
      setLoading(true);
      const res = await axios.get('/api/videos');
      setVideos(res.data);
      setLoading(false);
    };

    fetchBlogs();
    fetchVideos();
  }, []);

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <h4>Categories</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/category/1">Category 1</Link>
            </li>
            <li className="list-group-item">
              <Link to="/category/2">Category 2</Link>
            </li>
            <li className="list-group-item">
              <Link to="/category/3">Category 3</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          <h2>Recent Blogs</h2>
          {loading ? (
            <Loader />
          ) : (
            <>
              {currentBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
              <Pagination
                blogsPerPage={blogsPerPage}
                totalBlogs={blogs.length}
                paginate={paginate} />
            </>
          )}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-3">
          <h4>Video Courses</h4>
          {loading ? (
            <Loader />
          ) : (
            <>
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </>
          )}
        </div>
        <div className="col-md-9">
          <h2>Welcome to Our Blogging App</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in
            libero sapien. Nulla eleifend nulla vel felis posuere vestibulum.
            Vivamus vitae dolor enim. Praesent consequat vehicula arcu at
            iaculis.
          </p>
          <p>
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
            <Link to="/register" className="btn btn-success ml-3">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
