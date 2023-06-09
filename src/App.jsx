import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
import ErrorPage from "./Pages/Error";
import Inicio from "./Pages/Inicio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
