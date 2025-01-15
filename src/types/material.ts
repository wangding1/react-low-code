export type SurveyComName =
  | "single-select"
  | "multi-select"
  | "option-select"
  | "single-pic-select"
  | "multi-pic-select"
  | "text-input"
  | "personal-info-name"
  | "personal-info-id"
  | "personal-info-tel"
  | "personal-info-wechat"
  | "personal-info-qq"
  | "personal-info-email"
  | "personal-info-address"
  | "personal-info-gender"
  | "personal-info-age"
  | "personal-info-education"
  | "personal-info-career"
  | "rate-score"
  | "date-time"
  | "personal-info-birth"
  | "personal-info-collage"
  | "personal-info-major"
  | "personal-info-industry"
  | "personal-info-company"
  | "personal-info-position";

// 业务组件类型(题目类型 + 非题目类型)
export type Material = SurveyComName | "text-note";
