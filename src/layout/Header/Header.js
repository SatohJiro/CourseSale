import Logo from '../../components/Logo';
import Search from '../../components/Search';
import UserNav from '../../components/UserNav';

function Header() {
    return (
        <div className="bg-[#202129] flex justify-between h-[65px] border-b-2 border-gray-700 px-10 py-2 fixed top-0 w-full z-[3]">
            <Logo />
            <Search />
            <UserNav />
        </div>
    );
}

export default Header;