import React from "react";
import axios from "../../API/Axios";
import { removeUser, setUser } from "../reducers/UserReducer";
import { toast } from "react-toastify";

export const currentUser = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(setUser(user));
    }
  } catch (error) {
    toast.error(error.response.data);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeUser()); //clearing the user data from the store after logging out.
    toast.success("User Logged Out Successfully");
  } catch (error) {
    toast.error(error.response.data);
  }
};

export const loginUser = (user) => async (dispatch) => {
  try {
    const res = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );
    if (res.data.length) {
      dispatch(setUser(res.data[0]));
      localStorage.setItem("user", JSON.stringify(res.data[0])); //storing the user data in local storage for further use
      toast.success("User Logged In Successfully");
    } else {
      toast.error("Invalid Credentials");
    }
  } catch (error) {
    toast.error(error.response.data);
  }
};

export const registerUser = (user) => async (dispatch) => {
  try {
    const res = await axios.post("/users", user);
    toast.success("User Registered Successfully");
  } catch (error) {
    toast.error(error.response.data);
  }
};

export const updateUser = (user) => async (dispatch) => {
  try {
    const res = await axios.patch(`/users/${user.id}`, user);
    localStorage.setItem("user", JSON.stringify(res.data));
    dispatch(currentUser());
  } catch (error) {
    toast.error(error.response.data);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/users/${id}`);
    localStorage.removeItem("user");
    dispatch(removeUser());
    toast.success("User Deleted Successfully");
  } catch (error) {
    toast.error(error.response.data);
  }
};

export const updateUserCart = (user) => async (dispatch) => {
  try {
    const res = await axios.patch(`/users/${user.id}`, user);
    localStorage.setItem("user", JSON.stringify(res.data));
    dispatch(currentUser());
  } catch (error) {
    toast.error(error.response.data);
  }
};

export const removeItemFromCart = (user, productID) => async (dispatch) => {
  try {
    const updatedUser = {
      ...user,
      cart: user.cart.filter((item) => item.productID != productID),
    };
    const res = await axios.patch(`/users/${user.id}`, updatedUser);
    localStorage.setItem("user", JSON.stringify(res.data));
    dispatch(currentUser());
  } catch (error) {
    toast.error(error.response.data);
  }
};
