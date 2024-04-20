import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: "/login",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <LoginPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
