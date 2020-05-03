import React, { useState } from "react";
const Button = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <button data-testid="btn-login" onClick={() => setIsLogin(true)}>
        登入
      </button>
      <button data-testid="btn-logout" onClick={() => setIsLogin(false)}>
        登出
      </button>
      <div data-testid="content">{isLogin ? "登入中" : "未登入"}</div>
    </div>
  );
};

export default Button;
