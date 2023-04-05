import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link to="/admin/manage-blogs">Manage Blogs</Link>
        </li>
        <li>
          <Link to="/admin/manage-categories">Manage Categories</Link>
        </li>
        <li>
          <Link to="/admin/manage-users">Manage Users</Link>
        </li>
        <li>
          <Link to="/admin/manage-videos">Manage Videos</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
