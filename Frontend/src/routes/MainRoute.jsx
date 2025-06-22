import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Products from "../pages/Products";
import Register from "../pages/Register";
import CreateProduct from "../pages/Admin/CreateProduct";
import ProductDetail from "../pages/ProductDetail";
import AuthWrapper from "./AuthWrapper";
import { useSelector } from "react-redux";
import UserProfile from "../pages/User/UserProfile";
import Cart from "../pages/User/Cart";

const MainRoute = () => {
  const user = useSelector((state) => state.user.user);
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {!user ? <Route path="/login" element={<Login />} /> : <Route path="/login" element={<Navigate to="/products" />} />}
        {!user ? <Route path="/register" element={<Register />} /> : <Route path="/login" element={<Navigate to="/products" />} />}

        <Route path="/admin/create-product" element={<AuthWrapper><CreateProduct /></AuthWrapper>} />
        <Route path="/product/:id" element={<AuthWrapper><ProductDetail /></AuthWrapper>} />
        <Route path="/user/profile" element={<AuthWrapper><UserProfile /></AuthWrapper>} />
        <Route path="/user/cart" element={<AuthWrapper><Cart /></AuthWrapper>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
};

export default MainRoute;
