export interface BaseProps {
  id: string;
  isShow: boolean;
  editCom: (...args: any) => JSX.Element;
  name: string;
  isUse?: boolean;
}

export type StringStatusArr = string[];
export type ValueStatusArr = Array<{ value: string; status: string }>;
export type PicTitleDescStatusArr = Array<{
  picTitle: string;
  picDesc: string;
  value: string;
}>;

export type StatusArray =
  | StringStatusArr
  | ValueStatusArr
  | PicTitleDescStatusArr;

export interface TextProps extends BaseProps {
  status: string;
}

export interface OptionsProps extends BaseProps {
  status: StringStatusArr | ValueStatusArr | PicTitleDescStatusArr;
  currentStatus: number;
}

export interface BaseStatus {
  title: TextProps;
  desc: TextProps;
  position: OptionsProps;
  titleSize: OptionsProps;
  descSize: OptionsProps;
  titleWeight: OptionsProps;
  descWeight: OptionsProps;
  titleItalic: OptionsProps;
  descItalic: OptionsProps;
  titleColor: TextProps;
  descColor: TextProps;
}

export interface TypeStatus extends BaseStatus {
  type: OptionsProps;
}

export interface OptionsStatus extends BaseStatus {
  options: OptionsProps;
}
