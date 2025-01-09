import { ReactNode, useMemo } from "react";
import style from "./css/Layout.module.scss";
import { Outlet } from "react-router-dom";
import { useMaterial } from "@/store/useMaterial";
function Layout({ children }: { children: ReactNode }) {
  const store = useMaterial();

  let currentCom = useMemo(() => {
    return store.coms[store.currentCom];
  }, [store.currentCom]);
  return (
    <div className={style.layoutContainer + " flex"}>
      <div className={style.left + " flex wrap space-between"}>{children}</div>
      <div className={style.center}>
        <Outlet
          context={{
            serialNum: 1,
            status: store.coms[store.currentMaterialCom].status,
          }}
        ></Outlet>
      </div>
      <div className={style.right}></div>
    </div>
  );
}

export default Layout;
