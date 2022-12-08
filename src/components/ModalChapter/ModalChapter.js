import classNames from "classnames/bind";
import styles from "./ModalChapter.module.scss";

const cx = classNames.bind(styles);
function ModalChapter({ setShowModal }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content-wrapper")}>
        <div className={cx("header")}>
          <div className={cx("title")}>Chỉnh sửa chương</div>
          <div className={cx("close")} onClick={() => setShowModal(false)}>
            X
          </div>
        </div>
        <div className={cx("content")}>
          <div className={cx("title-input")}>
            <div className={cx("desc-item", "title-item")}>
              <div className={cx("input-wrapper")}>
                <input
                  className={cx("input")}
                  id="title"
                  placeholder="Tiêu đề Chương"
                ></input>
              </div>
            </div>
          </div>

          <div className={cx("lessons-input")}>
            <div className={cx("desc-item", "lesson-item")}>
              <div className={cx("order-lesson")}>1.</div>
              <div className={cx("input-wrapper")}>
                <input
                  className={cx("input")}
                  id="title"
                  placeholder="Tiêu đề bài học"
                ></input>
              </div>
              <div className={cx("video-wrapper")}>
                <input
                  className={cx("input")}
                  id="video"
                  placeholder="link video bài học"
                ></input>
              </div>
            </div>

            <div className={cx("desc-item", "lesson-item")}>
              <div className={cx("order-lesson")}>1.</div>
              <div className={cx("input-wrapper")}>
                <input
                  className={cx("input")}
                  id="title"
                  placeholder="Tiêu đề bài học"
                ></input>
              </div>
              <div className={cx("video-wrapper")}>
                <input
                  className={cx("input")}
                  id="video"
                  placeholder="link video bài học"
                ></input>
              </div>
            </div>

            <div className={cx("desc-item", "lesson-item")}>
              <div className={cx("order-lesson")}>1.</div>
              <div className={cx("input-wrapper")}>
                <input
                  className={cx("input")}
                  id="title"
                  placeholder="Tiêu đề bài học"
                ></input>
              </div>
              <div className={cx("video-wrapper")}>
                <input
                  className={cx("input")}
                  id="video"
                  placeholder="link video bài học"
                ></input>
              </div>
            </div>

            <div className={cx("desc-item", "lesson-item")}>
              <div className={cx("order-lesson")}>1.</div>
              <div className={cx("input-wrapper")}>
                <input
                  className={cx("input")}
                  id="title"
                  placeholder="Tiêu đề bài học"
                ></input>
              </div>
              <div className={cx("video-wrapper")}>
                <input
                  className={cx("input")}
                  id="video"
                  placeholder="link video bài học"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("submit-btn")}>
          <button className={cx("btn")}>Hoàn Thành</button>
        </div>
      </div>
    </div>
  );
}

export default ModalChapter;
