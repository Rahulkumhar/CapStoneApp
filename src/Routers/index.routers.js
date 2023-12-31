import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/home";
import { ErrorPage } from "../Components/ErrorPage/index.errorPage";
import Shop from "../Components/Shop/shop";
import SignIn from "../Components/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/shop",
        element: <Shop />,
      },
      // {
      //   path: "/signIn",
      //   element: <SignIn />,
      // },
    ],
  },
  //   {
  //     path: "/home",
  //     element: <Home />,
  //     errorElement: <ErrorPage />,
  //   },
  {
    path: "/signIn",
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/shop",
  //   element: <Shop />,
  // },
]);

export default router;
