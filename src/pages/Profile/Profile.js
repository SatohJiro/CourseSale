import { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import ChangePasswordForm from "../../components/ChangePasswordForm/ChangePassordForm";
import FormChangeAvt from "../../components/FormChangeAvt/FormChangeAvt";
import UserForm from "../../components/UserForm";

const Profile = () => {

    const INFOR_ID = 1;
    const CHANGE_PASSWORD_ID = 2;

    const [mode, setMode] = useState(1);

    const changeToInforTab = () => {
        setMode(INFOR_ID);
    }

    const changeToChangePasswordTab = () => {
        setMode(CHANGE_PASSWORD_ID);
    }

    return (
        <div className="min-h-[93vh] bg-gray-100">
            <div className="w-[60vw] bg-white mx-auto flex p-5 shadow-xl shadow-slate-600 rounded-xl mt-5">
                <div className="w-[35%] border border-gray-300 p-5">
                    <div className="w-80 h-80 rounded-full overflow-hidden m-auto">
                        <img src="https://i.pinimg.com/736x/28/43/bb/2843bb8deeec72833bb5ecb42ea81c29.jpg" />
                    </div>
                    <div className="text-center mt-2 font-bold text-blue-400 underline select-none hover:text-blue-600 cursor-pointer duration-300">
                        <span>Đổi ảnh</span>
                    </div>
                    <div className="text-center text-5xl my-10">
                        <span>Nguyễn Minh Châu</span>
                    </div>

                    <div className="text-3xl pl-[10%] select-none">
                        <div
                            className={
                                mode === INFOR_ID
                                    ? "my-4 text-violet-900 hover:text-violet-700 cursor-pointer duration-300"
                                    : "my-4 text-sky-900 hover:text-violet-700 cursor-pointer duration-300"}
                            onClick={changeToInforTab}>
                            <span>Thông tin</span>
                        </div>
                        <div
                            className={
                                mode === CHANGE_PASSWORD_ID
                                    ? "my-4 text-violet-900 hover:text-violet-700 cursor-pointer duration-300"
                                    : "my-4 text-sky-900 hover:text-violet-700 cursor-pointer duration-300"}
                            onClick={changeToChangePasswordTab}>
                            <span>Đổi mật khẩu</span>
                        </div>
                        <div className="flex my-4 text-sky-700 hover:text-violet-700 cursor-pointer duration-300">
                            <AiOutlineLogout />
                            <span className="ml-5">Đăng xuất</span>
                        </div>
                    </div>
                </div>
                <div className="w-[65%] ml-5 text-3xl">
                    {
                        mode === INFOR_ID &&
                        <div className="border border-gray-300 p-10">
                            <UserForm />
                        </div>
                    }
                    {
                        mode === CHANGE_PASSWORD_ID &&
                        <div className="border border-gray-300 p-10">
                            <ChangePasswordForm />
                        </div>
                    }
                </div>
            </div>
            <div className="w-full h-full absolute top-0 bg-neutral-700/70">
                <FormChangeAvt />
            </div>
        </div>
    );
};

export default Profile;