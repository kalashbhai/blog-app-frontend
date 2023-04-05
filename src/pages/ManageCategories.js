import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios.get("/api/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/categories", { name: categoryName })
      .then((response) => {
        setSuccessMessage("Category created successfully.");
        setErrorMessage("");
        setCategoryName("");
        setCategories([...categories, response.data]);
      })
      .catch((error) => {
        setErrorMessage("Error creating category.");
        setSuccessMessage("");
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`/api/categories/${id}`)
      .then((response) => {
        setSuccessMessage("Category deleted successfully.");
        setErrorMessage("");
        setCategories(categories.filter((c) => c._id !== id));
      })
      .catch((error) => {
        setErrorMessage("Error deleting category.");
        setSuccessMessage("");
      });
  };

  return (
    <div className="container my-5">
      <h2>Manage Categories</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="categoryName">Category Name</label>
              <input
                type="text"
                className="form-control"
                id="categoryName"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Create Category
            </button>
          </form>
          {successMessage && (
            <div className="alert alert-success my-3">{successMessage}</div>
          )}
          {errorMessage && (
            <div className="alert alert-danger my-3">{errorMessage}</div>
          )}
        </div>
        <div className="col-md-6">
          <h3>All Categories</h3>
          <ul className="list-group">
            {categories.map((category) => (
              <li key={category._id} className="list-group-item">
                <Link to={`/category/${category._id}`}>{category.name}</Link>
                <button
                  type="button"
                  className="btn btn-danger float-right"
                  onClick={() => handleDelete(category._id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManageCategories;
