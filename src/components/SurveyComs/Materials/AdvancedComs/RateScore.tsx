import MaterialsHeader from "@/components/SurveyComs/Common/MaterialsHeader";
import { OptionsStatus } from "@/types";
import {
  getCurrentStatus,
  getStringStatus,
  getStringStatusByCurrentStatus,
  getTextStatus,
} from "@/utils";
import { Rate } from "antd";
import classNames from "classnames";
import { useMemo, useState } from "react";
import { useOutletContext } from "react-router";

function RateScore() {
  const props: {
    serialNum: number;
    status: OptionsStatus;
  } = useOutletContext();
  const [rateValue, setRateValue] = useState(3);

  const computedState = useMemo(() => {
    return {
      title: getTextStatus(props.status.title),
      desc: getTextStatus(props.status.desc),
      options: getStringStatus(props.status.options) || [],
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
  function emitAnswer(value: number) {
    setRateValue(value);
  }
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
      <div className="flex align-items-center">
        <Rate value={rateValue} onChange={emitAnswer} />
        {props.status.options.isUse && (
          <span className="ml-10">{computedState.options[rateValue - 1]}</span>
        )}
      </div>
    </div>
  );
}

export default RateScore;
