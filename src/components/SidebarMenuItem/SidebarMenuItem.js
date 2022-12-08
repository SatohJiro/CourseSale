import { Link } from "react-router-dom";

const SidebarMenuItem = (props) => {

    return (
        <Link to={props.path} className="flex items-center w-full hover:bg-gray-600 duration-300 rounded-3xl px-5 py-3">
            {props.icon}
            <span className="text-white ml-2">{props.name}</span>
        </Link>
    );

}

export default SidebarMenuItem;