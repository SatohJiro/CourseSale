import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { GET_CHAPTERS_BY_COURSE_ID } from "../../redux/types/chapterTypes";
import { GET_ALL_COURSES } from "../../redux/types/courseTypes";
import { ADD_LESSON_VIDEO } from "../../redux/types/lessonVideoType";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";
import Loader from "../../components/Loader";
import { endLoading, startLoading } from "../../redux/slices/loaderSlice";
import { useNavigate } from "react-router-dom";
import { ROUTE_NAME } from "../../routes/routesConstant";

const AddLessonVideo = () => {

    const loading = useSelector(state => state.loader.load);
    const courses = useSelector(state => state.course.courses);
    const chapters = useSelector(state => state.chapter.chapters);

    const dispatch = useDispatch();

    const [chapterId, setChapterId] = useState("");
    const [serial, setSerial] = useState(0);
    const [lessonName, setLessonName] = useState("");
    const [description, setDescription] = useState("");

    const [fileChoose, setFileChoose] = useState(null);
    const [fileUrl, setFileUrl] = useState(" ");
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({ type: GET_ALL_COURSES });
    }, [dispatch]);

    const handleChooseCourse = (event) => {
        dispatch({ type: GET_CHAPTERS_BY_COURSE_ID, courseId: event.target.value });
    };

    const handleChooseChapter = (event) => {
        setChapterId(event.target.value);
    }

    const handleChangeSerialInput = (event) => {
        setSerial(event.target.value);
    }

    const handleChangeLessonName = (event) => {
        setLessonName(event.target.value);
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    }

    const videoRef = useRef();

    const handleChooseVideo = (event) => {
        let file = event.target.files[0];
        if (file == null) return;
        if (file.type !== 'video/mp4') {
            window.alert("File phải là mp4");
        } else {
            setFileChoose(file);
            setFileUrl(URL.createObjectURL(file));
        }
    };

    const handleSave = () => {
        dispatch(startLoading());
        if (fileChoose === null) {
            window.alert("File chưa chọn kìa!!!");
        } else {
            const videoRefFirebase = ref(storage, `videos/${fileChoose.name + v4()}`);
            uploadBytes(videoRefFirebase, fileChoose)
                .then((snapshot) => {
                    getDownloadURL(snapshot.ref)
                        .then(url => {
                            const lessonVideo = {
                                id: v4().split("-")[0],
                                title: lessonName,
                                serial: serial,
                                linkVideo: url,
                                time: Number(videoRef.current.getDuration()).toFixed(),
                                description: description,
                                manufacture: new Date(),
                                chapter: {
                                    id: chapterId
                                }
                            }
                            dispatch({type: ADD_LESSON_VIDEO, lessonVideo: lessonVideo});
                            dispatch(endLoading());
                            navigate(ROUTE_NAME.LESSON_VIDEO_LIST);
                        });
                });
        }
    }

    return (
        <div className="px-20">
            {loading && <Loader />}
            <div className="font-bold text-4xl mb-5">
                <span>Thêm bài học video</span>
            </div>
            <div className="flex">
                <div className="w-[65%] border shadow-xl mr-5 p-5 rounded-xl">
                    <div className="w-full mr-2 border-b">
                        <input
                            type="file"
                            className="border border-neutral-300 px-4 py-2 w-[100%] h-full block outline-none rounded-xl my-5"
                            onChange={handleChooseVideo} />
                    </div>
                    <div>
                        <ReactPlayer
                            ref={videoRef}
                            className='react-player'
                            url={fileUrl}
                            width='100%'
                            height='60vh'
                            controls
                        />
                    </div>
                </div>
                <div className="w-[35%] border shadow-xl mr-5 p-5 rounded-xl h-fit">
                    <div className="my-5">
                        <strong>Khóa học</strong><br />
                        <select
                            name="course"
                            id="course"
                            className="border border-neutral-300 px-4 py-2 w-[100%] block outline-none h-[35px] rounded-xl" onChange={handleChooseCourse}>
                            <option value="null">none</option>
                            {
                                courses.map(course => {
                                    return <option key={course.id} value={course.id}>{course.title}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="my-5">
                        <strong>Chương</strong><br />
                        <select name="chapter" id="chapter" className="border border-neutral-300 px-4 py-2 w-[100%] block outline-none h-[35px] rounded-xl" onChange={handleChooseChapter}>
                            <option value="null">none</option>
                            {
                                chapters.map(chapter => {
                                    return <option key={chapter.id} value={chapter.id}>{chapter.title}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="my-5">
                        <strong>Thứ tự</strong>
                        <input
                            type="number"
                            value={serial}
                            className="border px-4 py-2 w-[100%] block border-neutral-300 outline-none rounded-xl" onChange={handleChangeSerialInput} />
                    </div>
                    <div className="my-5">
                        <strong>Tên bài học</strong>
                        <input
                            type="text"
                            value={lessonName}
                            className="border px-4 py-2 w-[100%] block border-neutral-300 outline-none rounded-xl" onChange={handleChangeLessonName} />
                    </div>
                    <div>
                        <strong>Mô tả</strong>
                        <textarea
                            rows={3}
                            className="border px-4 py-2 w-[100%] block border-neutral-300 outline-none rounded-xl resize-none"
                            value={description}
                            onChange={handleChangeDescription}>
                        </textarea>
                    </div>
                </div>
            </div>

            <div className="float-right mt-[40px] bg-green-600 px-20 py-4 rounded-2xl font-bold text-white cursor-pointer select-none hover:bg-green-500 duration-300 mr-[2%]" onClick={handleSave}>
                <span>Lưu</span>
            </div>
        </div>
    )
};

export default AddLessonVideo;