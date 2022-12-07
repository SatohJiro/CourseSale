import { ROUTE_NAME } from "./routesConstant";

import Home from "~/pages/Home";
import Courses from "~/pages/Courses";
import AddCourses from "~/pages/AddCourse";
import Auth from "~/pages/Auth/Auth";


const publicRoutes = [
  { path: ROUTE_NAME.ROOT, component: Home },
  { path: ROUTE_NAME.COURSES, component: Courses },
  { path: ROUTE_NAME.ADDCOURSE, component: AddCourses },
  { path: ROUTE_NAME.LOGIN, component: Auth },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
