import React from 'react';
import classNames from 'classnames/bind';
import style from './AddCourseFormStyle.module.scss'

import Header from "~/layout/components/Header";
import Sidebar from "~/layout/components/Sidebar";

const cx = classNames.bind(style);

function AddCourseForm() {

    window.addEventListener('load', () => {
        var now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        now.setMilliseconds(null)
        now.setSeconds(null)
        document.getElementById('current-time').value = now.toISOString().slice(0, -1);
    });

    return (

        <div>
            <div className={cx("title")}><p><b>Thêm khóa học mới</b></p></div>

            <form name="add-new-course" action='/add-course'>

                <div class={cx("course-infor")}>
                    <label><b>Tên khóa học</b></label>
                    <input type="text"></input>
                </div>

                <div class={cx("course-infor")}>
                    <label><b>Thể loại</b></label>
                    <input type="text"></input>
                </div>

                <div class={cx("course-infor")}>
                    <label><b>Mô tả khóa học</b></label>
                    <input type="text"></input>
                </div>

                <div class={cx("course-infor")}>
                    <label><b>Giá tiền </b>(Đồng)</label>
                    <input type="text"></input>
                </div>

                <div class={cx("course-infor")}>
                    <label><b>Manufacture</b></label>
                    <input type="datetime-local" id="current-time"></input>
                </div>

                <div class={cx("btn-container")}>
                    <button type="submit">Thêm</button>
                </div>

            </form>

        </div>
    );
}
export default AddCourseForm;