import { OptionsProps, TextProps } from "@/types";

export function isTextProps(props: TextProps): props is TextProps {
  return typeof props.status === "string";
}

export function getTextStatus(props: TextProps) {
  if (props && isTextProps(props)) {
    return props.status;
  }
}

export function getStringStatus(props: OptionsProps) {
  return props.status;
}
