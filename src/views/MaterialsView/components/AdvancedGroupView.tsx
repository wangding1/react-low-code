import { NavLink } from "react-router-dom";
import Layout from "./Layout";
function SelectGroupView() {
  return (
    <Layout>
      <NavLink to="/rate-score" className="link-item mb-15">
        评价/打分
      </NavLink>
      <NavLink to="/date-time" className="link-item mb-15">
        日期/时间
      </NavLink>
    </Layout>
  );
}

export default SelectGroupView;
