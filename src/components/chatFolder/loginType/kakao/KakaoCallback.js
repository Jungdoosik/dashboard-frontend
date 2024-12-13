import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getApiUrl } from '../../../../utils/ApiUrl'

const KakaoCallback = () => {
  const navigate = useNavigate();
  const url = getApiUrl();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      console.log("Authorization Code:", code); // 인증 코드 출력

      // 백엔드로 인증 코드 전달
      console.log("야여기까진 되는듯")
      fetch(`${url}/user/kakao/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Access Token:", data.access_token);
          localStorage.setItem("kakao_access_token", data.access_token);
          navigate("/main"); // 메인 페이지로 이동
        })
        .catch((err) => console.error("Error during Kakao login:", err));
    }
  }, [navigate, url]);

  return <div>로그인 처리 중입니다...</div>;
};

export default KakaoCallback;