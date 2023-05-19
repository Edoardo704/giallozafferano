import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Routes } from "react-router-dom";
import Recipes from "./components/Recipes/Recipes";
import NewRecipes from "./components/RecipesForm/NewRecipes";
import EditRecipes from "./components/RecipesForm/EditRecipes";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import NewCategory from "./components/CategoryForm/NewCategory";
import EditCategory from "./components/CategoryForm/EditCategory";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="recipes" element={<Recipes />}>
              <Route path="edit/:id" element={<EditRecipes />} />
              <Route path="new" element={<NewRecipes />} />
            </Route>
            <Route path="category" element={<Category></Category>}>
              <Route path="edit/:id" element={<EditCategory></EditCategory>}></Route>
              <Route path="new" element={<NewCategory />} />
            </Route>



          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
