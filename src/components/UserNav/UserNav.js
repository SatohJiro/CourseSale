// import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from '../../redux/slices/profileSlice';

const UserNav = () => {

    const url = "https://i.pinimg.com/736x/28/43/bb/2843bb8deeec72833bb5ecb42ea81c29.jpg";
    const dispatch = useDispatch();
    const user = useSelector(state => state.profile.user);

    const [showSubmenu, setShowSubmenu] = useState(false);
    let userRef = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutSide);
    });

    const handleClick = () => {
        setShowSubmenu(!showSubmenu);
    }

    const handleClickOutSide = (event) => {
        if (userRef.current != null && !userRef.current.contains(event.target))
            setShowSubmenu(false);
    };

    const handleLogout = () => {
        sessionStorage.clear();
        dispatch(setUser(undefined));
        window.location.reload();
    }

    return (
        <div ref={userRef} className="relative">
            <div className={"h-full flex items-center select-none cursor-pointer hover:bg-[#383838] px-2 "} onClick={handleClick}>
                <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img src={user && user.avtUrl ? user.avtUrl : url} alt="img" />
                </div>
                <span className="text-[#ffffff] ml-5 font-bold min-w-[150px] block">{user && user.fname}</span>
                {
                    showSubmenu ?
                        <AiFillCaretDown className="text-[#ffffff] ml-5 text-base" />
                        :
                        <AiFillCaretUp className="text-[#ffffff] ml-5 text-base" />
                }
            </div>
            {
                showSubmenu &&
                <div className={"absolute bg-[#202129] rounded-xl w-full border-2 border-solid border-gray-500 z-99"}>
                    <ul>
                        <li>
                            <Link to="/profile" className="flex py-2 items-center hover:bg-[#383838]">
                                <AiOutlineUser className="ml-2" />
                                <span className="ml-2">Trang cá nhân</span>
                            </Link>
                        </li>
                        <li>
                            <div className="flex py-2 items-center hover:bg-[#383838] text-white select-none cursor-pointer" onClick={handleLogout}>
                                <AiOutlineLogout className="ml-2" />
                                <span className="ml-2">Đăng xuất</span>
                            </div>
                        </li>
                    </ul>
                </div>
            }

        </div>
    );
}

export default UserNav;