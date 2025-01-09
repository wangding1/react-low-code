import { defaultStatusMap } from "@/configs/defaultStatus/defaultStatusMap";
import { create } from "zustand";

export const useStore = create((set) => ({
  coms: {
    "single-select": defaultStatusMap["single-select"](),
  },
}));
