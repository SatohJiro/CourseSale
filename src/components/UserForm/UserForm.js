import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewUser, setUser } from "../../redux/slices/profileSlice";
import { UPDATE_USER } from "../../redux/types/userTypes";

const UserForm = () => {
    const user = useSelector(state => state.profile.user);
    const newUser = useSelector(state => state.profile.newUser);
    const dispatch = useDispatch();

    const handleUpdateInfo = () => {
        dispatch({
            type: UPDATE_USER,
            newUser: newUser
        })
    }

    const handleChangeFname = (event) => {
        dispatch(setNewUser({
            ...newUser,
            fname: event.target.value
        }))
    }

    const handleChangeEmail = (event) => {
        dispatch(setNewUser({
            ...newUser,
            email: event.target.value
        }))
    }

    const handleChangePhone = (event) => {
        dispatch(setNewUser({
            ...newUser,
            phone: event.target.value
        }))
    }

    return (
        <form>
            <div className="font-bold text-4xl mb-10">
                <span>Thông tin người dùng</span>
            </div>
            <div className="my-5 flex">
                <strong className="block w-[20%]">ID:</strong> <span>{user && user.id}</span>
            </div>
            <div className="my-5 flex">
                <strong className="w-[20%]">Họ và tên:</strong>
                <input
                    className="w-4/6 outline-none px-5 py-2 border border-gay-500 rounded-xl"
                    type="text"
                    value={newUser && newUser.fname}
                    onChange={handleChangeFname} />
            </div>
            <div className="my-5 flex">
                <strong className="w-[20%]">Email:</strong>
                <input
                    className="w-4/6 outline-none px-5 py-2 border border-gay-500 rounded-xl"
                    type="text"
                    value={newUser && newUser.email}
                    onChange={handleChangeEmail} />
            </div>
            <div className="my-5 flex">
                <strong className="w-[20%]">Sđt:</strong>
                <input
                    className="w-4/6 outline-none px-5 py-2 border border-gay-500 rounded-xl"
                    type="text"
                    value={newUser && newUser.phone}
                    onChange={handleChangePhone} />
            </div>
            <div className="mt-10 h-10">
                <button className="float-right bg-green-500 px-5 py-3 rounded-xl text-white hover:bg-green-700 duration-300" onClick={handleUpdateInfo}>Lưu thông tin</button>
            </div>
        </form>
    );
};

export default UserForm;