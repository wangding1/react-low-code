import { Status } from "@/types";
import style from "./css/EditPannel.module.scss";
import React from "react";
function EditPannel({ com }: { com: Status }) {
  let status = com?.status;
  let ReactNodes = [];
  for (const key in status) {
    const item = status[key];
    if (item.isShow) {
      ReactNodes.push(
        <div key={key} className="mb-20">
          {React.createElement(item.editCom, { ...item, configKey: key })}
        </div>
      );
    }
  }
  return <div className={style.editPannelContainer}>{ReactNodes}</div>;
}

export default EditPannel;
