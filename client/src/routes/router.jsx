import App from "./../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import ShopPage from "../pages/shop/ShopPage";
import Register from "../components/Register";
import ErrorPage from "./../components/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import CategoryPage from "../pages/category/CategoryPage";

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
  {
    path: "/register",
    element: <Register />,
  },
]);
