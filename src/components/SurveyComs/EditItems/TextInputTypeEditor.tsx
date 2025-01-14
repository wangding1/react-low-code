import { Button } from "antd";
import ButtonGroup from "./ButtonGroup";
import classNames from "classnames";
import { useMaterial } from "@/store/useMaterial";
import { ExceptionOutlined, FileDoneOutlined } from "@ant-design/icons";
function WeightEditor({
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
    <ButtonGroup title="文本类型" status={status[currentStatus]}>
      <Button.Group>
        <Button
          className={classNames({
            select: currentStatus === 0,
          })}
          onClick={() => onclick(0)}
        >
          <ExceptionOutlined />
        </Button>
        <Button
          className={classNames({
            select: currentStatus === 1,
          })}
          onClick={() => onclick(1)}
        >
          <FileDoneOutlined />
        </Button>
      </Button.Group>
    </ButtonGroup>
  );
}

export default WeightEditor;
