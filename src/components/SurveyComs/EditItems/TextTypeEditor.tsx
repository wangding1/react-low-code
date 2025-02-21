import { Button } from "antd";
import ButtonGroup from "./ButtonGroup";
import classNames from "classnames";
import { useMaterial } from "@/store/useMaterial";
import { ExceptionOutlined, FileDoneOutlined } from "@ant-design/icons";
import { StringStatusArr } from "@/types";
function WeightEditor({
  currentStatus,
  status,
  configKey,
}: {
  currentStatus: number;
  status: StringStatusArr;
  isShow: boolean;
  configKey: string;
  editCom: (...args: any) => JSX.Element;
}) {
  const store = useMaterial((state) => state);
  function onclick(value: number) {
    store.setType(configKey, value, true);
  }
  return (
    <ButtonGroup title="说明类型" status={status[currentStatus]}>
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
