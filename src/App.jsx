import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Mobile from "./home/Home";
import Game from "./home/Game ";
import Firmware from "./home/Home";
import Home from "./home/Home";
import ChildPage from "./pages/Child";
import ComputerPage from "./pages/Computer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Computer",
    element: <ComputerPage />,
  },
  {
    path: "/Game",
    element: <Game />,
  },
  {
    path: "/Mobile",
    element: <Mobile />,
  },
  {
    path: "/Child",
    element: <ChildPage />,
  },
  {
    path: "/Frimware",
    element: <Firmware />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
