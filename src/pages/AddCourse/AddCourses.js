import classNames from "classnames/bind";
import styles from "./AddCourse.module.scss";
import { useState, useEffect } from "react";
import Chapter from "~/components/Chapter";

import { AiOutlinePlus } from "react-icons/ai";

const cx = classNames.bind(styles);
function AddCourse() {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };
  return (
    <div className={cx("wrapper")}>
      <span className={cx("title-page")}>Thêm Khóa Học</span>
      <div className={cx("course-wrapper")}>
        <div className={cx("desc-wrapper")}>
          <div className={cx("content-wrapper")}>
            <div className={cx("desc-item", "title-item")}>
              <div className={cx("input-wrapper")}>
                <input
                  className={cx("input")}
                  id="title"
                  placeholder="Tiêu đề"
                ></input>
              </div>
            </div>

            <div className={cx("detail-wrapper")}>
              <div className={cx("price-cate-wrapper")}>
                <div className={cx("desc-item", "price-item")}>
                  <div className={cx("input-wrapper")}>
                    <input
                      className={cx("input")}
                      id="title"
                      placeholder="Giá"
                    ></input>
                  </div>
                </div>

                <div className={cx("desc-item", "cate-item")}>
                  <div className={cx("input-wrapper")}>
                    <input
                      className={cx("input")}
                      id="title"
                      placeholder="Thể loại"
                    ></input>
                  </div>
                </div>
              </div>
              <div className={cx("image-wrapper")}>
                <div className={cx("desc-item", "image-item")}>
                  <div className={cx("input-wrapper")}>
                    <input
                      type="file"
                      alt="image"
                      accept="image/png, image/gif, image/jpeg"
                      onChange={onSelectFile}
                      className={cx("input")}
                    ></input>
                  </div>
                </div>
                <div className={cx("image-preview-wrapper")}>
                  {selectedFile && (
                    <img className={cx("image")} src={preview} alt="img"></img>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={cx("benefit-wrapper")}>
            <div className={cx("desc-title")}>Lợi ích khóa học</div>
            <div className={cx("desc-item")}>
              <div className={cx("input-wrapper")}>
                <input
                  className={cx("input")}
                  placeholder="1."
                  id="benefit"
                ></input>
              </div>
            </div>

            <div className={cx("desc-item")}>
              <div className={cx("input-wrapper")}>
                <input
                  className={cx("input")}
                  placeholder="2."
                  id="benefit"
                ></input>
              </div>
            </div>
            <div className={cx("desc-item")}>
              <div className={cx("input-wrapper")}>
                <input
                  className={cx("input")}
                  placeholder="3."
                  id="benefit"
                ></input>
              </div>
            </div>

            <div className={cx("desc-item")}>
              <div className={cx("input-wrapper")}>
                <input
                  className={cx("input")}
                  placeholder="4."
                  id="benefit"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("desc-course-wrapper")}>
          <textarea
            className={cx("text-wrapper")}
            placeholder="Mô tả chi tiết khóa học"
          ></textarea>
        </div>
      </div>
      <div className={cx("chapter-wrapper")}>
        <Chapter />
        <Chapter />
        <Chapter />
        <Chapter />
        <div className={cx("content-chapter", "sub-wrapper")}>
          <div className={cx("desc-wrapper")}>
            <div className={cx("desc")}>Thêm Chương</div>
          </div>
          <AiOutlinePlus />
        </div>
      </div>
      <div className={cx("submit-wrapper")}>
        <button className={cx("submit-btn")}>Hoàn Thành</button>
      </div>
    </div>
  );
}

export default AddCourse;
