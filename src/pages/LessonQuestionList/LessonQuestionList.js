import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { AiFillEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";

const LessonQuestionList = () => {

    const loading = useSelector(state => state.loader.load);
    const dispatch = useDispatch();

    useEffect(() => {
    });

    const columns = [
        {
            name: "Id",
            selector: (row) => row.id
        },
        {
            name: "Khóa học",
            selector: (row) => row.chapter.course.title
        },
        {
            name: "Chương",
            selector: (row) => row.chapter.title
        },
        {
            name: "Bài học",
            selector: (row) => row.title
        },
        {
            name: "Thời lượng",
            selector: (row) => row.title
        },
        {
            name: "Ngày thêm",
            selector: (row) => row.manufacture
        },
        {
            name: "",
            selector: (row) => {
                return (
                    <div className="flex">
                        <div className="bg-yellow-400 text-3xl p-3 rounded-xl hover:bg-yellow-300 cursor-pointer">
                            <span><AiFillEdit /></span>
                        </div>
                        <div className="bg-green-400 text-3xl p-3 rounded-xl hover:bg-green-300 cursor-pointer mx-2">
                            <span><FaTrash /></span>
                        </div>
                    </div>
                )
            }
        }
    ];

    const handleDeleteChapter = (id) => {
        if (window.confirm("Bạn chắc chắn muốn xóa chương này chứ?")) {
            
        }
    }

    const handleShowEditChapterForm = (id) => {
    };

    return (
        <div className="bg-gray-50 p-5">
            {loading && <Loader />}
            <DataTable
                title="Danh sách danh mục"
                columns={columns}
                data={[]}
                pagination
                actions={
                    <div className="bg-green-500 text-3xl px-5 py-2 rounded-xl select-none cursor-pointer text-white hover:bg-green-400 duration-300">
                        <span>Thêm bài học</span>
                    </div>
                } />
            {/* {
        showAddChapterForm &&
        <div className="w-full h-full absolute top-0 left-0 bg-neutral-700/70">
          <AddChapterForm />
        </div>
      }
      {
        showEditChapterForm &&
        <div className="w-full h-full absolute top-0 left-0 bg-neutral-700/70">
          <EditChapterForm />
        </div>
      } */}
        </div>
    );
    
}

export default LessonQuestionList;