function MaterialsHeader({
  serialNum,
  title = "",
  desc,
}: {
  serialNum: number;
  title: string;
  desc: string;
}) {
  return (
    <div className="mb-15">
      <h2 className="title font-weight-100">
        <span>{serialNum}.</span>
        <span>{title}</span>
      </h2>
      <div>{desc}</div>
    </div>
  );
}

export default MaterialsHeader;
