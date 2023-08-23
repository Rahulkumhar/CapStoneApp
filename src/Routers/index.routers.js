import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/home";
import { ErrorPage } from "../Components/ErrorPage/index.errorPage";
import Shop from "../Components/Shop/shop";
import Header from "../Components/Navigation/navigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
  //   {
  //     path: "/home",
  //     element: <Home />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "/shop",
  //     element: <Shop />,
  //     errorElement: <ErrorPage />,
  //   },
]);

export default router;
