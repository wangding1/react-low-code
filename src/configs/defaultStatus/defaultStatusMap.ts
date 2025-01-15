import singleSelectDefaultStatus from "./SingleSelect";
import multiSelectDefaultStatus from "./MultiSelect";
import optionSelectDefaultStatus from "./OptionSelect";
import singlePicSelectDefaultStatus from "./SinglePicSelect";
import multiPicSelectDefaultStatus from "./MultiPicSelect";
import textInputDefaultStatus from "./TextInput";
import textNoteDefaultStatus from "./TextNote";
import rateScoreDefaultStatus from "./RateScore";
import datetimeDefaultStatus from "./DateTime";

export const defaultStatusMap = {
  "single-select": singleSelectDefaultStatus,
  "multi-select": multiSelectDefaultStatus,
  "option-select": optionSelectDefaultStatus,
  "single-pic-select": singlePicSelectDefaultStatus,
  "multi-pic-select": multiPicSelectDefaultStatus,
  "text-input": textInputDefaultStatus,
  "text-note": textNoteDefaultStatus,
  "rate-score": rateScoreDefaultStatus,
  "date-time": datetimeDefaultStatus,
  "personal-info-name": textInputDefaultStatus,
  "personal-info-id": textInputDefaultStatus,
  "personal-info-tel": textInputDefaultStatus,
  "personal-info-wechat": textInputDefaultStatus,
  "personal-info-qq": textInputDefaultStatus,
  "personal-info-email": textInputDefaultStatus,
  "personal-info-address": textInputDefaultStatus,
  "personal-info-gender": singleSelectDefaultStatus,
  "personal-info-age": singleSelectDefaultStatus,
  "personal-info-education": singleSelectDefaultStatus,
  "personal-info-career": singleSelectDefaultStatus,
  "personal-info-birth": datetimeDefaultStatus,
  "personal-info-collage": textInputDefaultStatus,
  "personal-info-major": textInputDefaultStatus,
  "personal-info-industry": textInputDefaultStatus,
  "personal-info-company": textInputDefaultStatus,
  "personal-info-position": textInputDefaultStatus,
};
