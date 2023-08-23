import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/home.jsx";
import Shop from "./Components/Shop/shop.jsx";
import NavBarMain from "./Components/NavBarMain/navBarMain.js";
import SignIn from "./Components/SignIn/SignIn.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="shop" element={<Shop />} />
      </Route>
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  );
};

export default App;
