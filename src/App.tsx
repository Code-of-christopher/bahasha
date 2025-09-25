import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Category from "./pages/Category";
import Give from "./pages/Give";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/give" element={<Give />} />
    </Routes>
  );
}

export default App;
