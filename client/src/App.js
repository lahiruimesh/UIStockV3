import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddProduct from "./pages/AddProduct";
import AllProducts from "./pages/allProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/allProducts" element={<AllProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
