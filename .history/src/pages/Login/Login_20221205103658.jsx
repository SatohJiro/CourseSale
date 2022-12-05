import React from "react";

const Login = () => {
  return (
    <>
      <div className="grid place-items-center m-0 px-[24px] bg-no-repeat bg-cover">
        <h2>Welcome back</h2>
        <form action="">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <butotn>Login</butotn>
        </form>
      </div>
    </>
  );
};

export default Login;
