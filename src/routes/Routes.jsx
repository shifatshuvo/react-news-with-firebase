import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import News from "../pages/News/News";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/news.json')
      },
      {
        path: '/news/:id',
        element: <PrivateRoute><News /></PrivateRoute>,
        loader: () => fetch('/news.json')
      },
      {
        path: '/sign-in',
        element: <SignIn />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      }
    ]
  }
]);

export default router;