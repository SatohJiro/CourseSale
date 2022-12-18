import React from "react";
import { useDispatch } from "react-redux";
const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(authActions.login());
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
            />
            <input
              className="p-4 border-2 rounded-lg"
              type="password"
              placeholder="123456"
            />
            <a href="/" className="text-link font-medium text-left">
              Forgot your password?
            </a>
            <button
              className="uppercase font-semibold w-full h-[56px] py-4 bg-link text-white rounded-lg"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Auth;
