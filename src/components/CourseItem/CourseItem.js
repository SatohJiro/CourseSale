import styles from "./CourseItem.module.scss";
import classNames from "classnames/bind";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useState } from "react";

const cx = classNames.bind(styles);
function CourseItem() {
  const [starActive, setStarActive] = useState(false);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("check-wrapper")}>
        <input type={"checkbox"}></input>
      </div>
      <div className={cx("img-wrapper")}>
        <span className={cx("img-product")}>
          <img
            alt="img"
            src="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png"
          ></img>
        </span>
      </div>
      <div className={cx("name-wrapper")}>
        <span className={cx("name-product")}> Khóa học abc xyz 123 45</span>
      </div>
      <div className={cx("price-wrapper")}>
        <span className={cx("price-product")}> 250$</span>
      </div>
      <div className={cx("cate-wrapper")}>
        <span className={cx("cate-product")}> Cate Name</span>
      </div>
      <div className={cx("tags-wrapper")}>
        <span className={cx("tags-product")}> tag 1 </span>
        <span className={cx("tags-product")}> tag 1 </span>
        <span className={cx("tags-product")}> tag 1 </span>
        <span className={cx("tags-product")}> tag 123456 </span>
      </div>
      <div
        className={cx("star-wrapper")}
        onClick={() => {
          setStarActive(!starActive);
        }}
      >
        {starActive ? (
          <AiFillStar className={cx("star-icon")} />
        ) : (
          <AiOutlineStar className={cx("star-icon")} />
        )}
      </div>
      <div className={cx("pubdate-wrapper")}>
        <span className={cx("pubdate-product")}>12/11/2001</span>
      </div>
    </div>
  );
}

export default CourseItem;
