import { LeftOutlined } from "@ant-design/icons";
import { Button, Avatar } from "antd";
import style from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  function goHome() {
    navigate("/");
  }
  return (
    <div>
      <div
        className={
          style.container + " flex self-start align-items-center border-box"
        }
      >
        <div
          className={
            style.left + " flex justify-content-center align-items-center"
          }
        >
          <Button
            icon={<LeftOutlined />}
            shape="circle"
            size="small"
            onClick={goHome}
          ></Button>
        </div>
        <div
          className={
            style.center + " flex align-items-center space-between pl-15 pr-15"
          }
        ></div>
        <div
          className={
            style.right + " flex justify-content-center align-items-center"
          }
        >
          <Avatar
            size={30}
            src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
