import { createBrowserRouter, redirect } from "react-router-dom";

import { Auth } from "../modules/auth/layout";
import { Dashboard } from "../modules/dashboard/layout";
import { Signup, Signin, Reset } from "../modules/auth/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    loader: async () => {
      //   const token = localStorage.getItem("accessToken");
      const token = false;
      if (token) {
        return null;
      } else {
        return redirect("/signin");
      }
    },
  },
  {
    path: "/",
    element: <Auth />,
    children: [
      { path: "/signin", element: <Signin /> },
      { path: "/signup", element: <Signup /> },
      { path: "/reset", element: <Reset /> },
    ],
  },
  //   {
  //     path: "/",
  //     element: <HomePage />,
  //     errorElement: <ErrorPage />,
  //     loader: async () => {
  //       const token = localStorage.getItem("accessToken");
  //       if (token) {
  //         const res = await fetch("http://localhost:3000/messages", {
  //           method: "GET",
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });
  //         if (res.status === 401) {
  //           return redirect("/login");
  //         }
  //       } else {
  //         return redirect("/login");
  //       }
  //       return null;
  //     },
  //   },
  //   {
  //     path: "/login",
  //     element: <LoginPage />,
  //   },
  //   {
  //     path: "/signup",
  //     element: <RegisterPage />,
  //   },
  //   {
  //     path: "/user",
  //     element: <UserPage />,
  //   },
]);

export default router;
