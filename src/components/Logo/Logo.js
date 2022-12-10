import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="select-none cursor-pointer flex items-center">
            <Link to="/">
                <span className="text-[#ffffff] font-nko text-[30px]">CourseOnline</span>
            </Link>
        </div>
    );
}

export default Logo;