import { AlignLeftOutlined, AlignCenterOutlined } from "@ant-design/icons";
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
    <ButtonGroup title="居中设置" status={status[currentStatus]}>
      <Button.Group>
        <Button
          className={classNames({
            select: currentStatus === 0,
          })}
          onClick={() => onclick(0)}
        >
          <AlignLeftOutlined />
        </Button>
        <Button
          className={classNames({
            select: currentStatus === 1,
          })}
          onClick={() => onclick(1)}
        >
          <AlignCenterOutlined />
        </Button>
      </Button.Group>
    </ButtonGroup>
  );
}

export default PositionEditor;
