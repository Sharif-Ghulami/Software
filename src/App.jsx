import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Computer from "./pages/Computer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Computer",
    element: <Computer />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
