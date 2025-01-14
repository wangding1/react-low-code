import MaterialsHeader from "@/components/SurveyComs/Common/MaterialsHeader";
import PicItem from "@/components/SurveyComs/Common/PicItem";
import { OptionsStatus, PicTitleDescStatusArr } from "@/types";
import {
  getCurrentStatus,
  getStringStatusByCurrentStatus,
  getTextStatus,
  getValueStatus,
} from "@/utils";
import { Radio } from "antd";
import classNames from "classnames";
import { useMemo } from "react";
import { useOutletContext } from "react-router";
import style from "./css/SinglePicSelect.module.scss";

function SingleSelect() {
  const props: {
    serialNum: number;
    status: OptionsStatus;
  } = useOutletContext();

  const computedState = useMemo(() => {
    return {
      title: getTextStatus(props.status.title),
      desc: getTextStatus(props.status.desc),
      options: getValueStatus(props.status.options) as PicTitleDescStatusArr,
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
      <div>
        <Radio.Group onChange={emitAnswer} className="flex wrap">
          {computedState.options?.map((item, index) => {
            return (
              <Radio
                value={item.picTitle}
                key={index}
                className={style.picOption + " flex mb-15 mr-20"}
              >
                <PicItem key={index} {...item} index={index} />
              </Radio>
            );
          })}
        </Radio.Group>
      </div>
    </div>
  );
}

export default SingleSelect;
