import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddProduct from "./pages/AddProduct";
import AllProducts from "./pages/allProducts";
import Header from "./components/Header";
import ProductDetails from "./pages/ProductDetails";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import ContactOwner from "./pages/ContactOwner";

function App() {  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/contactOwner/:ownerId" element={<ContactOwner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
