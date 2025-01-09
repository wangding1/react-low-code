import MaterialsHeader from "@/components/SurveyComs/Common/MaterialsHeader";
import { OptionsStatus } from "@/types";
import { getStringStatus, getTextStatus } from "@/utils";
import { Radio } from "antd";
import { useMemo } from "react";
import { useOutletContext } from "react-router";

function SingleSelect() {
  const props: {
    serialNum: number;
    status: OptionsStatus;
  } = useOutletContext();

  const computedState = useMemo(() => {
    return {
      title: getTextStatus(props.status.title),
      desc: getTextStatus(props.status.desc),
      options: getStringStatus(props.status.options),
      position: getStringStatus(props.status.position),
      titleSize: getStringStatus(props.status.titleSize),
      descSize: getStringStatus(props.status.descSize),
      titleWeight: getStringStatus(props.status.titleWeight),
    };
  }, [props]);

  function emitAnswer() {}
  return (
    <div>
      <MaterialsHeader
        serialNum={props.serialNum}
        title={computedState.title}
        desc={computedState.desc}
      ></MaterialsHeader>
      <Radio.Group onChange={emitAnswer}>
        {computedState.options.map((item, index) => {
          return (
            <Radio value={item} key={index}>
              {item}
            </Radio>
          );
        })}
      </Radio.Group>
    </div>
  );
}

export default SingleSelect;
