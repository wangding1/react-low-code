import { ReactNode, useMemo } from "react";
import style from "./css/Layout.module.scss";
import { Outlet } from "react-router-dom";
import { useMaterial } from "@/store/useMaterial";
import EditPannel from "@/components/SurveyComs/EditItems/EditPannel";
function Layout({ children }: { children: ReactNode }) {
  const store = useMaterial();
  let currentCom = useMemo(() => {
    return store.coms[store.currentMaterialCom];
  }, [store.currentMaterialCom]);
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
      <div className={style.right}>
        <EditPannel com={currentCom} />
      </div>
    </div>
  );
}

export default Layout;
