import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage";
import BlogPage from "../pages/blog";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
}

export default App;
