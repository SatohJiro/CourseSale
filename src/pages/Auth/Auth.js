import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/slices/profileSlice";
import { LOGIN } from "../../redux/types/userTypes";
const Auth = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    dispatch({
      type: LOGIN,
      username: username,
      password: password,
      success: (user) => {
        sessionStorage.setItem('userId', user.id);
      },
      fail: () => {
        alert('Tài khoản hoặc mật khẩu không đúng!')
      }
    })
  };
  return (
    <>
      <div className="grid place-items-center h-[100vh] m-0 px-[24px] bg-login bg-no-repeat bg-cover animate-background-pan">
        <div className="w-[400px] px-[30px] pt-[70px] pb-[44px] rounded-3xl bg-white text-center">
          <h2 className="mt-2 mb-8 text-[32px] font-bold">Welcome back</h2>
          <form action="" className="grid gap-6">
            <input
              className="p-4 border-2 rounded-lg"
              type="text"
              placeholder="admin01"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              className="p-4 border-2 rounded-lg"
              type="password"
              placeholder="123456"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <a href="/" className="text-link font-medium text-left">
              Forgot your password?
            </a>
            <button
              className="uppercase font-semibold w-full py-4 bg-link text-white rounded-lg text-center select-none cursor-pointer"
              onClick={handleSubmit}
            >
              <span>Đăng nhập</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Auth;
