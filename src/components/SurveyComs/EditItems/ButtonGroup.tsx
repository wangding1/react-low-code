import style from "./css/ButtonGroup.module.scss";
function ButtonGroup({
  title = "",
  status = "",
  children,
}: {
  title: string;
  status: string;
  children?: JSX.Element;
}) {
  return (
    <div className="flex align-items-center space-between">
      <div className="flex align-items-center">
        <div className="mr-20">{title}</div>
        <div className={style.currentStatus}>{status}</div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default ButtonGroup;
