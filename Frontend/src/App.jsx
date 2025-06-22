import { useEffect } from "react";
import NavBar from "./components/NavBar";
import MainRoute from "./routes/MainRoute";
import { useDispatch } from "react-redux";
import { currentUser } from "./store/Actions/UserAction";
import { loadProducts } from "./store/Actions/ProductAction";

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(currentUser());
    dispatch(loadProducts());
  },[])
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <NavBar/>
      <MainRoute/>
    </div>
  );
};

export default App;
