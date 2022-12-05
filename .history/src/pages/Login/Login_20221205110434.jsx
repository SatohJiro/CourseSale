import React from "react";

const Login = () => {
  return (
    <>
      <div className="grid place-items-center m-0 px-[24px] bg-login bg-no-repeat bg-cover animate-background-pan">
        <div className="w-[400px] px-[30px] pt-[70px] pb-[44px] round-[24px] bg-white text-center">
          <h2 className="mt-2 mb-8 text-[32px] font-bold">Welcome back</h2>
          <form action="" className="grid gap-4">
            <input className="p-2" type="text" placeholder="Username" />
            <input className="p-2" type="password" placeholder="Password" />
            <a href="#" className="text-link font-medium">
              Forgot your password?
            </a>
            <butotn className="uppercase font-semibold w-full h-[56px] py-4">
              Login
            </butotn>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
