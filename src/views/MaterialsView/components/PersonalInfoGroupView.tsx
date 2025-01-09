import { NavLink } from "react-router-dom";
import Layout from "./Layout";
function SelectGroupView() {
  return (
    <Layout>
      <NavLink to="/personal-info-name" className="link-item mb-15">
        姓名
      </NavLink>
      <NavLink to="/personal-info-id" className="link-item mb-15">
        身份证
      </NavLink>
      <NavLink to="/personal-info-birth" className="link-item mb-15">
        出生日期
      </NavLink>
      <NavLink to="/personal-info-gender" className="link-item mb-15">
        性别
      </NavLink>
      <NavLink to="/personal-info-age" className="link-item mb-15">
        年龄
      </NavLink>
      <NavLink to="/personal-info-education" className="link-item mb-15">
        学历
      </NavLink>
      <NavLink to="/personal-info-collage" className="link-item mb-15">
        大学
      </NavLink>
      <NavLink to="/personal-info-major" className="link-item mb-15">
        专业
      </NavLink>
      <NavLink to="/personal-info-industry" className="link-item mb-15">
        行业
      </NavLink>
      <NavLink to="/personal-info-career" className="link-item mb-15">
        职业
      </NavLink>
      <NavLink to="/personal-info-company" className="link-item mb-15">
        公司
      </NavLink>
      <NavLink to="/personal-info-position" className="link-item mb-15">
        职位
      </NavLink>
    </Layout>
  );
}

export default SelectGroupView;
