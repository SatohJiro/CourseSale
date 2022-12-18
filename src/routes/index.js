import { ROUTE_NAME } from "./routesConstant";

import Home from "~/pages/Home";
import Courses from "~/pages/Courses";
import AddCourses from "~/pages/AddCourse";
import Auth from "~/pages/Auth/Auth";
import NoneSideBarLayout from "../layout/NoneSidebarLayout/NoneSidebarLayout";
import Profile from "../pages/Profile";
import CourseDetail from "../pages/CourseDetail/CourseDetail";
import CategoryList from "../pages/CategoryList";
import ChapterList from "../pages/ChapterList";
import LessonVideoList from "../pages/LessonVideoList";
import AddLessonQuestion from "../pages/AddLessonQuestion";
import LessonQuestionList from "../pages/LessonQuestionList";
import AddLessonVideo from "../pages/AddLessonVideo";

const publicRoutes = [
  { path: ROUTE_NAME.ROOT, component: Home },
  { path: ROUTE_NAME.COURSES, component: Courses },
  { path: ROUTE_NAME.ADDCOURSE, component: AddCourses },
  { path: ROUTE_NAME.LOGIN, component: Auth, layout : null},
  { path: ROUTE_NAME.PROFILE, component: Profile, layout: NoneSideBarLayout},
  { path: ROUTE_NAME.COURSE_DETAIL, component: CourseDetail},
  { path: ROUTE_NAME.CATEGORY_LIST, component: CategoryList},
  { path: ROUTE_NAME.CHAPTER_LIST, component: ChapterList},
  { path: ROUTE_NAME.LESSON_VIDEO_LIST, component: LessonVideoList},
  { path: ROUTE_NAME.ADD_LESSON_QUESTION, component: AddLessonQuestion},
  { path: ROUTE_NAME.LESSON_QUESTION_LIST, component: LessonQuestionList},
  { path: ROUTE_NAME.ADD_LESSON_VIDEO, component: AddLessonVideo}
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
