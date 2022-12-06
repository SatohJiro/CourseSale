import classNames from "classnames/bind";
import style from "./Sidebar.module.scss";

import { ROUTE_NAME } from "~/routes/routesConstant";
import { AiOutlineHome, AiOutlineUnorderedList } from "react-icons/ai";

import { useState } from "react";
import SidebarItem from "~/components/SidebarItem";

const cx = classNames.bind(style);

const listTab = [
  {
    name: "home",
    path: ROUTE_NAME.ROOT,
    title: "Trang chủ",
    icon: <AiOutlineHome />,
    haveSubMenu: false,
    subMenu: [
      {
        name: null,
      },
    ],
  },
  {
    name: "courses",
    path: ROUTE_NAME.COURSES,
    title: "Khóa học",
    icon: <AiOutlineUnorderedList />,
    haveSubMenu: true,
    subMenu: [
      {
        name: "see-courses",
        path: ROUTE_NAME.COURSES,
        title: "Quản lí Khóa học",
      },
      {
        name: "add-courses",
        path: ROUTE_NAME.ADDCOURSE,
        title: "Thêm Khóa học",
      },
    ],
  },
  
];
function Sidebar() {
  const [tabActive, setTabActive] = useState(listTab[0].name);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("menu-wrapper")}>
        {listTab.map((item, index) => {
          return (
            <SidebarItem
              data={item}
              isActive={tabActive === item.name}
              setTabActive={setTabActive}
              key={index}
              haveSubMenu={item.haveSubMenu}
            ></SidebarItem>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
