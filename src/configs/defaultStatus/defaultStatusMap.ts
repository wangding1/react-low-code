import singleSelectDefaultStatus from "./SingleSelect";
import multiSelectDefaultStatus from "./MultiSelect";
import optionSelectDefaultStatus from "./OptionSelect";
import singlePicSelectDefaultStatus from "./SinglePicSelect";
import multiPicSelectDefaultStatus from "./MultiPicSelect";
import TextInputDefaultStatus from "./TextInput";

export const defaultStatusMap = {
  "single-select": singleSelectDefaultStatus,
  "multi-select": multiSelectDefaultStatus,
  "option-select": optionSelectDefaultStatus,
  "single-pic-select": singlePicSelectDefaultStatus,
  "multi-pic-select": multiPicSelectDefaultStatus,
  "text-input": TextInputDefaultStatus,
};
