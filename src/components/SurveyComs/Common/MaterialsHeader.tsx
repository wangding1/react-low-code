import classNames from "classnames";

function MaterialsHeader({
  serialNum = 1,
  title = "",
  desc = "请输入题目说明（选填）",
  titleSize = "20",
  descSize = "14",
  titleWeight = 0,
  descWeight = 0,
  titleItalic = 0,
  descItalic = 0,
  titleColor = "#000",
  descColor = "#666",
}: {
  serialNum: number;
  title?: string;
  desc?: string;
  titleSize?: string;
  descSize?: string;
  titleWeight?: number;
  descWeight?: number;
  titleItalic?: number;
  descItalic?: number;
  titleColor?: string;
  descColor?: string;
}) {
  return (
    <div>
      <div className="mb-15">
        <h2
          className="title font-weight-100"
          style={{ fontSize: titleSize + "px", color: titleColor }}
        >
          <span
            className={classNames({
              "font-bold": !titleWeight,
              "font-italic": !titleItalic,
            })}
            style={{ margin: "0 5px" }}
          >
            {serialNum < 10 ? "0" + serialNum : serialNum}.
          </span>
          <span
            className={classNames({
              "font-bold": !titleWeight,
              "font-italic": !titleItalic,
            })}
            style={{ margin: "0 5px" }}
          >
            {title}
          </span>
        </h2>
        <div
          className={classNames({
            "font-bold": !descWeight,
            "font-italic": !descItalic,
          })}
          style={{
            fontSize: descSize + "px",
            color: descColor,
            textIndent: "5px",
          }}
        >
          {desc}
        </div>
      </div>
    </div>
  );
}

export default MaterialsHeader;
