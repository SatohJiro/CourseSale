import { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"

const ChapterToggle = (props) => {

    const [showLessons, setShowLessons] = useState(false);

    const handleSetShowLessons = () => {
        setShowLessons(!showLessons);
    };

    return (
        <div>
            <div className="mt-3 flex justify-between bg-blue-900 text-white px-10 py-5 rounded-xl select-none cursor-pointer hover:bg-blue-800 duration-300" onClick={handleSetShowLessons}>
                <span>Chương 1: Giới thiệu</span>
                <div className="flex items-center">
                    <span className="mr-5">Số bài: 1</span>
                    {showLessons ? <AiFillCaretDown /> : <AiFillCaretUp />}
                </div>
            </div>
            {
                showLessons &&
                <div>
                    {props.children}
                </div>
            }
        </div>
    );
};

export default ChapterToggle;