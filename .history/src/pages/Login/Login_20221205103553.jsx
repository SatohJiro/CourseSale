import React from "react";

const Login = () => {
  return (
    <>
      <div className="grid place-items-center">
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
