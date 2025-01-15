import MaterialsHeader from "@/components/SurveyComs/Common/MaterialsHeader";
import { OptionsStatus, ValueStatusArr } from "@/types";
import {
  getCurrentStatus,
  getStringStatusByCurrentStatus,
  getTextStatus,
  getValueStatus,
  getValueStatusByCurrentStatus,
} from "@/utils";
import { DatePicker } from "antd";
import classNames from "classnames";
import { useMemo } from "react";
import { useOutletContext } from "react-router";

function DateTime() {
  const props: {
    serialNum: number;
    status: OptionsStatus;
  } = useOutletContext();

  const computedState = useMemo(() => {
    return {
      title: getTextStatus(props.status.title),
      desc: getTextStatus(props.status.desc),
      options: getValueStatusByCurrentStatus(props.status.options),
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
  type PickerMode = "year" | "month" | "week" | "time";

  function onChange() {}
  return (
    <div
      className={classNames({
        "text-center": computedState.position,
      })}
    >
      <MaterialsHeader
        serialNum={props.serialNum}
        title={computedState.title}
        desc={computedState.desc}
        titleSize={computedState.titleSize}
        descSize={computedState.descSize}
        titleWeight={computedState.titleWeight}
        descWeight={computedState.descWeight}
        titleItalic={computedState.titleItalic}
        descItalic={computedState.descItalic}
        titleColor={computedState.titleColor}
        descColor={computedState.descColor}
      ></MaterialsHeader>
      <DatePicker
        onChange={onChange}
        picker={computedState.options?.value as PickerMode}
      />
    </div>
  );
}

export default DateTime;
