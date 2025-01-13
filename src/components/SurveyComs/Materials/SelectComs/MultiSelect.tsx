import MaterialsHeader from "@/components/SurveyComs/Common/MaterialsHeader";
import { OptionsStatus } from "@/types";
import {
  getCurrentStatus,
  getStringStatus,
  getStringStatusByCurrentStatus,
  getTextStatus,
} from "@/utils";
import { Checkbox } from "antd";
import classNames from "classnames";
import { useMemo } from "react";
import { useOutletContext } from "react-router";

function MultiSelect() {
  const props: {
    serialNum: number;
    status: OptionsStatus;
  } = useOutletContext();

  const computedState = useMemo(() => {
    return {
      title: getTextStatus(props.status.title),
      desc: getTextStatus(props.status.desc),
      options: getStringStatus(props.status.options),
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

  function emitAnswer() {}
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
      <div className="checkbox-group">
        <Checkbox.Group onChange={emitAnswer}>
          {computedState.options?.map((item, index) => {
            return (
              <Checkbox value={item} key={index}>
                {item}
              </Checkbox>
            );
          })}
        </Checkbox.Group>
      </div>
    </div>
  );
}

export default MultiSelect;
