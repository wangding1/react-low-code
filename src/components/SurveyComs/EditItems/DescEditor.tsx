import { Input } from "antd";
import { useMaterial } from "@/store/useMaterial";

function DescEditor(props: {
  status: string;
  isShow: boolean;
  configKey: string;
  editCom: (...args: any) => JSX.Element;
  id: string;
}) {
  const setTextStatus = useMaterial((state) => state.setTextStatus);
  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    setTextStatus(props.configKey, value);
  }
  return (
    <div key="id">
      <div className="mb-10">描述内容</div>
      <Input.TextArea
        placeholder="请输入题目说明（选填）"
        onChange={onChange}
        value={props.status}
        rows={4}
      />
    </div>
  );
}

export default DescEditor;
