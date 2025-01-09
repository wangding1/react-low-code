import { NavLink } from "react-router-dom";
import Layout from "./Layout";
function SelectGroupView() {
  return (
    <Layout>
      <NavLink to="/single-select" className="link-item mb-15">
        单选题
      </NavLink>
      <NavLink to="/multi-select" className="link-item mb-15">
        多选题
      </NavLink>
      <NavLink to="/option-select" className="link-item mb-15">
        下拉选择题
      </NavLink>
      <NavLink to="/single-pic-select" className="link-item mb-15">
        图片单选题
      </NavLink>
      <NavLink to="/multi-pic-select" className="link-item mb-15">
        图片多选题
      </NavLink>
    </Layout>
  );
}

export default SelectGroupView;
