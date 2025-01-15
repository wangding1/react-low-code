import singleSelectDefaultStatus from "./SingleSelect";
import multiSelectDefaultStatus from "./MultiSelect";
import optionSelectDefaultStatus from "./OptionSelect";
import singlePicSelectDefaultStatus from "./SinglePicSelect";
import multiPicSelectDefaultStatus from "./MultiPicSelect";
import TextInputDefaultStatus from "./TextInput";
import TextNoteDefaultStatus from "./TextNote";
import RateScoreDefaultStatus from "./RateScore";
import DateTimeDefaultStatus from "./DateTime";

export const defaultStatusMap = {
  "single-select": singleSelectDefaultStatus,
  "multi-select": multiSelectDefaultStatus,
  "option-select": optionSelectDefaultStatus,
  "single-pic-select": singlePicSelectDefaultStatus,
  "multi-pic-select": multiPicSelectDefaultStatus,
  "text-input": TextInputDefaultStatus,
  "text-note": TextNoteDefaultStatus,
  "rate-score": RateScoreDefaultStatus,
  "date-time": DateTimeDefaultStatus,
};
