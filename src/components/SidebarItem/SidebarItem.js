import classNames from "classnames/bind";
import styles from "./SidebarItem.module.scss";

import { Link } from "react-router-dom";
import { useState } from "react";

const cx = classNames.bind(styles);
function SidebarItem({ data, isActive, setTabActive, haveSubMenu }) {
  const [subTabActive, setsubTabActive] = useState(data.subMenu[0].name);

  return (
    <div className={cx("wrapper")}>
      <Link
        to={data.path}
        className={cx("menu-item", isActive ? "active" : null)}
        onClick={() => {
          setsubTabActive(data.subMenu[0].name);
          setTabActive(data.name);
        }}
      >
        {data.icon}
        <span className={cx("menu-title")}>{data.title}</span>
      </Link>
      {isActive &&
        haveSubMenu &&
        data.subMenu.map((item, index) => {
          return (
            <Link
              to={item.path}
              className={cx(
                "menu-item",
                "menu-sub-item",
                subTabActive === item.name ? "active" : null
              )}
              onClick={() => {
                setsubTabActive(item.name);
              }}
              key={index}
            >
              <span className={cx("menu-title")}>{item.title}</span>
            </Link>
          );
        })}
    </div>
  );
}

export default SidebarItem;
