import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home.js";
import Register from "./views/Register.js";
import Login from "./views/Login.js";
import Fav from "./views/Fav.js";
import Nav from "./components/Nav.js";
import Nothing2see from "./views/Nothing2see";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>APP js Container</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="fav" element={<Fav />} />
        <Route path="*" element={<Nothing2see />} />
      </Routes>
    </div>
  );
}
export default App;
