import classNames from "classnames/bind";
import { useState } from "react";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import style from "./SidebarMenu.module.scss";

const SidebarMenu = (props) => {

    const [showSubmenu, setShowSubmenu] = useState(false);

    const cx = classNames.bind(style);

    const handleClick = () => {
        setShowSubmenu(!showSubmenu);
    };

    return (
        <div>
            <div className="flex items-center select-none hover:bg-gray-600 duration-300 rounded-3xl px-5 py-3 cursor-pointer" onClick={handleClick}>
                {!showSubmenu ? <AiOutlineRight className="text-white" /> : <AiOutlineDown className="text-white" />}
                <span className="text-white ml-2">{props.name}</span>
            </div>
            {
                showSubmenu &&
                <div className={cx("submenu")}>{props.children}</div>
            }
        </div>
    );
};

export default SidebarMenu;