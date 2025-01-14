import { defaultStatusMap } from "@/configs/defaultStatus/defaultStatusMap";
import {
  OptionsProps,
  PicLink,
  PicTitleDescStatusArr,
  Status,
  StatusArray,
} from "@/types";
import { Material, TextProps } from "@/types";
import { isPicTitleDescArray, isStringArray } from "@/utils";
import { create } from "zustand";

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
}>((set) => ({
  currentMaterialCom: "single-select" as Material,
  coms: {
    "single-select": defaultStatusMap["single-select"](),
    "multi-select": defaultStatusMap["multi-select"](),
    "option-select": defaultStatusMap["option-select"](),
    "single-pic-select": defaultStatusMap["single-pic-select"](),
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
}));
