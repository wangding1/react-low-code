import { Input } from "antd";
import { useMaterial } from "@/store/useMaterial";

function TitleEditor(props: {
  status: string;
  isShow: boolean;
  configKey: string;
  editCom: (...args: any) => JSX.Element;
  id: string;
}) {
  const setTextStatus = useMaterial((state) => state.setTextStatus);
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setTextStatus(props.configKey, value);
  }
  return (
    <div key="id">
      <div className="mb-10">标题内容</div>
      <Input
        placeholder="请输入题目标题"
        onChange={onChange}
        value={props.status}
      />
    </div>
  );
}

export default TitleEditor;
