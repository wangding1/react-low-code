import { ColorPicker } from "antd";
import ButtonGroup from "./ButtonGroup";
import { useMaterial } from "@/store/useMaterial";
import type { ColorPickerProps, GetProp } from "antd";
type Color = GetProp<ColorPickerProps, "value">;
function WeightEditor({
  status,
  configKey,
}: {
  status: string;
  isShow: boolean;
  configKey: string;
  editCom: (...args: any) => JSX.Element;
}) {
  const store = useMaterial((state) => state);
  function onclick(_: Color, css: string) {
    store.setTextStatus(configKey, css);
  }
  return (
    <ButtonGroup
      title={configKey === "titleColor" ? "标题颜色" : "描述颜色"}
      status={status}
    >
      <ColorPicker value={status} onChange={onclick} />
    </ButtonGroup>
  );
}

export default WeightEditor;
