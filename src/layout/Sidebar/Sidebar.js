import { AiOutlineHome } from "react-icons/ai";
import SidebarMenu from "~/components/SidebarMenu";
import SidebarMenuItem from "~/components/SidebarMenuItem/SidebarMenuItem";
import SidebarTitle from "~/components/SidebarTitle/SidebarTitle";

const Sidebar = () => {
  return (
    <div className="w-[245px] bg-[#202129] min-h-screen pt-[100px] p-2">
      <SidebarMenuItem
        path="/"
        icon={<AiOutlineHome className="text-white" />}
        name="Trang chủ"
      />
      <SidebarTitle name="Khóa học" />
      <SidebarMenu name="Danh mục">
        <SidebarMenuItem path="/category-list" name="Danh sách danh mục" />
      </SidebarMenu>
      <SidebarMenu name="Khóa học">
        <SidebarMenuItem path="/courses" name="Danh sách khóa học" />
        <SidebarMenuItem path="/addcourses" name="Thêm khóa học" />
      </SidebarMenu>
      <SidebarMenu name="Chương">
        <SidebarMenuItem path="/chapter-list" name="Danh sách chương" />
      </SidebarMenu>
      <SidebarMenu name="Bài học">
        <SidebarMenuItem path="/lesson-video-list" name="Danh sách bài học" />
        <SidebarMenuItem path="/add-lesson-video" name="Thêm bài học" />
      </SidebarMenu>
      <SidebarMenu name="Bài tập">
        <SidebarMenuItem
          path="/lesson-question-list"
          name="Danh sách bài tập"
        />
        <SidebarMenuItem path="/add-lesson-question" name="Thêm bài tập" />
      </SidebarMenu>
      <SidebarTitle name="Người dùng" />
      <SidebarMenu name="Khách hàng">
        <SidebarMenuItem path="/addcourses" name="Danh sách tài khoản" />
        <SidebarMenuItem path="/order-list" name="Danh sách hóa đơn" />
      </SidebarMenu>
      <SidebarTitle name="Tài chính" />
      <SidebarMenu name="Doanh thu">
        <SidebarMenuItem path="/revenue" name="Thống kê doanh thu" />
      </SidebarMenu>
    </div>
  );
};

export default Sidebar;
