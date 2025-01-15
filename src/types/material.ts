export type SurveyComName =
  | "single-select"
  | "multi-select"
  | "option-select"
  | "single-pic-select"
  | "multi-pic-select"
  | "text-input";

// 业务组件类型(题目类型 + 非题目类型)
export type Material = SurveyComName | "text-note";
