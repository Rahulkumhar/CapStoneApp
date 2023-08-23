import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/home.jsx";
import Shop from "./Components/Shop/shop.jsx";
import Navigation from "./Components/Navigation/navigation.js";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />{" "}
      </Route>
    </Routes>
  );
};

export default App;
