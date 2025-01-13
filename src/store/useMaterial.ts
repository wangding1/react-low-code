import { defaultStatusMap } from "@/configs/defaultStatus/defaultStatusMap";
import { OptionsProps, Status, StringStatusArr } from "@/types";
import { Material, TextProps } from "@/types";
import { create } from "zustand";

export const useMaterial = create<{
  currentMaterialCom: Material;
  coms: {
    [key in Material]: Status;
  };
  setTextStatus: (key: string, text: string) => void;
  addOption: (key: string) => void;
  removeOption: (key: string, index: number) => void;
  setOption: (key: string, index: number, value: string) => void;
  setCurrentStatus: (key: string, value: number) => void;
  setCurrentSurveyCom: (currentMaterialCom: Material) => void;
}>((set) => ({
  currentMaterialCom: "single-select" as Material,
  coms: {
    "single-select": defaultStatusMap["single-select"](),
    "multi-select": defaultStatusMap["multi-select"](),
    "option-select": defaultStatusMap["option-select"](),
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
      const option = currentCom.status[key];
      (option.status as StringStatusArr).push(
        "新增选项" + (currentCom.status[key].status.length + 1)
      );
      return {
        coms: { ...state.coms, [state.currentMaterialCom]: currentCom },
      };
    });
  },
  removeOption: (key, index) => {
    set((state) => {
      let currentCom = state.coms[state.currentMaterialCom];
      const option = currentCom.status[key];
      (option.status as StringStatusArr).splice(index, 1);
      return {
        coms: { ...state.coms, [state.currentMaterialCom]: currentCom },
      };
    });
  },
  setOption: (key, index, value) => {
    set((state) => {
      let currentCom = state.coms[state.currentMaterialCom];
      const option = currentCom.status[key];
      (option.status as StringStatusArr)[index] = value;
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
}));
