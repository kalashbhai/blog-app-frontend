import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoCourses, deleteVideoCourse } from "../actions/videoActions";
import { Link } from "react-router-dom";

const ManageVideos = () => {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedVideoCourse, setSelectedVideoCourse] = useState(null);
  const videoCourses = useSelector((state) => state.videoCourses);

  useEffect(() => {
    dispatch(fetchVideoCourses());
  }, [dispatch]);

  const handleDelete = (id) => {
    setIsDeleting(true);
    dispatch(deleteVideoCourse(id)).then(() => {
      setIsDeleting(false);
    });
  };

  return (
    <div>
      <h1>Manage Videos</h1>
      <Link to="/videos/new">Add New Course</Link>
      {isDeleting && <p>Deleting video course...</p>}
      {videoCourses.loading ? (
        <p>Loading video courses...</p>
      ) : videoCourses.error ? (
        <p>{videoCourses.error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {videoCourses.videoCourses.map((course) => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>
                  <button onClick={() => handleDelete(course.id)}>Delete</button>
                  <Link to={`/videos/${course.id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageVideos;
