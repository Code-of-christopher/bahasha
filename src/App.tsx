import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Category from "./pages/Category";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  );
}

export default App;
