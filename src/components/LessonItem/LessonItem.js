import { AiFillPlayCircle } from "react-icons/ai";

const LessonItem = () => {
    return (
        <div className="flex justify-between p-5 items-center bg-gray-200 rounded-xl">
            <div className="flex items-center">
                <AiFillPlayCircle className="text-4xl text-gray-500"/>
                <span className="ml-2">Bài 1: Giới thiệu</span>
            </div>
            <div>
                <span>Thời lượng: 3:00</span>
            </div>
        </div>
    );
};

export default LessonItem;