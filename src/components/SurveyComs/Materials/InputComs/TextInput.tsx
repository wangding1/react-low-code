import MaterialsHeader from "@/components/SurveyComs/Common/MaterialsHeader";
import { TypeStatus } from "@/types";
import {
  getCurrentStatus,
  getStringStatusByCurrentStatus,
  getTextStatus,
} from "@/utils";
import { Input } from "antd";
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
      <div className="input-group">
        {computedState.type === 1 ? (
          <Input.TextArea onChange={emitAnswer} rows={5} />
        ) : (
          <Input onChange={emitAnswer} />
        )}
      </div>
    </div>
  );
}

export default TextInputCom;
