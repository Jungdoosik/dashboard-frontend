import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getApiUrl } from '../../../../utils/ApiUrl'
import { useGoogleLogin, GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const GoogleAuth = () => {
  const url = getApiUrl();
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate(); // 페이지 이동을 위한 hook

  const handleLoginSuccess = (response) => {
    const token = response.credential;
    // 토큰을 백엔드로 전달하여 사용자 정보 저장
    fetch(`${url}/user/google/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setUserInfo(data); // 백엔드에서 받아온 유저 정보
        navigate("/main"); // 로그인 후 /main 페이지로 이동
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleLoginFailure = (error) => {
    console.log("Login Failed", error);
  };

  return (
    <div>
      {/* // 구글 API 콘솔에서 받은 클라이언트 ID */}
      <GoogleLogin
        onSuccess={handleLoginSuccess}      // 로그인 성공 처리
        onError={handleLoginFailure}        // 로그인 실패 처리
        cookiePolicy={'single_host_origin'} // 설정된 출처와 일치하게 만듬
        redirectUri="http://localhost:3000/oauth/google" // 리디렉션 URI (백엔드에서 처리할 URL)
      />
    </div>
  );
};

export default GoogleAuth;