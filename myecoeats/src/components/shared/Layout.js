import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CartProvider from "../../context/CartContext";

const Layout = () => {
  return (
    <div className="bg-white h-screen flex flex-row">
      <CartProvider>
        <div className="flex flex-col flex-1">
          <Header />
          <div className="flex-1  min-h-0 overflow-auto">
            <Outlet /> {/*  this is dynamic content */}
            <Footer />
          </div>
        </div>
      </CartProvider>
    </div>
  );
};

export default Layout;
