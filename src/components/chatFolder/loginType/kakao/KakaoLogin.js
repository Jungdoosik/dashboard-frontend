import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";

const KakaoLogin = () => {
  const [code, setCode] = useState(null);

  useEffect(() => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      window.Kakao.init("f441ba91c9a3dc52f5ed1fab65840fcc"); // JavaScript 키
      console.log("Kakao SDK Initialized:", window.Kakao.isInitialized());
    }
  }, []);

  const handleLogin = () => {
    if (window.Kakao && window.Kakao.isInitialized()) {
      window.Kakao.Auth.authorize({
        redirectUri: "http://localhost:3000/oauth/callback",
      });
    } else {
      console.error("Kakao SDK is not initialized");
    }
  };

  return (
    <div>
      {!code && (
        <button
          onClick={handleLogin}
          style={{
            backgroundColor: "#FEE500",
            border: "none",
            borderRadius: "4px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          <img
            src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
            alt="Kakao Login"
            width="24"
            style={{ verticalAlign: "middle", marginRight: "8px" }}
          />
          카카오 로그인
        </button>
      )}
    </div>
  );
};

export default KakaoLogin;