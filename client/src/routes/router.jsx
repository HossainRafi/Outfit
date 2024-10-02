import App from "./../App";
import Home from "../pages/home/Home";
import ShopPage from "../pages/shop/ShopPage";
import ErrorPage from "./../components/ErrorPage";
import CategoryPage from "../pages/category/CategoryPage";
import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/categories/:categoryName",
        element: <CategoryPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
