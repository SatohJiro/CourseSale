import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";

const UserNav = () => {

    const url = "https://i.pinimg.com/736x/28/43/bb/2843bb8deeec72833bb5ecb42ea81c29.jpg";
    const avtClassBg = "bg-[url('" + url + "')]";

    const [showSubmenu, setShowSubmenu] = useState(false);
    let userRef = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutSide);
    });

    const handleClick = () => {
        setShowSubmenu(!showSubmenu);
    }

    const handleClickOutSide = (event) => {
        if (!userRef.current.contains(event.target))
            setShowSubmenu(false);
    };

    return (
        <div ref={userRef} className="relative">
            <div className={"h-full flex items-center select-none cursor-pointer hover:bg-[#383838] px-2 "} onClick={handleClick}>
                <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img src={url} />
                </div>
                <span className="text-[#ffffff] ml-5 font-bold">Nguyen Minh Chau</span>
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
                            <Link className="flex py-2 items-center hover:bg-[#383838]">
                                <AiOutlineLogout className="ml-2" />
                                <span className="ml-2">Đăng xuất</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            }

        </div>
    );
}

export default UserNav;