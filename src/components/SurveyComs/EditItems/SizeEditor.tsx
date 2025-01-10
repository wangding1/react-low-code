import { Button } from "antd";
import ButtonGroup from "./ButtonGroup";
import classNames from "classnames";
import { useMaterial } from "@/store/useMaterial";
function PositionEditor({
  currentStatus,
  status,
  configKey,
}: {
  currentStatus: number;
  status: string[];
  isShow: boolean;
  configKey: string;
  editCom: (...args: any) => JSX.Element;
}) {
  const store = useMaterial((state) => state);
  function onclick(value: number) {
    store.setCurrentStatus(configKey, value);
  }
  return (
    <ButtonGroup
      title={configKey === "titleSize" ? "标题尺寸" : "描述尺寸"}
      status={status[currentStatus]}
    >
      <Button.Group>
        <Button
          className={classNames({
            select: currentStatus === 0,
          })}
          onClick={() => onclick(0)}
        >
          <span style={{ fontSize: "22px" }}>A</span>
        </Button>
        <Button
          className={classNames({
            select: currentStatus === 1,
          })}
          onClick={() => onclick(1)}
        >
          <span style={{ fontSize: "20px" }}>A</span>
        </Button>
        <Button
          className={classNames({
            select: currentStatus === 2,
          })}
          onClick={() => onclick(2)}
        >
          <span style={{ fontSize: "18px" }}>A</span>
        </Button>
      </Button.Group>
    </ButtonGroup>
  );
}

export default PositionEditor;
