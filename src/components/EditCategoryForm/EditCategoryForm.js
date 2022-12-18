import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEditCategoryForm, setCategory } from "../../redux/slices/categorySlice";
import { UPDATE_CATEGORY } from "../../redux/types/categoryTypes";

const EditCategoryForm = () => {
    const category = useSelector(state => state.category.category);

    const dispatch = useDispatch();
    const formRef = useRef();

    const closeForm = () => {
        dispatch(closeEditCategoryForm());
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutSide);
    });

    const handleClickOutSide = (event) => {
        if (formRef.current != null && !formRef.current.contains(event.target)) {
            closeForm();
        }
    }

    const handleOnChangeCategoryInput = (event) => {
        dispatch(setCategory({
            id: category.id,
            category: event.target.value
        }));
    }

    const handleSaveCategory = () => {
        dispatch({type : UPDATE_CATEGORY, category: category})
    }

    return (
        <div className="w-1/6 h-fit bg-white mx-auto mt-[100px] p-10 rounded-xl shadow-xl" ref={formRef}>
            <div className="font-bold text-4xl text-center">
                <span>Chỉnh sửa danh mục</span>
            </div>

            {
                category &&
                <>
                    <div className="mt-[10px]">
                        <span><strong className="mr-5">ID:</strong>{category.id}</span>
                    </div>
                    <div className="my-10 ">
                        <input
                            type="text"
                            className="border px-4 py-2 w-[100%] block outline-none border-neutral-300 rounded-xl"
                            value={category.category}
                            onChange={handleOnChangeCategoryInput} />
                    </div>
                </>
            }

            <div className="mb-[60px]">
                <button
                    type="submit"
                    className="float-right bg-green-500 px-5 py-3 rounded-xl text-white hover:bg-green-700 duration-300 mx-2"
                    onClick={handleSaveCategory}>Lưu</button>
                <button className="float-right border border-gray-700 px-5 py-3 rounded-xl hover:bg-gray-300 duration-300 mx-2 select-none cursor-pointer" onClick={closeForm}>Hủy</button>
            </div>
        </div>
    );
};

export default EditCategoryForm;