import { useEffect, useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { GET_CHAPTERS_BY_COURSE_ID } from "../../redux/types/chapterTypes";
import { GET_ALL_COURSES } from "../../redux/types/courseTypes";
import { ADD_LESSON_QUESTION } from "../../redux/types/lessonQuestionTypes";
import Loader from "../../components/Loader";

const AddLessonQuestion = () => {
    const loading = useSelector(state => state.loader.load);

    const courses = useSelector(state => state.course.courses);
    const chapters = useSelector(state => state.chapter.chapters);

    const dispatch = useDispatch();

    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [chapterId, setChapterId] = useState("");
    const [serial, setSerial] = useState(0);
    const [lessonName, setLessonName] = useState("");
    const [description, setDescription] = useState("");
    
    useEffect(() => {
        dispatch({ type: GET_ALL_COURSES });
    }, [dispatch]);

    const handleChooseCourse = (event) => {
        dispatch({ type: GET_CHAPTERS_BY_COURSE_ID, courseId: event.target.value });
    };

    const handleAddQuestion = () => {
        let questionId = v4().split("-")[0];
        setQuestions(
            [
                ...questions,
                {
                    id: questionId,
                    question: "",
                    answers: [
                        {
                            id: v4().split("-")[0],
                            question: {
                                id: questionId
                            },
                            key: "A",
                            value: "",
                            isCorrect: true
                        },
                        {
                            id: v4().split("-")[0],
                            question: {
                                id: questionId
                            },
                            key: "B",
                            value: "",
                            isCorrect: false
                        },
                        {
                            id: v4().split("-")[0],
                            question: {
                                id: questionId
                            },
                            key: "C",
                            value: "",
                            isCorrect: false
                        },
                        {
                            id: v4().split("-")[0],
                            question: {
                                id: questionId
                            },
                            key: "D",
                            value: "",
                            isCorrect: false
                        },
                    ]
                }
            ]
        );
    };

    const handleDeleteQuestion = (index) => {
        let newQuestions = [...questions];
        newQuestions.splice(index, 1);
        setQuestions(newQuestions);
    };

    const handleChangeQuestionInput = (index, event) => {
        let newQuestions = [...questions];
        newQuestions[index].question = event.target.value;
        setQuestions(newQuestions);
    };

    const handleChangeAnswerInput = (answerIndex, questionIndex, event) => {
        let newQuestions = [...questions];
        newQuestions[questionIndex].answers[answerIndex].value = event.target.value;
        setQuestions(newQuestions);
    }

    const handleChangeCorrectAnswer = (questionIndex, event) => {
        let newQuestions = [...questions];
        for (let i = 0; i < newQuestions[questionIndex].answers.length; i++){
            newQuestions[questionIndex].answers[i].isCorrect = false;
        }
        newQuestions[questionIndex].answers[event.target.value].isCorrect = true;
        setQuestions(newQuestions);
    }

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

    const handleSave = () => {
        let lessonId = v4().split("-")[0];
        let newQuestions = [...questions];
        for (let i = 0; i < newQuestions.length; i++) {
            newQuestions[i] = {
                ...newQuestions[i],
                lessonQuestion: {
                    id: lessonId,
                }
            }
        }

        const lessonQuestion = {
            id: lessonId,
            title: lessonName,
            serial: serial,
            description: description,
            manufacture: new Date(),
            questions: newQuestions,
            chapter: {
                id: chapterId
            }
        }

        dispatch({type: ADD_LESSON_QUESTION, lessonQuestion: lessonQuestion});
    }

    return (
        <div className="px-20">
            {loading && <Loader />}
            <div className="font-bold text-4xl mb-5">
                <span>Thêm bài tập</span>
            </div>
            <div className="flex">
                <div className="w-[65%] border shadow-xl mr-5 p-5 rounded-xl">
                    <div className="flex justify-between">
                        <span className="font-bold text-3xl mb-5">Danh sách câu hỏi</span>
                        <span className="select-none cursor-pointer font-bold text-green-700 hover:text-green-400 duration-300" onClick={handleAddQuestion}>Thêm</span>
                    </div>
                    <div>
                        {
                            questions.map((question, index) => {
                                let questionIndex = index;
                                return (
                                    <div key={question.id} className="mb-10">
                                        <div>
                                            <div className="flex justify-between">
                                                <span>Câu hỏi số {index + 1}:</span>
                                                <div className="mr-[5%] border border-gray-600 px-5 h-fit text-3xl rounded-xl hover:bg-gray-300 cursor-pointer duration-300" onClick={() => handleDeleteQuestion(index)}>
                                                    <AiOutlineMinus />
                                                </div>
                                            </div>
                                            <input
                                                className="border px-4 py-2 w-[95%] block border-neutral-300 outline-none rounded-xl m-5"
                                                type="text"
                                                value={question.question}
                                                onChange={(event) => handleChangeQuestionInput(index, event)} />
                                        </div>
                                        <div>
                                            <span>Đáp án:</span>
                                            <div className="flex flex-wrap">
                                                {
                                                    question.answers.map((answer, index) => {
                                                        let answerIndex = index;
                                                        return (
                                                            <div key={answer.id} className="w-[45%] m-5">
                                                                <span>{answer.key}</span>
                                                                <input
                                                                    className="border px-4 py-2 w-[90%] border-neutral-300 outline-none rounded-xl m-5"
                                                                    type="text"
                                                                    value={answer.value}
                                                                    onChange={event => handleChangeAnswerInput(answerIndex, questionIndex, event)} />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div>
                                            <span>Đáp án đúng:</span>
                                            <select className="border px-4 py-2 w-[30%] border-neutral-300 outline-none rounded-xl m-5" onChange={(event) => handleChangeCorrectAnswer(questionIndex, event)}>
                                                {
                                                    question.answers.map((answer, index) => {
                                                        return <option key={index} value={index}>{answer.key}. {answer.value}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className="w-full h-[1px] bg-gray-300"></div>
                                    </div>
                                )
                            })
                        }

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
                            className="border px-4 py-2 w-[100%] block border-neutral-300 outline-none rounded-xl" onChange={handleChangeSerialInput}/>
                    </div>
                    <div className="my-5">
                        <strong>Tên bài học</strong>
                        <input
                            type="text"
                            value={lessonName}
                            className="border px-4 py-2 w-[100%] block border-neutral-300 outline-none rounded-xl" onChange={handleChangeLessonName}/>
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
}

export default AddLessonQuestion;