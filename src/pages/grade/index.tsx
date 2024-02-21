// import { useState } from "react";
import { useLocation }  from 'react-router-dom'
import { Flex,Rate,Select,Button,Tabs,Collapse,List,Avatar,Progress } from "antd"
import { NavLink } from 'react-router-dom';
import { OrderedListOutlined,UserOutlined,SyncOutlined,VideoCameraOutlined,EyeOutlined } from "@ant-design/icons"
import "./index.css"

const data = {
  subject: "Chemistry",
  Ranking: 1,
  grade: "Grade12",
  rate: 3.00,
  courseName: "Chemistry-Dari 9",
  curriculums:[
    { value: 'Pashto', label: 'Pashto' },
    { value: 'Math', label: 'Math' },
    { value: 'Physics', label: 'Physics' },
    { value: 'Chemistry', label: 'Chemistry' },
    { value: 'Geometry', label: 'Geometry' },
    { value: 'English', label: 'English' },
    { value: 'Dari', label: 'Dari' },
    { value: 'History', label: 'History' },
    { value: 'Geography', label: 'Geography' },
    { value: 'Biology', label: 'Biology' },
    { value: 'Islamic Studies', label: 'Islamic Studies' },
  ],
  courseImg: "Physic-D-9.webp",
  complexity: "Intermediate",
  enrollNumber: 48,
  updateTime: "November 29, 2023",
  isEnrolled: true,
  enrollDate: "February 4, 2024",
  completeCourses: 3,
  totalCourses: 6,
  items: [
    {
      key: '1',
      label: 'Course Info',
      children: [
        {
          chaptersName: "Physics Grade 9 |Chapter 1",
          time: "00:00", 
          url: "/lesson/physics-grade-9-chapter-1"
        },
        {
          chaptersName: "Physics Grade 9 |Chapter 2",
          time: "00:00", 
          url: "/lesson/physics-grade-9-chapter-2"
        },
        {
          chaptersName: "Physics Grade 9 |Chapter 3",
          time: "00:00", 
          url: "/lesson/physics-grade-9-chapter-3"
        },
        {
          chaptersName: "Physics Grade 9 |Chapter 4",
          time: "00:00", 
          url: "/lesson/physics-grade-9-chapter-4"
        }
      ],
    },
    {
      key: '2',
      label: 'Review',
      children: 'Content of Tab Pane 2',
    }
  ]

}

type viewListType = {
  chaptersName: string;
  time: string;
  url: string;
}
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export default function Grade() {
  // const [currentTabKey] = useState(0)
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname)
  return (
    <>
      <div className='home-content grades'>
        <div className="line-1">
          <Flex gap="middle">
            <Rate disabled value={data.rate} />
            {data.rate}
            {data.Ranking} Rating
          </Flex>
          <Select
            defaultValue="Pashto"
            style={{ width: 240 }}
            onChange={handleChange}
            options={data.curriculums}
          />
        </div>
        <h1 style={{margin: "20px 0"}}>{data.courseName}</h1>
        <div>
          Grade 
          <NavLink
            to={"/"}
            className="rounded-md grade-link"
          >
            {pathname.split("/")[2]}
          </NavLink>
        </div>
        <div className="course-content">
          <img src={getImgUrl(data.courseImg)} />
          <div className="course-enroll-info">
            <div className="top-section">
              {!data.isEnrolled && <div className="top-section-1">
                <span className="free-font">Free</span>
                <Button type="primary">Enroll now</Button>
                <span className="free-dec">Free access this course</span>
              </div>}
              {data.isEnrolled && <div className="top-section-1">
                <span className="free-font">Course Progress</span>
                <Progress strokeColor={"#045cb4"}  percent={100*data.completeCourses/data.totalCourses} />
                <NavLink
                  to={"/classes/videocourse"}
                  className="rounded-md grade-link"
                >
                  <Button style={{margin: "20px 0"}} type="primary">Start Learning</Button>
                </NavLink>
                <Button>Complete Course</Button>
                <span className="free-dec">You enrolled in this course on <span style={{color: "#045cb4"}}>{data.enrollDate}</span></span>
              </div>}
              <div className="top-section-2">
                <span><OrderedListOutlined /> {data.complexity}</span>
                <span><UserOutlined /> {data.enrollNumber}</span>
                <span><SyncOutlined /> {data.updateTime} Last Updated</span>
              </div>
            </div>
            {data.isEnrolled && <div className="bottom-section">
              Subject
              <NavLink 
              to={"/"}
              className="rounded-md p-4"
              >
                <Button type="default">{data.subject}</Button>
              </NavLink>
            </div>
            }
          </div>
        </div>
        <Tabs 
          defaultActiveKey="1" 
          onChange={onTabChange} 
          items={data.items.map((item, i) => {
            const id = String(i + 1);
            const children = renderTabChildren(item.key, item.children);
            return {
              key: id,
              label: item.label,
              children: children,
            };
          })}
          />
       </div>
    </>
  );
}

function getImgUrl(name: string) {
  return new URL(`../../assets/images/course/physic/${name}`, import.meta.url).href;
}
const onTabChange = (key: string) => {
  console.log(key);
};
function renderCollapseContent(couseVideoList:viewListType[]) {
  return (
    <ul className="video-list-content">
      {couseVideoList.map((item: viewListType,index) => {
        return <li key={index}>
                  <VideoCameraOutlined />
                  <NavLink
                    to={item.url}
                    className="rounded-md p-4"
                  >
                    <span>{item.chaptersName}</span>
                  </NavLink>
                  <div className="collapse-content-right" style={{float: "right"}}>
                    <span className="video-watch-time">{item.time}</span>
                    <EyeOutlined />
                  </div>
                </li>
      })}
    </ul>
  )
}
function renderTabChildren(key: string,item: viewListType[]|string) {
  if(key == "1") {
    return <Collapse
                collapsible="header"
                defaultActiveKey={['1']}
                items={[
                  {
                    key: '1',
                    label: 'Chapters',
                    children: <div>{renderCollapseContent(item as viewListType[])}</div>,
                  },
                ]}
              />
  } else {
    return renderSecondTabContent()
  }
}
const data1 = [
  {
    score: 2,
    name: 'name 1',
    comments: 'bad',
  },
  {
    score: 3,
    name: 'name 2',
    comments: 'not bad',
  },
  {
    score: 5,
    name: 'name 3',
    comments: 'very good',
  },
  {
    score: 4,
    name: 'name 4',
    comments: 'good',
  },
];
function renderSecondTabContent() {
  return (
    <div>
      <List
          itemLayout="horizontal"
          dataSource={data1}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                title={
                <>
                  <a className="name-link" href="/">{item.name}</a>
                  <Rate disabled defaultValue={item.score} />
                </>
                }
                description={item.comments}
              />
            </List.Item>
          )}
        />
    </div>
  )
}