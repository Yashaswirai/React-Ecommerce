import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { useSelector } from "react-redux";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Products = lazy(() => import("../pages/Products"));
const Register = lazy(() => import("../pages/Register"));
const CreateProduct = lazy(() => import("../pages/Admin/CreateProduct"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const AuthWrapper = lazy(() => import("./AuthWrapper"));
const UserProfile = lazy(() => import("../pages/User/UserProfile"));
const Cart = lazy(() => import("../pages/User/Cart"));


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
