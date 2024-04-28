import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Laptop } from "./pages/shop/Laptop";
import { Laptop2 } from "./pages/shop/Laptop2";
import { Phone } from "./pages/shop/Phone";
import { Phone2 } from "./pages/shop/Phone2";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { ProductDisplay } from "./pages/shop/ProductShow";
import { Footer } from "./components/footer";
import { Home } from "./pages/shop/Home";
import { Audio } from "./pages/shop/Audio";
import { Extra } from "./pages/shop/Extra";
import { NotFound } from "./pages/shop/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";




function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <ScrollToTop></ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>

            <Route path="/laptops/pg1">
              <Route index element={<Laptop></Laptop>}></Route>
              <Route
                path=":id"
                element={<ProductDisplay></ProductDisplay>}
              ></Route>
            </Route>

            <Route path="/laptops/pg2">
              <Route index element={<Laptop2></Laptop2>}></Route>
              <Route
                path=":id"
                element={<ProductDisplay></ProductDisplay>}
              ></Route>
            </Route>

            <Route path="/phones/pg1">
              <Route index element={<Phone></Phone>}></Route>
              <Route
                path=":id"
                element={<ProductDisplay></ProductDisplay>}
              ></Route>
            </Route>

            <Route path="/phones/pg2">
              <Route index element={<Phone2></Phone2>}></Route>
              <Route
                path=":id"
                element={<ProductDisplay></ProductDisplay>}
              ></Route>
            </Route>

            <Route path="/Audio">
              <Route index element={<Audio></Audio>}></Route>
              <Route
                path=":id"
                element={<ProductDisplay></ProductDisplay>}
              ></Route>
            </Route>

            <Route path="/Accessories">
              <Route index element={<Extra></Extra>}></Route>
              <Route
                path=":id"
                element={<ProductDisplay></ProductDisplay>}
              ></Route>
            </Route>

            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />

           

            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
          <Footer></Footer>
        </Router>
        
      </ShopContextProvider>
    </div>
  );
}

export default App;
