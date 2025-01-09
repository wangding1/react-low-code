import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import router from "@/router/index";

function App() {
  return (
    <ConfigProvider>
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  );
}

export default App;
