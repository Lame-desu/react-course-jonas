import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { orderSearch } from "./app/actions";
import Menu from "./pages/Menu";
import { fetchMenu as menuLoader } from "./app/loaders";
import Cart from "./pages/Cart";
import OrderNew from "./pages/OrderNew";
import { orderNew as orderNewAction } from "./app/actions";
import OrderView from "./pages/OrderView";
import { makePriority as priorityAction } from "./app/actions";
import NotFoundPage from "./pages/NotFoundPage";
import GlobalError from "./pages/GlobalError";
import { fetchOrder as orderLoader } from "./app/loaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    action: orderSearch,
    errorElement: <GlobalError />,
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
        errorElement: <GlobalError />,
      },
      { path: "cart", element: <Cart /> },
      {
        path: "order/new",
        element: <OrderNew />,
        action: orderNewAction,
        errorElement: <GlobalError />,
      },
      {
        path: "order/:id",
        action: priorityAction,
        loader: orderLoader,
        element: <OrderView />,
        errorElement: <GlobalError />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
