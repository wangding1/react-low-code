import SinglePicSelect from "@/components/SurveyComs/Materials/SelectComs/SinglePicSelect";
import TitleEditor from "@/components/SurveyComs/EditItems/TitleEditor";
import DescEditor from "@/components/SurveyComs/EditItems/DescEditor";
import PositionEditor from "@/components/SurveyComs/EditItems/PositionEditor";
import SizeEditor from "@/components/SurveyComs/EditItems/SizeEditor";
import WeightEditor from "@/components/SurveyComs/EditItems/WeightEditor";
import ItalicEditor from "@/components/SurveyComs/EditItems/ItalicEditor";
import ColorEditor from "@/components/SurveyComs/EditItems/ColorEditor";
import PicOptionsEditor from "@/components/SurveyComs/EditItems/PicOptionsEditor";

import { v4 as uuidv4 } from "uuid";
import { Status } from "@/types";

export default function (): Status {
  return {
    type: SinglePicSelect,
    name: "single-pic-select",
    id: uuidv4(),
    status: {
      title: {
        id: uuidv4(),
        status: "默认图片单选题标题内容",
        isShow: true,
        name: "title-editor",
        editCom: TitleEditor,
      },
      desc: {
        id: uuidv4(),
        status: "默认图片单选题描述内容",
        isShow: true,
        name: "desc-editor",
        editCom: DescEditor,
      },
      options: {
        id: uuidv4(),
        currentStatus: 0,
        status: [
          {
            picTitle: "图片标题1",
            picDesc: "说明（选填，限24字）",
            value: "",
          },
          {
            picTitle: "图片标题2",
            picDesc: "说明（选填，限24字）",
            value: "",
          },
        ],
        isShow: true,
        name: "pic-options-editor",
        editCom: PicOptionsEditor,
      },
      position: {
        id: uuidv4(),
        currentStatus: 0,
        status: ["左对齐", "居中对齐"],
        isShow: true,
        name: "position-editor",
        editCom: PositionEditor,
      },
      titleSize: {
        id: uuidv4(),
        currentStatus: 0,
        status: ["22", "20", "18"],
        isShow: true,
        name: "size-editor",
        editCom: SizeEditor,
      },
      descSize: {
        id: uuidv4(),
        currentStatus: 0,
        status: ["16", "14", "12"],
        isShow: true,
        name: "size-editor",
        editCom: SizeEditor,
      },
      titleWeight: {
        id: uuidv4(),
        currentStatus: 1,
        status: ["加粗", "正常"],
        isShow: true,
        name: "weight-editor",
        editCom: WeightEditor,
      },
      descWeight: {
        id: uuidv4(),
        currentStatus: 1,
        status: ["加粗", "正常"],
        isShow: true,
        name: "weight-editor",
        editCom: WeightEditor,
      },
      titleItalic: {
        id: uuidv4(),
        currentStatus: 1,
        status: ["斜体", "正常"],
        isShow: true,
        name: "italic-editor",
        editCom: ItalicEditor,
      },
      descItalic: {
        id: uuidv4(),
        currentStatus: 1,
        status: ["斜体", "正常"],
        isShow: true,
        name: "italic-editor",
        editCom: ItalicEditor,
      },
      titleColor: {
        id: uuidv4(),
        status: "#000",
        isShow: true,
        name: "color-editor",
        editCom: ColorEditor,
      },
      descColor: {
        id: uuidv4(),
        status: "#909399",
        isShow: true,
        name: "color-editor",
        editCom: ColorEditor,
      },
    },
  };
}
