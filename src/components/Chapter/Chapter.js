import classNames from "classnames/bind";
import styles from "./Chapter.module.scss";

import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlinePlus,
  AiOutlineDelete,
  AiOutlineSetting,
} from "react-icons/ai";
import { useState } from "react";

const cx = classNames.bind(styles);
function Chapter() {
  const [isShow, setShow] = useState(false);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-content")}>
        <div className={cx("content-chapter")} onClick={() => setShow(!isShow)}>
          <div className={cx("desc-wrapper")}>
            {isShow ? (
              <AiOutlineMinusCircle
                className={cx("icon")}
              ></AiOutlineMinusCircle>
            ) : (
              <AiOutlinePlusCircle className={cx("icon")}></AiOutlinePlusCircle>
            )}
            <div className={cx("desc")}>1. Giới thiệu</div>
          </div>
          <div className={cx("num-lession")}>2 Bài học</div>
        </div>
        <div className={cx("tools")}>
          <AiOutlineSetting className={cx("tools-icon")} />
          <AiOutlineDelete className={cx("tools-icon")} />
        </div>
      </div>
      {isShow && (
        <div className={cx("sub-content-wrapper")}>
          <div className={cx("content-chapter", "sub-wrapper")}>
            <div className={cx("desc-wrapper")}>
              <div className={cx("desc")}>1.1 Giới thiệu bài học</div>
            </div>
            <div className={cx("num-lession")}>3:33</div>
          </div>
          <div className={cx("content-chapter", "sub-wrapper")}>
            <div className={cx("desc-wrapper")}>
              <div className={cx("desc")}>1.2 Giới thiệu bài học</div>
            </div>
            <div className={cx("num-lession")}>3:33</div>
          </div>
          <div className={cx("content-chapter", "sub-wrapper")}>
            <div className={cx("desc-wrapper")}>
              <div className={cx("desc")}>1.3 Giới thiệu bài học</div>
            </div>
            <div className={cx("num-lession")}>3:33</div>
          </div>
          <div className={cx("content-chapter", "sub-wrapper")}>
            <div className={cx("desc-wrapper")}>
              <div className={cx("desc")}>Thêm bài học</div>
            </div>
            <AiOutlinePlus />
          </div>
        </div>
      )}
    </div>
  );
}

export default Chapter;
