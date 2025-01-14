import { useEffect, useState } from "react";
import style from "./css/PicItem.module.scss";
import { GetProp, message, Upload, UploadProps } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useMaterial } from "@/store/useMaterial";

function PicItem(props: {
  picTitle: string;
  picDesc: string;
  value: string;
  index: number;
}) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const store = useMaterial();

  useEffect(() => {
    if (props.value) {
      getImageUrl(props.value);
    } else {
      setImageUrl("");
    }
  }, [props.value]);

  async function getImageUrl(newVal: string) {
    const response = await fetch(newVal);
    const blob = await response.blob();
    const file = new File([blob], "filename.jpg", { type: blob.type });
    setImageUrl(URL.createObjectURL(file));
  }

  type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

  const beforeUpload = (file: FileType) => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("上传图片不能超过2MB");
    }
    return isLt2M;
  };
  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "done") {
      store.setPicLinkByIndex("options", {
        link: info.file.response?.imageUrl,
        index: props.index,
      });
    }
  };
  return (
    <div className={style.container + " mb-10"}>
      <div
        className={
          style.top + " flex justify-content-center align-items-center"
        }
      >
        <Upload
          showUploadList={false}
          action="/api/upload"
          name="image"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img src={imageUrl} className={style.avatar} />
          ) : (
            <div>
              <UploadOutlined />
              添加图片
            </div>
          )}
        </Upload>
      </div>
      <div
        className={
          style.bottom +
          " flex justify-content-center align-items-center flex-direction-column font-weight-500"
        }
      >
        <div className="item">{props.picTitle}</div>
        <div className={style.desc + " mt-5 mb-5"}>{props.picDesc}</div>
      </div>
    </div>
  );
}

export default PicItem;
