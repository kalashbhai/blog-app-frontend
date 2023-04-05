import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { fetchSubscribedVideos } from "../actions/videoActions";

const UserDashboard = () => {
  const [subscribedVideos, setSubscribedVideos] = useState([]);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchSubscribedVideos(auth.user.id)).then((videos) => {
      setSubscribedVideos(videos);
    });
  }, [dispatch, auth.user.id]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <h1>Welcome, {auth.user.name}!</h1>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/profile">View Profile</Link>
        </li>
        <li>
          <Link to="/subscription">Buy Subscription</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
      <h2>Subscribed Videos:</h2>
      {subscribedVideos.length > 0 ? (
        <ul>
          {subscribedVideos.map((video) => (
            <li key={video.id}>
              <Link to={`/videos/${video.id}`}>{video.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No subscribed videos found.</p>
      )}
    </div>
  );
};

export default UserDashboard;
