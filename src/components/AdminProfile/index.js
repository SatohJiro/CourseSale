import React from 'react';
import classNames from 'classnames/bind';
import style from './AdminProfileStyle.module.scss';
import avatar from '../assets/img/profile/avatar.jpg';

const cx = classNames.bind(style);


function AdminProfile() {

  return (
    <>
      <form>
        <div className={cx('avatar-container')}>
          <img src={avatar}></img>
          <div className={cx('btn-container')}>
            <button>Đổi ảnh</button>
            <button>Xóa ảnh</button>
          </div>
        </div>

        <div className={cx('infor-container')}>
          <fieldset>
            <legend>Họ và tên</legend>
            <input type='text' ></input>
          </fieldset>

          <fieldset>
            <legend>Ngày sinh</legend>
            <input type='date' ></input>
          </fieldset>

          <fieldset>
            <legend>Địa chỉ</legend>
            <input type='text' ></input>
          </fieldset>

          <fieldset>
            <legend>Email</legend>
            <input type='text' ></input>
          </fieldset>

          <fieldset>
            <legend>Số điện thoại</legend>
            <input type='text' ></input>
          </fieldset>

          <fieldset>
            <legend>Quyền</legend>
            <input type='text' ></input>
          </fieldset>
        </div>

       <div className={cx('btn-submit-container')}> <button type='submit'>Lưu</button></div>
      </form>

    </>
  );
}
export default AdminProfile;