import React from "react";
import { Link } from "react-router-dom";

const ModeratorDashboard = () => {
  return (
    <div>
      <h1>Moderator Dashboard</h1>
      <ul>
        <li>
          <Link to="/moderator/blogs">Manage Blogs</Link>
        </li>
        <li>
          <Link to="/moderator/comments">Manage Comments</Link>
        </li>
        <li>
          <Link to="/moderator/reports">View Reports</Link>
        </li>
      </ul>
    </div>
  );
};

export default ModeratorDashboard;
