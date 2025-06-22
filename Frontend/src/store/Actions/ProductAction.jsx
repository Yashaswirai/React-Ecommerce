import axios from "../../API/Axios";
import { toast } from "react-toastify";
import { setProduct } from "../reducers/ProductReducer";

export const addProduct = (product) => async (dispatch) => {
  try {
    const res = await axios.post("/products", product);
    dispatch(loadProducts());
    toast.success("Product Added Successfully");
  } catch (error) {
    toast.error(error.response.data);
  }
};

export const loadProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/products");
    dispatch(setProduct(res.data));
  } catch (error) {
    toast.error(error.response.data);
  }
};

export const updateProduct = (product) => async (dispatch) => {
  try {
    const res = await axios.patch(`/products/${product.id}`, product);
    dispatch(loadProducts());
    toast.success("Product Updated Successfully");
  } catch (error) {
    toast.error(error.response.data);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/products/${id}`);
    dispatch(loadProducts());
    toast.success("Product Deleted Successfully");
  } catch (error) {
    toast.error(error.response.data);
  }
};
