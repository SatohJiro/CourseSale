import { AiOutlineHome } from "react-icons/ai";
import SidebarMenu from "~/components/SidebarMenu";
import SidebarMenuItem from "~/components/SidebarMenuItem/SidebarMenuItem";
import SidebarTitle from "~/components/SidebarTitle/SidebarTitle";

const Sidebar = () => {
  return (
    <div className="w-[245px] bg-[#202129] h-[100vh] p-2">
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
      <SidebarTitle name="Tài chính" />
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
