import { ROUTE_NAME } from "./routesConstant";

import Home from "~/pages/Home";
import Courses from "~/pages/Courses";

const publicRoutes = [
  { path: ROUTE_NAME.ROOT, component: Home },
  { path: ROUTE_NAME.COURSES, component: Courses },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
