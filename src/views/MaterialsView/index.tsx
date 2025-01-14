import Header from "@/components/Common/Header";
import {
  CheckOutlined,
  ContainerOutlined,
  EditOutlined,
  FileSyncOutlined,
  MessageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import style from "./index.module.scss";
import { NavLink, Outlet } from "react-router-dom";
function MaterialsView() {
  return (
    <>
      <Header />
      <div>
        <h1 className={style.h1 + " font-weight-100 text-center m0 p0"}>
          组件市场
        </h1>
        <div className={style.container + " mc flex"}>
          <nav className={style.category + " mc"}>
            <NavLink
              to="/single-select"
              className={style.categoryItem + " " + style.categoryItem1}
            >
              <CheckOutlined />
              <div>选择</div>
            </NavLink>
            <NavLink
              to="/text-input"
              className={style.categoryItem + " " + style.categoryItem2}
            >
              <EditOutlined />
              <div>文本输入</div>
            </NavLink>
            <NavLink
              to="/rate-score"
              className={style.categoryItem + " " + style.categoryItem3}
            >
              <FileSyncOutlined />
              <div>高级题型</div>
            </NavLink>
            <NavLink
              to="/text-note"
              className={style.categoryItem + " " + style.categoryItem4}
            >
              <ContainerOutlined />
              <div>备注说明</div>
            </NavLink>
            <NavLink
              to="/personal-info-name"
              className={style.categoryItem + " " + style.categoryItem1}
            >
              <UserOutlined />
              <div>个人信息</div>
            </NavLink>
            <NavLink
              to="/personal-info-tel"
              className={style.categoryItem + " " + style.categoryItem2}
            >
              <MessageOutlined />
              <div>联系方式</div>
            </NavLink>
          </nav>
          <div className={style.coms}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default MaterialsView;
