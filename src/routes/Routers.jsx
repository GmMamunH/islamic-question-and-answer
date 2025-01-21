import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/home/Home";
import { NotFound } from "../pages/not-found/NotFound";
import { ImanAkayed } from "../pages/iman-akayed/ImanAkayed";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "iman-akayed", element: <ImanAkayed /> },
      
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
