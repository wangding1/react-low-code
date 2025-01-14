import { useMaterial } from "@/store/useMaterial";
import { PicTitleDescStatusArr } from "@/types";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Input, message, Modal } from "antd";
import style from "./css/PicOptionsEditor.module.scss";

function OptionsEditor(props: {
  status: PicTitleDescStatusArr;
  isShow: boolean;
  configKey: string;
  editCom: (...args: any) => JSX.Element;
  id: string;
}) {
  const store = useMaterial((state) => state);
  const ReactNodes = props.status.map((item, index) => {
    return (
      <div key={index}>
        <div className="flex align-items-center mt-top mb-10">
          <span>选项{index + 1}</span>
          <Button
            shape="circle"
            icon={<MinusOutlined />}
            color="danger"
            variant="solid"
            size="small"
            className="ml-5"
            onClick={() => removeOption(index)}
          />
        </div>
        <div className="mb-5">
          {item.value ? (
            <>
              <span className={style.title + " mr-5"}>已上传图片</span>
              <Button
                color="primary"
                variant="link"
                onClick={() => deletePic(index)}
              >
                删除图片
              </Button>
            </>
          ) : (
            <span className={style.title}>未上传图片</span>
          )}
        </div>
        <Input
          className="mb-5"
          value={item.picTitle}
          placeholder="标题"
          onChange={(e) => onChange(e, index, "picTitle", item)}
        />
        <Input.TextArea
          className="mb-5"
          value={item.picDesc}
          placeholder="请输入题目说明（选填）"
          maxLength={24}
          onChange={(e) => onChange(e, index, "picDesc", item)}
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
  function deletePic(index: number) {
    Modal.confirm({
      content: "是否确认删除已上传的图片？",
      title: "警告",
      cancelText: "取消",
      okText: "确认",
      onOk() {
        store.setPicLinkByIndex("options", {
          link: "",
          index,
        });
        message.success("删除成功");
      },
      onCancel() {
        message.info("取消删除");
      },
    });
  }
  function onChange(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    type: string,
    item: PicTitleDescStatusArr[0]
  ) {
    let value = e.target.value;
    store.setOption(props.configKey, index, {
      ...item,
      [type]: value,
    });
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
