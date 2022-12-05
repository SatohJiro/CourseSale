import classNames from "classnames/bind";
import style from "./Sidebar.module.scss";

import { ROUTE_NAME } from "~/routes/routesConstant";
import { AiOutlineHome, AiOutlineUnorderedList } from "react-icons/ai";

import { Link } from "react-router-dom";
import { useState } from "react";

const cx = classNames.bind(style);

const listTab = [
  {
    name: "login",
    path: ROUTE_NAME.LOGIN,
    title: "Đăng nhập",
    icon: <AiOutlineHome className={cx("menu-icon")} />,
  },
  {
    name: "home",
    path: ROUTE_NAME.ROOT,
    title: "Trang chủ",
    icon: <AiOutlineHome className={cx("menu-icon")} />,
  },
  {
    name: "courses",
    path: ROUTE_NAME.COURSES,
    title: "Khóa học",
    icon: <AiOutlineUnorderedList className={cx("menu-icon")} />,
  },
];
function Sidebar() {
  const [tabActive, setTabActive] = useState(listTab[0].name);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("menu-wrapper")}>
        {listTab.map((item, index) => {
          return (
            <Link
              to={item.path}
              className={cx(
                "menu-item",
                tabActive === item.name ? "active" : null
              )}
              key={index}
              onClick={() => {
                setTabActive(item.name);
              }}
            >
              {item.icon}
              <span className={cx("menu-title")}>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
