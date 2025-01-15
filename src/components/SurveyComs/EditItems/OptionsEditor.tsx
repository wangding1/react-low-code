import { useMaterial } from "@/store/useMaterial";
import { StringStatusArr } from "@/types";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, message } from "antd";

function OptionsEditor(props: {
  status: StringStatusArr;
  isShow: boolean;
  configKey: string;
  editCom: (...args: any) => JSX.Element;
  id: string;
}) {
  const store = useMaterial((state) => state);
  const ReactNodes = props.status.map((item, index) => {
    return (
      <div className="flex align-items-center" key={index}>
        <Input
          className="mt-5 mb-5 mr-10"
          style={{ width: "200px" }}
          value={item}
          onChange={(e) => onChange(e, index)}
        />
        <Button
          shape="circle"
          icon={<MinusOutlined />}
          color="danger"
          variant="solid"
          size="small"
          onClick={() => removeOption(index)}
        />
      </div>
    );
  });
  function addOption() {
    store.addOption(props.configKey);
  }
  function removeOption(index: number) {
    if (props.status.length <= 2) {
      message.error("至少需要两个选项");
      return;
    }
    store.removeOption(props.configKey, index);
  }
  function onChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    let value = e.target.value;
    store.setOption(props.configKey, index, value);
  }
  return (
    <div key="id">
      <div className="mb-10">
        <span className="mr-10">题目选项</span>
        <Button
          shape="circle"
          icon={<PlusOutlined />}
          onClick={addOption}
          size="small"
        />
      </div>
      {ReactNodes}
    </div>
  );
}

export default OptionsEditor;
