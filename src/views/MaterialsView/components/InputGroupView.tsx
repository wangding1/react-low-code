import { NavLink } from "react-router-dom";
import Layout from "./Layout";
function SelectGroupView() {
  return (
    <Layout>
      <NavLink to="/text-input" className="link-item mb-15">
        文本输入
      </NavLink>
    </Layout>
  );
}

export default SelectGroupView;
