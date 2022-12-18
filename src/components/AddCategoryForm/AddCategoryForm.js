import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { closeAddCategoryForm } from "../../redux/slices/categorySlice";
import { ADD_CATEGORY } from "../../redux/types/categoryTypes";

const AddCategoryForm = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState("");

    const formRef = useRef();

    const closeForm = () => {
        dispatch(closeAddCategoryForm());
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
        setCategory(event.target.value);
    }

    const handleSaveCategory = () => {
        dispatch({
            type: ADD_CATEGORY, 
            category: {
                id: v4().split("-")[0],
                category: category
            }});
        closeForm();
    };

    return (
        <div className="w-1/6 h-fit bg-white mx-auto mt-[100px] p-10 rounded-xl shadow-xl" ref={formRef}>
            <div className="font-bold text-4xl text-center">
                <span>Thêm danh mục</span>
            </div>
            <div className="my-10 ">
                <input
                    type="text"
                    className="border px-4 py-2 w-[100%] block outline-none border-neutral-300 rounded-xl"
                    value={category}
                    onChange={handleOnChangeCategoryInput} />
            </div>
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

export default AddCategoryForm;