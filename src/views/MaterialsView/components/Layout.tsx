import { ReactNode } from "react";
import style from "./css/Layout.module.scss";
import { Outlet } from "react-router-dom";
function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={style.layoutContainer + " flex"}>
      <div className={style.left + " flex wrap space-between"}>{children}</div>
      <div className={style.center}>
        <Outlet
          context={{
            serialNum: 1,
            status: {},
          }}
        ></Outlet>
      </div>
      <div className={style.right}></div>
    </div>
  );
}

export default Layout;
