import "./App.css";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Shop from "./Components/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopContextProvider from "./context/Shopcontext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Shop />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
