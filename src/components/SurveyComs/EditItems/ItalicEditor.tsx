import { Button } from "antd";
import ButtonGroup from "./ButtonGroup";
import classNames from "classnames";
import { useMaterial } from "@/store/useMaterial";
import { StringStatusArr } from "@/types";
function ItalicEditor({
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
    store.setCurrentStatus(configKey, value);
  }
  return (
    <ButtonGroup
      title={configKey === "titleItalic" ? "标题斜体" : "描述斜体"}
      status={status[currentStatus]}
    >
      <Button.Group>
        <Button
          className={classNames({
            select: currentStatus === 0,
          })}
          onClick={() => onclick(0)}
        >
          <span style={{ fontStyle: "italic" }}>I</span>
        </Button>
        <Button
          className={classNames({
            select: currentStatus === 1,
          })}
          onClick={() => onclick(1)}
        >
          <span>I</span>
        </Button>
      </Button.Group>
    </ButtonGroup>
  );
}

export default ItalicEditor;
