//react路由
import { createBrowserRouter } from "react-router-dom";
import HomeView from "../views/HomeView";

const routes = [
  {
    path: "/",
    element: <HomeView />,
  },
];
export default createBrowserRouter(routes);
