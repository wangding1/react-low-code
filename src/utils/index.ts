import { OptionsProps, StatusArray, TextProps } from "@/types";

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
