import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss'

import Header from "~/layout/Header";
import Sidebar from "~/layout/Sidebar";

const cx = classNames.bind(style);
function DefaultLayout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sidebar></Sidebar>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;