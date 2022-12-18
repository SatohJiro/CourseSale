import { useEffect } from "react";
import DataTable from "react-data-table-component";
import { AiFillEdit } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { openAddCategoryForm, openEditCategoryForm } from "../../redux/slices/categorySlice";
import { DELETE_CATEGORY, GET_ALL_CATEGORIES, GET_CATEGORY_BY_ID } from "../../redux/types/categoryTypes";
import AddCategoryForm from "../../components/AddCategoryForm/AddCategoryForm";
import EditCategoryForm from "../../components/EditCategoryForm";
import Loader from "../../components/Loader";

const CategoryList = () => {

  const loading = useSelector(state => state.loader.load);
  const showAddCategoryForm = useSelector(state => state.category.showAddCategoryForm);
  const showEditCategoryForm = useSelector(state => state.category.showEditCategoryForm);
  const catetegories = useSelector(state => state.category.categories);
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch({ type: GET_ALL_CATEGORIES });
  }, [dispatch]);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id
    },
    {
      name: "Thể loại",
      selector: (row) => row.category
    },
    {
      name: "",
      selector: (row) => {
        return (
          <div className="flex">
            <div className="bg-yellow-400 text-3xl p-3 rounded-xl hover:bg-yellow-300 cursor-pointer" onClick={() => handleShowEditCategory(row.id)}>
              <span><AiFillEdit /></span>
            </div>
            <div className="bg-green-400 text-3xl p-3 rounded-xl hover:bg-green-300 cursor-pointer mx-2" onClick={() => handleDeleteCategory(row.id)}>
              <span><FaTrash /></span>
            </div>
          </div>
        )
      }
    }
  ];

  const handleDeleteCategory = (id) =>{
    if(window.confirm("Bạn chắc chắn muốn xóa?")){
      dispatch({type: DELETE_CATEGORY, id: id});
    }
  }

  const handleShowEditCategory = (id) => {
    dispatch({ type: GET_CATEGORY_BY_ID, id: id })
    dispatch(openEditCategoryForm());
  }

  const handleShowAddCategory = () => {
    dispatch(openAddCategoryForm());
  };

  return (
    <div className="bg-gray-50 p-5">
      {loading && <Loader />}
      <DataTable
        title="Danh sách danh mục"
        columns={columns}
        data={catetegories}
        pagination
        actions={
          <div className="bg-green-500 text-3xl px-5 py-2 rounded-xl select-none cursor-pointer text-white hover:bg-green-400 duration-300" onClick={handleShowAddCategory}>
            <span>Thêm danh mục</span>
          </div>
        } />
      {
        showAddCategoryForm &&
        <div className="w-full h-full absolute top-0 left-0 bg-neutral-700/70">
          <AddCategoryForm />
        </div>
      }
      {
        showEditCategoryForm &&
        <div className="w-full h-full absolute top-0 left-0 bg-neutral-700/70">
          <EditCategoryForm />
        </div>
      }
    </div>
  );
};

export default CategoryList;