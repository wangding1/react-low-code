import MaterialsHeader from "@/components/SurveyComs/Common/MaterialsHeader";
import { Radio } from "antd";

function SingleSelect() {
  function emitAnswer() {}
  return (
    <div>
      <MaterialsHeader></MaterialsHeader>
      <Radio.Group onChange={emitAnswer}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
    </div>
  );
}

export default SingleSelect;
