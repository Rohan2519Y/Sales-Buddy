import SignIn from "./admin/admin_login/SignIn"
import Dashboard from "./admin/admin_login/Dashboard"
import Home from "./userinterface/screens/Home"
import ProductList from "./userinterface/screens/ProductList";
import {BrowserRouter as Router,Routes,Route} from "react-router";
function App() {
  return (
    <div style={{fontFamily:'Quicksand'}}>
      <Router>
        <Routes>
          <Route element={<SignIn/>} path="/signin"/>
          <Route element={<Dashboard/>} path="/dashboard/*"/>
          <Route element={<ProductList/>} path="/productlist"/>
          <Route element={<Home/>} path="/"/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;