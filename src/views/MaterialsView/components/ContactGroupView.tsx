import { NavLink } from "react-router-dom";
import Layout from "./Layout";
function SelectGroupView() {
  return (
    <Layout>
      <NavLink to="/personal-info-tel" className="link-item mb-15">
        手机
      </NavLink>
      <NavLink to="/personal-info-wechat" className="link-item mb-15">
        微信号
      </NavLink>
      <NavLink to="/personal-info-qq" className="link-item mb-15">
        QQ号
      </NavLink>
      <NavLink to="/personal-info-email" className="link-item mb-15">
        邮箱
      </NavLink>
      <NavLink to="/personal-info-address" className="link-item mb-15">
        地址
      </NavLink>
    </Layout>
  );
}

export default SelectGroupView;
