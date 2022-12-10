import { useEffect, useRef } from "react";

const FormChangeAvt = () => {

    const formRef = useRef();

    useEffect(() => {
        document.addEventListener("mousedown",handleClickOutSide)
    });

    const handleClickOutSide = (event) => {
        if (!formRef.current.contains(event.target)){
            
        }
    };

    return (
        <div className="w-2/4 bg-white p-10 absolute inset-x-1/4 top-[10%] shadow-2xl shadow-slate-700 rounded-xl" ref={formRef}>
            <form>
                <div className="font-bold text-4xl mb-10">
                    <span>Thay đổi ảnh đại diện</span>
                </div>
                <input
                    className="w-full border cursor-pointer"
                    type="file" />
                <div className="h-[50vh] border my-5">
                    <img
                        className="h-full m-auto"
                        src="https://i.pinimg.com/736x/28/43/bb/2843bb8deeec72833bb5ecb42ea81c29.jpg" />
                </div>
                <div>
                    <button className="float-right border border-gray-700 px-5 py-3 rounded-xl hover:bg-gray-300 duration-300 mx-2">Hủy</button>
                    <button className="float-right bg-green-500 px-5 py-3 rounded-xl text-white hover:bg-green-700 duration-300 mx-2">Lưu</button>
                </div>
            </form>
        </div>
    );
};

export default FormChangeAvt;