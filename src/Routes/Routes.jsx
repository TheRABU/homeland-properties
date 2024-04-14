import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Career from "../Pages/Career";
import BookAppointment from "../Pages/BookAppointment";
import AboutUs from "../Pages/AboutUs";
import ViewDetails from "../Pages/ViewDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/estate-data.json"),
      },
      {
        path: "/details/:id",
        loader: (params) => fetch(`/estate-data/${params.id}.json`),
        element: (
          <PrivateRoutes>
            <ViewDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/book-appointment",
        element: <BookAppointment />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
