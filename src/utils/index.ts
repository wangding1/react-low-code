import {
  OptionsProps,
  PicTitleDescStatusArr,
  StatusArray,
  TextProps,
  ValueStatusArr,
} from "@/types";

export function isTextProps(props: TextProps): props is TextProps {
  return typeof props.status === "string";
}
export function isOptionsProps(props: OptionsProps): props is OptionsProps {
  return props && Array.isArray(props.status);
}
export function isStringArray(status: StatusArray): status is string[] {
  return (
    Array.isArray(status) &&
    (status.length === 0 || typeof status[0] === "string")
  );
}

export function getTextStatus(props: TextProps) {
  if (props && isTextProps(props)) {
    return props.status;
  }
}

export function getStringStatus(props: OptionsProps) {
  if (props && isOptionsProps(props) && isStringArray(props.status))
    return props.status;
}

export function getCurrentStatus(props: OptionsProps) {
  return props && props.currentStatus;
}

export function getStringStatusByCurrentStatus(props: OptionsProps) {
  if (props && isOptionsProps(props) && isStringArray(props.status)) {
    return props.status[props.currentStatus];
  }
}

export function isValueStatusArray(
  status: StatusArray
): status is ValueStatusArr {
  return (
    Array.isArray(status) &&
    status.length > 0 &&
    typeof status[0] === "object" &&
    "value" in status[0] &&
    "status" in status[0]
  );
}

export function isPicTitleDescArray(
  status: StatusArray
): status is PicTitleDescStatusArr {
  return (
    Array.isArray(status) &&
    status.length > 0 &&
    typeof status[0] === "object" &&
    "picTitle" in status[0] &&
    "picDesc" in status[0] &&
    "value" in status[0]
  );
}

export function getValueStatus(props: OptionsProps) {
  if (
    props &&
    isOptionsProps(props) &&
    (isValueStatusArray(props.status) || isPicTitleDescArray(props.status))
  ) {
    return props.status;
  }
}
