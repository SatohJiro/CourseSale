// import classNames from "classnames/bind";
// import style from "./Sidebar.module.scss";

import { AiOutlineHome } from "react-icons/ai";
import SidebarMenu from "~/components/SidebarMenu";
import SidebarMenuItem from "~/components/SidebarMenuItem/SidebarMenuItem";
import SidebarTitle from "~/components/SidebarTitle/SidebarTitle";

// import { ROUTE_NAME } from "~/routes/routesConstant";
// import { AiOutlineHome, AiOutlineUnorderedList } from "react-icons/ai";

// import { useState } from "react";
// import SidebarItem from "~/components/SidebarItem";

// const cx = classNames.bind(style);

// const listTab = [
//   {
//     name: "home",
//     path: ROUTE_NAME.ROOT,
//     title: "Trang chủ",
//     icon: <AiOutlineHome />,
//     haveSubMenu: false,
//     subMenu: [
//       {
//         name: null,
//       },
//     ],
//   },
//   {
//     name: "courses",
//     path: ROUTE_NAME.COURSES,
//     title: "Khóa học",
//     icon: <AiOutlineUnorderedList />,
//     haveSubMenu: true,
//     subMenu: [
//       {
//         name: "see-courses",
//         path: ROUTE_NAME.COURSES,
//         title: "Quản lí Khóa học",
//       },
//       {
//         name: "add-courses",
//         path: ROUTE_NAME.ADDCOURSE,
//         title: "Thêm Khóa học",
//       },
//     ],
//   },
// ];

// function Sidebar() {
//   const [tabActive, setTabActive] = useState(listTab[0].name);
//   return (
//     <div className={cx("wrapper")}>
//       <div className={cx("menu-wrapper")}>
//         {listTab.map((item, index) => {
//           return (
//             <SidebarItem
//               data={item}
//               isActive={tabActive === item.name}
//               setTabActive={setTabActive}
//               key={index}
//               haveSubMenu={item.haveSubMenu}
//             ></SidebarItem>
//           );
//         })}
//       </div>
//     </div>
//   );
// }


const Sidebar = () => {
  return (
    <div className="w-[245px] bg-[#202129] h-[100vh] p-2 border-r-2">
      <SidebarMenuItem
        path="/"
        icon={
          <AiOutlineHome className="text-white" />
        }
        name="Trang chủ" />
      <SidebarTitle name="Khóa học" />
      <SidebarMenu
        name="Khóa học">
        <SidebarMenuItem
          path="/courses"
          name="Danh sách khóa học" />
        <SidebarMenuItem
          path="/addcourses"
          name="Thêm khóa học" />
      </SidebarMenu>
      <SidebarMenu
        name="Chương">
        <SidebarMenuItem
          path="/courses"
          name="Danh sách chương" />
        <SidebarMenuItem
          path="/addcourses"
          name="Thêm chương" />
      </SidebarMenu>
      <SidebarMenu
        name="Bài học">
        <SidebarMenuItem
          path="/courses"
          name="Danh sách bài học" />
        <SidebarMenuItem
          path="/addcourses"
          name="Thêm bài học" />
      </SidebarMenu>
      <SidebarTitle name="Người dùng" />
      <SidebarMenu
        name="Khách hàng">
        <SidebarMenuItem
          path="/addcourses"
          name="Danh sách tài khoản" />
        <SidebarMenuItem
          path="/"
          name="Danh sách hóa đơn" />
      </SidebarMenu>
      <SidebarTitle name="Tài chính"/>
      <SidebarMenu
        name="Doanh thu">
        <SidebarMenuItem
          path="/addcourses"
          name="Thống kê doanh thu" />
      </SidebarMenu>
    </div>
  );
}

export default Sidebar;
