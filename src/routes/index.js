import { ROUTE_NAME } from "./routesConstant";

import Home from "~/pages/Home";
import Courses from "~/pages/Courses";
import AddCourses from "~/pages/AddCourse";
import Auth from "~/pages/Auth/Auth";
import NoneSideBarLayout from "../layout/NoneSidebarLayout/NoneSidebarLayout";
import Profile from "../pages/Profile";
import CourseDetail from "../pages/CourseDetail/CourseDetail";


const publicRoutes = [
  { path: ROUTE_NAME.ROOT, component: Home },
  { path: ROUTE_NAME.COURSES, component: Courses },
  { path: ROUTE_NAME.ADDCOURSE, component: AddCourses },
  { path: ROUTE_NAME.LOGIN, component: Auth, layout : null},
  { path: ROUTE_NAME.PROFILE, component: Profile, layout: NoneSideBarLayout},
  { path: ROUTE_NAME.COURSE_DETAIL, component: CourseDetail}
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
