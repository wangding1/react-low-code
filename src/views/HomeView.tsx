import { CompassOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import type { TableProps } from "antd";
import { useState } from "react";
import { DataType } from "@/types";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "创建日期",
      dataIndex: "createDate",
      key: "createDate",
      width: 150,
    },
    {
      title: "问卷标题",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "题目数",
      dataIndex: "surveyCount",
      key: "surveyCount",
      width: 150,
    },
    {
      title: "最近更新日期",
      dataIndex: "updateDate",
      key: "updateDate",
      width: 150,
    },
    {
      title: "操作",
      dataIndex: "",
      width: 300,
      key: "x",
      render: (_, record) => {
        return (
          <div>
            <Button
              type="text"
              onClick={() => {
                viewSurvey(record);
              }}
            >
              查看问卷
            </Button>
            <Button
              type="text"
              onClick={() => {
                editSurvey(record);
              }}
            >
              编辑
            </Button>
            <Button
              type="text"
              onClick={() => {
                delSurvey(record);
              }}
            >
              删除
            </Button>
          </div>
        );
      },
    },
  ];
  function viewSurvey(record: DataType) {}
  function editSurvey(record: DataType) {}
  function delSurvey(record: DataType) {}
  function goToEditor() {
    navigate("/editor");
  }
  function goToComMarket() {
    navigate("/single-select");
  }
  return (
    <div className="pt-20 pb-20 pl-20 pr-20">
      <h1 className="font-weight-100 text-center">渡一问卷系统</h1>
      <div className="mb-15">
        <Button type="primary" icon={<PlusOutlined />} onClick={goToEditor}>
          创建问卷
        </Button>
        <Button
          variant="solid"
          icon={<CompassOutlined />}
          color="green"
          onClick={goToComMarket}
        >
          组件市场
        </Button>
      </div>
      <Table bordered columns={columns} dataSource={data} />;
    </div>
  );
}

export default App;
