import React from "react";

const Login = () => {
  return (
    <>
      <div className="grid place-items-center m-0 px-[24px] bg-login bg-no-repeat bg-cover animate-background-pan">
        <div className="w-[400px] px-[30px] pt-[70px] pb-[44px] round-[24px] bg-white text-center">
          <h2>Welcome back</h2>
          <form action="" className="grid">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <butotn>Login</butotn>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;