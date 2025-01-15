import { Select } from "antd";
import ButtonGroup from "./ButtonGroup";
import { useMaterial } from "@/store/useMaterial";
import { ValueStatusArr } from "@/types";
import { useState } from "react";
function WeightEditor({
  currentStatus,
  status,
  configKey,
}: {
  currentStatus: number;
  status: ValueStatusArr;
  isShow: boolean;
  configKey: string;
  editCom: (...args: any) => JSX.Element;
}) {
  const store = useMaterial();
  const [state, setState] = useState(status[currentStatus].value);
  function handleChange(value: string) {
    setState(value);
    let index = status.findIndex((item) => item.value === value);
    store.setCurrentStatus(configKey, index);
  }
  return (
    <ButtonGroup title="日期类型" status={status[currentStatus].status}>
      <Select
        style={{ width: 80 }}
        value={state}
        onChange={handleChange}
        options={status.map((item) => {
          return { label: item.status, value: item.value };
        })}
      />
    </ButtonGroup>
  );
}

export default WeightEditor;
