import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import RecipeView from "./RecipeView";
import Searched from "./Searched";
import CategoryView from "./CategoryView";

function Views() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeView />} />
        <Route path="/recipes/:id" element={<RecipeView />} />
        <Route path="/category/:categories" element={<CategoryView />} />
        <Route path="/searched/:searched" element={<Searched />} />
      </Routes>
    </>
  );
}

export default Views;
