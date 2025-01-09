import { defaultStatusMap } from "@/configs/defaultStatus/defaultStatusMap";
import { create } from "zustand";

export const useMaterial = create((set) => ({
  currentMaterialCom: "single-select",
  coms: {
    "single-select": defaultStatusMap["single-select"](),
  },
}));
