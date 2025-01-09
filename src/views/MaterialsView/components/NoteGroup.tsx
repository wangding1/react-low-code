import { NavLink } from "react-router-dom";
import Layout from "./Layout";
function SelectGroupView() {
  return (
    <Layout>
      <NavLink to="/text-note" className="link-item mb-15">
        备注说明
      </NavLink>
    </Layout>
  );
}

export default SelectGroupView;
