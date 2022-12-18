import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { AiFillEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import AddChapterForm from "../../components/AddChapterForm";
import EditChapterForm from "../../components/EditChapterForm";
import { openFormAddChapters, openFormEditChapters } from "../../redux/slices/chapterSlice";
import { DELETE_CHAPTER, GET_ALL_CHAPTERS, GET_CHAPTER_BY_ID } from "../../redux/types/chapterTypes";
import Loader from "../../components/Loader";

const ChapterList = () => {

  const loading = useSelector(state => state.loader.load);
  const chapters = useSelector(state => state.chapter.chapters)
  const showAddChapterForm = useSelector(state => state.chapter.showFormAddChapter);
  const showEditChapterForm = useSelector(state => state.chapter.showFormEditChapter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_ALL_CHAPTERS });
  });

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id
    },
    {
      name: "Khóa học",
      selector: (row) => row.course.title
    },
    {
      name: "Chương",
      selector: (row) => row.title
    },
    {
      name: "",
      selector: (row) => {
        return (
          <div className="flex">
            <div className="bg-yellow-400 text-3xl p-3 rounded-xl hover:bg-yellow-300 cursor-pointer" onClick={() => handleShowEditChapterForm(row.id)}>
              <span><AiFillEdit /></span>
            </div>
            <div className="bg-green-400 text-3xl p-3 rounded-xl hover:bg-green-300 cursor-pointer mx-2" onClick={() => handleDeleteChapter(row.id)}>
              <span><FaTrash /></span>
            </div>
          </div>
        )
      }
    }
  ];

  const handleDeleteChapter = (id) => {
    if (window.confirm("Bạn chắc chắn muốn xóa chương này chứ?")){
      dispatch({
        type: DELETE_CHAPTER,
        id: id
      })
    }
  }

  const handleShowEditChapterForm = (id) => {
    dispatch({ type: GET_CHAPTER_BY_ID, id: id});
    dispatch(openFormEditChapters());
  };

  return (
    <div className="bg-gray-50 p-5">
      {loading && <Loader />}
      <DataTable
        title="Danh sách danh mục"
        columns={columns}
        data={chapters}
        pagination
        actions={
          <div className="bg-green-500 text-3xl px-5 py-2 rounded-xl select-none cursor-pointer text-white hover:bg-green-400 duration-300" onClick={() => { dispatch(openFormAddChapters()) }}>
            <span>Thêm chương</span>
          </div>
        } />
      {
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
      }
    </div>
  );
};

export default ChapterList;