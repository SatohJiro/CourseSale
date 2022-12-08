import classNames from "classnames/bind";
import style from "./Sidebar.module.scss";


// import SidebarMenu from "~/components/SidebarMenu";
// import SidebarMenuItem from "~/components/SidebarMenuItem/SidebarMenuItem";
// import SidebarTitle from "~/components/SidebarTitle/SidebarTitle";

import { ROUTE_NAME } from "~/routes/routesConstant";
import { AiFillHome, AiOutlineUnorderedList } from "react-icons/ai";

import { useState } from "react";
import SidebarItem from "~/components/SidebarItem";

const cx = classNames.bind(style);

const listTab = [
  {
    name: "home",
    path: ROUTE_NAME.ROOT,
    title: "Trang chủ",
    icon: <AiFillHome />,
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


// const Sidebar = () => {
//   return (
//     <div className="w-[245px] bg-[#202129] h-[100vh] p-2">
//       <SidebarMenuItem
//         path="\"
//         icon={
//           <AiOutlineHome className="text-white" />
//         }
//         name="Trang chủ" />
//       <SidebarTitle name="Khóa học" />
//       <SidebarMenu
//         name="Khóa học">
//         <SidebarMenuItem
//           path="\"
//           name="Trang chủ" />
//       </SidebarMenu>
//     </div>
//   );
// }

export default Sidebar;
