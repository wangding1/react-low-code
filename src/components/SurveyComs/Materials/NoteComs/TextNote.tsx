import { TypeStatus } from "@/types";
import {
  getCurrentStatus,
  getStringStatusByCurrentStatus,
  getTextStatus,
} from "@/utils";
import classNames from "classnames";
import { useMemo } from "react";
import { useOutletContext } from "react-router";

function TextInputCom() {
  const props: {
    serialNum: number;
    status: TypeStatus;
  } = useOutletContext();

  const computedState = useMemo(() => {
    return {
      type: getCurrentStatus(props.status.type),
      title: getTextStatus(props.status.title),
      desc: getTextStatus(props.status.desc),
      position: getCurrentStatus(props.status.position),
      titleSize: getStringStatusByCurrentStatus(props.status.titleSize),
      descSize: getStringStatusByCurrentStatus(props.status.descSize),
      titleWeight: getCurrentStatus(props.status.titleWeight),
      descWeight: getCurrentStatus(props.status.descWeight),
      titleItalic: getCurrentStatus(props.status.titleItalic),
      descItalic: getCurrentStatus(props.status.descItalic),
      titleColor: getTextStatus(props.status.titleColor),
      descColor: getTextStatus(props.status.descColor),
    };
  }, [props]);

  return (
    <>
      {computedState.type === 0 ? (
        <h1
          className={classNames("pt-10 pb-10 text-center font-weight-200", {
            "font-italic": !computedState.titleItalic,
            "font-bold": !computedState.titleWeight,
          })}
          style={{
            fontSize: computedState.titleSize + "px",
            color: computedState.titleColor,
          }}
        >
          {computedState.title}
        </h1>
      ) : (
        <p
          className={classNames({
            "text-center": computedState.position,
            "font-italic": !computedState.descItalic,
            "font-bold": !computedState.descWeight,
          })}
          style={{
            fontSize: computedState.descSize + "px",
            color: computedState.descColor,
          }}
        >
          {computedState.desc}
        </p>
      )}
    </>
  );
}

export default TextInputCom;
