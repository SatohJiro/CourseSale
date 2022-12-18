import DataTable from "react-data-table-component";
import "./Courses.module.scss";
import { AiFillEdit, AiFillEye } from "react-icons/ai"
import { FaTrash } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GET_ALL_COURSES } from "../../redux/types/courseTypes"
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

const Courses = () => {

  const loading = useSelector(state => state.loader.load);
  const courses = useSelector(state => state.course.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_ALL_COURSES });
  }, [dispatch]);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id
    },
    {
      name: "Ảnh bìa",
      selector: (row) => {
        return (
          <img
            className="w-[100px] h-[75px] my-2"
            src={row.coverUrl} />
        )
      }
    },
    {
      name: "Tên khóa học",
      selector: (row) => row.title
    },
    {
      name: "Giá",
      selector: (row) => row.price
    },
    {
      name: "",
      selector: (row) => {
        return (
          <div className="flex">
            <Link to="/course-detail">
              <div className="bg-blue-400 text-3xl p-3 rounded-xl hover:bg-blue-300 cursor-pointer mx-2" onClick={handleViewCourseDetail}>
                <span><AiFillEye /></span>
              </div>
            </Link>
            <div className="bg-yellow-400 text-3xl p-3 rounded-xl hover:bg-yellow-300 cursor-pointer mx-2">
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

  const handleViewCourseDetail = () => {
    
  }

  return (
    <div className="bg-gray-50 w-full h-full p-5">
      {loading && <Loader />}
      <DataTable
        title="Danh sách khóa học"
        columns={columns}
        data={courses}
        pagination />
    </div>
  );
};

export default Courses;