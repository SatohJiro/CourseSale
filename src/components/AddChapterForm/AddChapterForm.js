import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { closeFormAddChapters } from "../../redux/slices/chapterSlice";
import { ADD_CHAPTER } from "../../redux/types/chapterTypes";
import { GET_ALL_COURSES } from "../../redux/types/courseTypes"

const AddChapterForm = () => {
    const courses = useSelector(state => state.course.courses)

    const dispatch = useDispatch();
    const formRef = useRef();

    const closeForm = () => {
        dispatch(closeFormAddChapters())
    };

    useEffect(() => {
        dispatch({type: GET_ALL_COURSES})
    }, [dispatch]);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutSide);
    });

    const handleClickOutSide = (event) => {
        if (formRef.current != null && !formRef.current.contains(event.target)) {
            closeForm();
        }
    }

    const handleOnSelectCourse = (event) => {
        setCourseId(event.target.value);
    };

    const handleSaveChapter = () => {
        const chapter = {
            id: v4().split("-")[0],
            title: chapterName,
            serial: chapterSerial,
            course: {
                id: courseId
            }
        }
        dispatch({type: ADD_CHAPTER, chapter: chapter})
    };

    const [courseId, setCourseId] = useState(null);
    const [chapterName, setChapterName] = useState("");
    const [chapterSerial, setChapterSerial] = useState(0);

    return (
        <div className="w-[20%] h-fit bg-white mx-auto mt-[100px] p-10 rounded-xl shadow-xl" ref={formRef}>
            <div className="font-bold text-4xl text-center">
                <span>Thêm chương</span>
            </div>
            <div>
                <span>Khóa học</span>
                <select name="course" id="course" className="border border-neutral-300 px-4 py-2 w-[100%] block outline-none h-[35px] rounded-xl" onChange={handleOnSelectCourse}>
                    <option value={null}>none</option>
                    {
                        courses.map(course => {
                            return <option key={course.id} value={course.id}>{course.title}</option>
                        })
                    }
                </select>
            </div>
            <div className="my-10 ">
                <span>Tên chương</span>
                <input
                    type="text"
                    className="border px-4 py-2 w-[100%] block outline-none border-neutral-300 rounded-xl"
                    value={chapterName}
                    onChange={(event) => setChapterName(event.target.value)}/>
            </div>
            <div className="my-10 ">
                <span>Thứ tự</span>
                <input
                    type="number"
                    className="border px-4 py-2 w-[100%] block outline-none border-neutral-300 rounded-xl"
                    value={chapterSerial}
                    onChange={(event) => setChapterSerial(event.target.value)}/>
            </div>
            <div className="mb-[60px]">
                <button
                    type="submit"
                    className="float-right bg-green-500 px-5 py-3 rounded-xl text-white hover:bg-green-700 duration-300 mx-2"
                    onClick={handleSaveChapter}>Lưu</button>
                <button className="float-right border border-gray-700 px-5 py-3 rounded-xl hover:bg-gray-300 duration-300 mx-2 select-none cursor-pointer" onClick={closeForm}>Hủy</button>
            </div>
        </div>
    );
}

export default AddChapterForm;