import classNames from 'classnames/bind';
import Logo from '../../components/Logo';
import Search from '../../components/Search';
import UserNav from '../../components/UserNav';
import style from './Header.module.scss'

const cx = classNames.bind(style);
function Header() {
    return (
        <div className="bg-[#202129] flex justify-between h-[65px] border-b-2 border-gray-700">
            <Logo />
            <Search />
            <UserNav />
        </div>
    );
}

export default Header;