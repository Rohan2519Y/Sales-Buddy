import SignIn from "./admin/admin_login/SignIn"
import Dashboard from "./admin/admin_login/Dashboard"
import Home from "./userinterface/screens/Home"
import ProductList from "./userinterface/screens/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import MainProductInfoComponent from "./userinterface/screens/MainProductInfoComponent";
import Cart from "./userinterface/screens/Cart";
import UserLogin from "./userinterface/components/user/UserLogin"
import OTPComponent from "./userinterface/components/user/OTPComponent";
import Profile from "./userinterface/screens/Profile";
import Checkout from "./userinterface/screens/Checkout"
function App() {
  return (
    <div style={{ fontFamily: 'Quicksand' }}>
      <Router>
        <Routes>
          <Route element={<SignIn />} path="/signin" />
          <Route element={<Dashboard />} path="/dashboard/*" />
          <Route element={<ProductList />} path="/productlist" />
          <Route element={<MainProductInfoComponent />} path="/mainproductinfocomponent/:productdetailsid/:productid" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<Home />} path="/" />
          <Route element={<Checkout />} path="/checkout" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;