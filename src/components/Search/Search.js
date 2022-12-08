import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
    return (
        <form className="flex items-center w-1/4 relative mt-0">
            <input 
                className="outline-none px-[40px] py-2 w-full rounded-3xl"
                type="search" 
                placeholder="Tìm kiếm..."/>
            <AiOutlineSearch className="absolute left-4 text-[#a19a9a] text-[20px]"/>
        </form>
    );
}

export default Search;