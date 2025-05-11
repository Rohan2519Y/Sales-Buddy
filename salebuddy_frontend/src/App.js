import ServicesInterface from "./admin/services/ServicesInterface";
import BrandInterface from "./admin/brands/BrandInterface";
import ProductInterface from "./admin/products/ProductInterface";
import ProductColorInterface from "./admin/productColors/ProductColorInterface";
import ProductVarientInterface from "./admin/productVarient/ProductVarientInterface";
import ProductDetailsInterface from "./admin/productdetails/ProductDetailsInterface";
import MorePictureInterface from "./admin/morepictures/MorePictureInterface";
import DisplayAllServices from "./admin/services/DisplayAllServices";
import DisplayAllProducts from "./admin/products/DisplayAllProducts";
import DisplayAllBrands from "./admin/brands/DisplayAllBrands";
import DisplayAllProductColor from "./admin/productColors/DisplayAllProductColor";
import DisplayAllProductVarient from "./admin/productVarient/DisplayAllProductVarient";
import DisplayAllProductDetails from "./admin/productdetails/DisplayAllProductDetails";
import DisplayAllMorePicture from "./admin/morepictures/DisplayAllMorePicture";
import SignIn from "./admin/admin_login/SignIn"
import Dashboard from "./admin/admin_login/Dashboard"
import {BrowserRouter as Router,Routes,Route} from "react-router";
function App() {
  return (
    <div style={{fontFamily:'Quicksand'}}>
      <Router>
        <Routes>
          <Route element={<ServicesInterface/>} path="/serviceinterface"/>
          <Route element={<BrandInterface/>} path="/brandinterface"/>
          <Route element={<ProductInterface/>} path="/productinterface"/>
          <Route element={<ProductColorInterface/>} path="/productcolorinterface"/>
          <Route element={<ProductVarientInterface/>} path="/productvarientinterface"/>
          <Route element={<ProductDetailsInterface/>} path="/productdetailsinterface"/>
          <Route element={<MorePictureInterface/>} path="/morepictureinterface"/>
          <Route element={<DisplayAllServices/>} path="/displayallservices"/>
          <Route element={<DisplayAllProducts/>} path="/displayallproducts"/>
          <Route element={<DisplayAllBrands/>} path="/displayallbrands"/>
          <Route element={<DisplayAllProductColor/>} path="/displayallproductcolor"/>
          <Route element={<DisplayAllProductVarient/>} path="/displayallproductvarient"/>
          <Route element={<DisplayAllProductDetails/>} path="/displayallproductdetails"/>
          <Route element={<DisplayAllMorePicture/>} path="/displayallmorepicture"/>
          <Route element={<SignIn/>} path="/signin"/>
          <Route element={<Dashboard/>} path="/dashboard"/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;