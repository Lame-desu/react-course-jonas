import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { orderSearch } from "./app/actions";
import Menu from "./pages/Menu";
import { fetchMenu as menuLoader } from "./app/loaders";
import Cart from "./pages/Cart";
import OrderNew from "./pages/OrderNew";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    action: orderSearch,
    children: [
      {
        index: true, // default route
        element: <Home />,
      },
      {
        path: "menu",
        id: "menu",
        element: <Menu />,
        loader: menuLoader,
      },
      { path: "cart", element: <Cart /> },
      { path: "orderNew", element: <OrderNew /> },
    ],
  },
]);

export default router;
