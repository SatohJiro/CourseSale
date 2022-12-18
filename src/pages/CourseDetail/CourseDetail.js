import { AiOutlineCheck } from "react-icons/ai";
import { useSelector } from "react-redux";
import ChapterToggle from "../../components/ChapterToggle.js";
import LessonItem from "../../components/LessonItem/LessonItem.js";
import Loader from "../../components/Loader";

const CourseDetail = () => {
    const loading = useSelector(state => state.loader.load);

    return (
        <div className="flex bg-gray-100 p-10">
            {loading && <Loader />}
            <div className="w-[65%] bg-white p-10 mr-10 shadow-xl">
                <div className="font-bold text-5xl mb-10">
                    <span>Lập trình</span>
                </div>
                <div className="h-[1px] w-5/6 bg-gray-500"></div>
                <div className="text-3xl my-20">
                    <span className="font-bold mb-5 block">Lợi ích</span>
                    <ul className="flex flex-wrap">
                        <li className="w-1/2">
                            <div className="flex items-center">
                                <AiOutlineCheck className="text-green-500" />
                                <span className="ml-2">Hay lắm</span>
                            </div>
                        </li>
                        <li className="w-1/2">
                            <div className="flex items-center">
                                <AiOutlineCheck className="text-green-500" />
                                <span className="ml-2">Hay lắm</span>
                            </div>
                        </li>
                        <li className="w-1/2">
                            <div className="flex items-center">
                                <AiOutlineCheck className="text-green-500" />
                                <span className="ml-2">Hay lắm</span>
                            </div>
                        </li>
                        <li className="w-1/2">
                            <div className="flex items-center">
                                <AiOutlineCheck className="text-green-500" />
                                <span className="ml-2">Hay lắm</span>
                            </div>
                        </li>

                    </ul>
                </div>
                <div className="my-20 text-3xl">
                    <span className="font-bold mb-5 block">Mô tả</span>
                    <div>
                        <p>Nay la mon hoc xin nhat</p>
                    </div>
                </div>
                <div className="my-20 text-3xl">
                    <span className="mb-10 block font-bold">Nội dung khóa học</span>
                    <ChapterToggle>
                        <LessonItem />
                    </ChapterToggle>
                    <ChapterToggle>
                        <LessonItem />
                    </ChapterToggle>
                    <ChapterToggle>
                        <LessonItem />
                    </ChapterToggle>
                    <ChapterToggle>
                        <LessonItem />
                    </ChapterToggle>
                    <ChapterToggle>
                        <LessonItem />
                    </ChapterToggle>
                    <ChapterToggle>
                        <LessonItem />
                    </ChapterToggle>
                </div>
            </div>
            <div className="w-[35%] p-10 bg-white shadow-xl h-fit">
                <div className="font-bold text-4xl mb-10">
                    <span>Lập trình</span>
                </div>
                <div className="w-[450px] h-[300px] m-auto">
                    <img
                        className="w-full h-full"
                        src="https://i.pinimg.com/736x/28/43/bb/2843bb8deeec72833bb5ecb42ea81c29.jpg" />
                </div>
                <div className="px-10 my-5 flex text-3xl justify-between">
                    <div className="font-bold">
                        <span>Danh mục:</span>
                    </div>
                    <div>
                        <span>CNTT</span>
                    </div>
                </div>
                <div className="px-10 my-5 flex text-3xl justify-between">
                    <div className="font-bold">
                        <span>Giá:</span>
                    </div>
                    <div>
                        <span>$1000</span>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default CourseDetail;