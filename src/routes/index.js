import { ROUTE_NAME } from "./routesConstant";

import Home from "~/pages/Home";
import Courses from "~/pages/Courses";

import AddCourses from "~/pages/AddCourse";
// import Login from "~/pages/Login/Login";


const publicRoutes = [
  { path: ROUTE_NAME.ROOT, component: Home },
  { path: ROUTE_NAME.COURSES, component: Courses },
  { path: ROUTE_NAME.ADDCOURSE, component: AddCourses },
  // { path: ROUTE_NAME.LOGIN, component: Login },

];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
