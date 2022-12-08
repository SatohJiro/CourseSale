import styles from "./Courses.module.scss";
import classNames from "classnames/bind";
import CourseItem from "~/components/CourseItem";

import { BiSortAlt2 } from "react-icons/bi";

const cx = classNames.bind(styles);
function Courses() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header-course")}>
        <div className={cx("check-wrapper")}>
          <input type={"checkbox"}></input>
        </div>
        <div className={cx("name-wrapper")}>
          <span className={cx("name-product")}>COURSE NAME</span>
          <BiSortAlt2 className={cx("sort-icon")} />
        </div>
        <div className={cx("price-wrapper")}>
          <span className={cx("price-product")}> PRICE</span>
          <BiSortAlt2 className={cx("sort-icon")} />
        </div>
        <div className={cx("cate-wrapper")}>
          <span className={cx("cate-product")}> CATEGORY</span>
          <BiSortAlt2 className={cx("sort-icon")} />
        </div>
        {/* <div className={cx("tags-wrapper")}>
          <span className={cx("tags-product")}> TAGS </span>
          <BiSortAlt2 className={cx("sort-icon")} />
        </div> */}

        <div className={cx("pubdate-wrapper")}>
          <span className={cx("pubdate-product")}>PUBLISHED ON</span>
          <BiSortAlt2 className={cx("sort-icon")} />
        </div>
      </div>
      <div className={cx("content-wrapper")}>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </div>

      <div className={cx("page-wrapper")}>
        <div className={cx("page-item")}>
          <span>1</span>
        </div>
        <div className={cx("page-item")}>
          <span>2</span>
        </div>
        <div className={cx("page-item")}>
          <span>3</span>
        </div>
        <div className={cx("page-item")}>
          <span>4</span>
        </div>
      </div>
    </div>
  );
}

export default Courses;
