import axios from "axios";
import {
  FETCH_BLOGS_REQUEST,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_FAILURE,
  DELETE_BLOG_REQUEST,
  DELETE_BLOG_SUCCESS,
  DELETE_BLOG_FAILURE,
  UPDATE_BLOG_STATUS_REQUEST,
  UPDATE_BLOG_STATUS_SUCCESS,
  UPDATE_BLOG_STATUS_FAILURE,
} from "../constants/blogConstants";

export const fetchBlogs = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_BLOGS_REQUEST });

    const { data } = await axios.get("/api/blogs");

    dispatch({ type: FETCH_BLOGS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_BLOGS_FAILURE, payload: error.response.data });
  }
};

export const deleteBlog = (blogId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BLOG_REQUEST });

    const { data } = await axios.delete(`/api/blogs/${blogId}`);

    dispatch({ type: DELETE_BLOG_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_BLOG_FAILURE, payload: error.response.data });
  }
};

export const updateBlogStatus = (blogId, status) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_BLOG_STATUS_REQUEST });

    const { data } = await axios.put(`/api/blogs/${blogId}/status`, {
      status,
    });

    dispatch({ type: UPDATE_BLOG_STATUS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_BLOG_STATUS_FAILURE, payload: error.response.data });
  }
};
