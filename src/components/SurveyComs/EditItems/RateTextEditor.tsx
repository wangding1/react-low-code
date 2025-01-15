import { Button, Input, Switch } from "antd";
import classNames from "classnames";
import { useMaterial } from "@/store/useMaterial";
import { StringStatusArr } from "@/types";
function PositionEditor({
  currentStatus,
  status,
  configKey,
  isUse,
}: {
  currentStatus: number;
  status: StringStatusArr;
  isShow: boolean;
  isUse: boolean;
  configKey: string;
  editCom: (...args: any) => JSX.Element;
  id: string;
}) {
  const store = useMaterial();

  function isUseChange(value: boolean) {
    store.setUse(configKey, value);
  }
  function onChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    const value = e.target.value;
    store.setOption(configKey, index, value);
  }
  return (
    <div>
      <div className="flex align-items-center mb-10">
        <div className="mr-10">辅助文字</div>
        <Switch value={isUse} onChange={isUseChange} />
      </div>
      {isUse &&
        status.map((item, index) => {
          return (
            <Input
              className="mt-5"
              placeholder="请输入辅助文字"
              value={item}
              onChange={(e) => onChange(e, index)}
            />
          );
        })}
    </div>
  );
}

export default PositionEditor;
