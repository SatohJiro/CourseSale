import categorySlice from "./slices/categorySlice";
import chapterSlice from "./slices/chapterSlice";
import courseSlice from "./slices/courseSlice";
import lessonVideoSlice from "./slices/lessonVideoSlice";
import loaderSlice from "./slices/loaderSlice";
import profileSlice from "./slices/profileSlice";

export const rootReducer = {
    profile: profileSlice,
    category: categorySlice,
    course: courseSlice,
    chapter: chapterSlice,
    lessonVideo: lessonVideoSlice,
    loader: loaderSlice,
};