import { useState } from "react";
import { Tabs } from 'antd';
import ReactPlayer from 'react-player'
import { CheckCircleOutlined } from "@ant-design/icons"
import {Button} from 'antd'
import "./index.css"

const data = [
  {
    courseName: "Physics-Dari 9",
    chaptersName: "Physics Grade 9 |Chapter 1",
    time: "00:00", 
    url: "/lesson/physics-grade-9-chapter-1"
  },
  {
    courseName: "Physics-Dari 9",
    chaptersName: "Physics Grade 9 |Chapter 2",
    time: "00:00", 
    url: "/lesson/physics-grade-9-chapter-2"
  },
  {
    courseName: "Physics-Dari 9",
    chaptersName: "Physics Grade 9 |Chapter 3",
    time: "00:00", 
    url: "/lesson/physics-grade-9-chapter-3"
  },
  {
    courseName: "Physics-Dari 9",
    chaptersName: "Physics Grade 9 |Chapter 4",
    time: "00:00", 
    url: "/lesson/physics-grade-9-chapter-4"
  }
]
type viewListType = {
  chaptersName: string;
  time: string;
  url: string;
}

export default function videoPlayer() {
  const [currentActiveKey, setcurrentActiveKey] = useState("0")
  return (
    <div className="video-player">
      <div className="header-container">
        <span>{data[Number(currentActiveKey)].chaptersName}</span>
        <Button shape="round" onClick={markAsComplete} icon={<CheckCircleOutlined />} size="large">
          Mark as Complete
        </Button>
      </div>
      <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        onChange={(key:string) => setcurrentActiveKey(key)}
        items={data.map((item, i) => {
          const id = String(i);
          return {
            label: item.chaptersName,
            key: id,
            children: renderVideoContent(item),
          };
        })}
      />
    </div>
    
  )
}
function renderVideoContent(item:viewListType) {
  console.log(item);
  return (
    // <div>test</div>
    <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
  )
}

function markAsComplete() {
  console.log("complete")
}