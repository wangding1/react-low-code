import { defaultStatusMap } from "@/configs/defaultStatus/defaultStatusMap";
import {
  OptionsProps,
  PicLink,
  PicTitleDescStatusArr,
  Status,
  StatusArray,
} from "@/types";
import { Material, TextProps } from "@/types";
import {
  isPicTitleDescArray,
  isStringArray,
  updateInitStatusBeforeAdd,
} from "@/utils";
import { create } from "zustand";

const keysToInitialize = [
  "personal-info-tel",
  "personal-info-wechat",
  "personal-info-qq",
  "personal-info-email",
  "personal-info-address",
  "personal-info-name",
  "personal-info-id",
  "personal-info-gender",
  "personal-info-age",
  "personal-info-education",
  "personal-info-career",
  "personal-info-birth",
  "personal-info-collage",
  "personal-info-major",
  "personal-info-industry",
  "personal-info-company",
  "personal-info-position",
] as Material[];

const initializedStates: { [key: string]: Status } = {};

keysToInitialize.forEach((key) => {
  const defaultStatus = defaultStatusMap[key]();
  updateInitStatusBeforeAdd(defaultStatus, key);
  initializedStates[key] = defaultStatus;
});

export const useMaterial = create<{
  currentMaterialCom: Material;
  coms: {
    [key in Material]: Status;
  };
  setTextStatus: (key: string, text: string) => void;
  addOption: (key: string) => void;
  removeOption: (key: string, index: number) => void;
  setOption: (key: string, index: number, value: StatusArray[0]) => void;
  setCurrentStatus: (key: string, value: number) => void;
  setCurrentSurveyCom: (currentMaterialCom: Material) => void;
  setPicLinkByIndex: (key: string, payload: PicLink) => void;
  setType: (key: string, value: number, bol?: boolean) => void;
  setUse: (key: string, value: boolean) => void;
}>((set) => ({
  currentMaterialCom: "single-select" as Material,
  coms: {
    "single-select": defaultStatusMap["single-select"](),
    "multi-select": defaultStatusMap["multi-select"](),
    "option-select": defaultStatusMap["option-select"](),
    "single-pic-select": defaultStatusMap["single-pic-select"](),
    "multi-pic-select": defaultStatusMap["multi-pic-select"](),
    "text-input": defaultStatusMap["text-input"](),
    "text-note": defaultStatusMap["text-note"](),
    "rate-score": defaultStatusMap["rate-score"](),
    "date-time": defaultStatusMap["date-time"](),
    "personal-info-name": initializedStates["personal-info-name"],
    "personal-info-id": initializedStates["personal-info-id"],
    "personal-info-tel": initializedStates["personal-info-tel"],
    "personal-info-wechat": initializedStates["personal-info-wechat"],
    "personal-info-qq": initializedStates["personal-info-qq"],
    "personal-info-email": initializedStates["personal-info-email"],
    "personal-info-address": initializedStates["personal-info-address"],
    "personal-info-gender": initializedStates["personal-info-gender"],
    "personal-info-age": initializedStates["personal-info-age"],
    "personal-info-education": initializedStates["personal-info-education"],
    "personal-info-career": initializedStates["personal-info-career"],
    "personal-info-birth": initializedStates["personal-info-birth"],
    "personal-info-collage": initializedStates["personal-info-collage"],
    "personal-info-major": initializedStates["personal-info-major"],
    "personal-info-industry": initializedStates["personal-info-industry"],
    "personal-info-company": initializedStates["personal-info-company"],
    "personal-info-position": initializedStates["personal-info-position"],
  },
  setTextStatus: (key: string, text: string) => {
    set((state) => {
      let currentCom = state.coms[state.currentMaterialCom];
      const option = currentCom.status[key] as TextProps;
      option.status = text;
      return {
        coms: { ...state.coms, [state.currentMaterialCom]: currentCom },
      };
    });
  },
  addOption: (key) => {
    set((state) => {
      let currentCom = state.coms[state.currentMaterialCom];
      const option = currentCom.status[key] as OptionsProps;
      if (isStringArray(option.status)) {
        option.status.push("新增选项" + (option.status.length + 1));
      }
      if (isPicTitleDescArray(option.status)) {
        option.status.push({
          picTitle: "新增图片标题" + (option.status.length + 1),
          picDesc: "说明（选填，限30字）",
          value: "",
        });
      }
      return {
        coms: { ...state.coms, [state.currentMaterialCom]: currentCom },
      };
    });
  },
  removeOption: (key, index) => {
    set((state) => {
      let currentCom = state.coms[state.currentMaterialCom];
      const option = currentCom.status[key] as OptionsProps;
      option.status.splice(index, 1);
      return {
        coms: { ...state.coms, [state.currentMaterialCom]: currentCom },
      };
    });
  },
  setOption: (key, index, value) => {
    set((state) => {
      let currentCom = state.coms[state.currentMaterialCom];
      const option = currentCom.status[key] as OptionsProps;
      option.status[index] = value;
      return {
        coms: { ...state.coms, [state.currentMaterialCom]: currentCom },
      };
    });
  },
  setCurrentStatus: (key, value) => {
    set((state) => {
      let currentCom = state.coms[state.currentMaterialCom];
      const option = currentCom.status[key] as OptionsProps;
      option.currentStatus = value;
      return {
        coms: { ...state.coms, [state.currentMaterialCom]: currentCom },
      };
    });
  },
  setCurrentSurveyCom: (currentMaterialCom) => set({ currentMaterialCom }),
  setPicLinkByIndex: (key, payload) => {
    set((state) => {
      let currentCom = state.coms[state.currentMaterialCom];
      const option = currentCom.status[key] as OptionsProps;
      (option.status as PicTitleDescStatusArr)[payload.index].value =
        payload.link;
      return {
        coms: { ...state.coms, [state.currentMaterialCom]: currentCom },
      };
    });
  },
  setType: (key, value, bol = false) => {
    set((state) => {
      let currentCom = state.coms[state.currentMaterialCom];
      const option = currentCom.status[key] as OptionsProps;
      if (bol && option.currentStatus !== value) {
        currentCom.status.title.isShow = !currentCom.status.title.isShow;
        currentCom.status.desc.isShow = !currentCom.status.desc.isShow;
        currentCom.status.titleSize.isShow =
          !currentCom.status.titleSize.isShow;
        currentCom.status.descSize.isShow = !currentCom.status.descSize.isShow;
        currentCom.status.titleWeight.isShow =
          !currentCom.status.titleWeight.isShow;
        currentCom.status.descWeight.isShow =
          !currentCom.status.descWeight.isShow;
        currentCom.status.titleItalic.isShow =
          !currentCom.status.titleItalic.isShow;
        currentCom.status.descItalic.isShow =
          !currentCom.status.descItalic.isShow;
        currentCom.status.titleColor.isShow =
          !currentCom.status.titleColor.isShow;
        currentCom.status.descColor.isShow =
          !currentCom.status.descColor.isShow;
        currentCom.status.position.isShow = !currentCom.status.position.isShow;
      }
      option.currentStatus = value;
      return {
        coms: { ...state.coms, [state.currentMaterialCom]: currentCom },
      };
    });
  },
  setUse: (key, value) => {
    set((state) => {
      let currentCom = state.coms[state.currentMaterialCom];
      const option = currentCom.status[key] as OptionsProps;
      option.isUse = value;
      return {
        coms: { ...state.coms, [state.currentMaterialCom]: currentCom },
      };
    });
  },
}));
