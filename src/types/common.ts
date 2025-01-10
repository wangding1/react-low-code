import { OptionsProps, TextProps } from "./editProps";
import { Material } from "./material";

export interface Status {
  type: () => JSX.Element;
  name: Material;
  id: string;
  status: {
    [key: string]: TextProps | OptionsProps;
  };
}
