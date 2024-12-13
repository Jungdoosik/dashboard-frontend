import React, { useEffect, useState } from "react";
import { Button, TextField, Typography, Container, Box, } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { getApiUrl } from '../../utils/ApiUrl'

const MainPage = () => {
  const url = getApiUrl();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("kakao_access_token");
    if (accessToken) {
      fetch("https://kapi.kakao.com/v2/user/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("User Info:", data);
          setUserInfo(data);
        })
        .catch((err) => console.error("Failed to fetch user info:", err));
    }
  }, []);

  const handleLogout = async () => {
    console.log("로그아웃");
    const kakaoAccessToken = localStorage.getItem("kakao_access_token");
    console.log(kakaoAccessToken)

    try {
      //카카오 로그아웃이면(로컬스토리지에 카카오토큰이 존재할시)
      if (kakaoAccessToken) {
        const kakaoResponse = await fetch(`${url}/user/kakao/logout`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${kakaoAccessToken}`,
          },
        })

        if (!kakaoResponse.ok) {
          throw new Error("카카오 로그아웃 실패");
        }
        console.log("카카오 로그아웃 성공");
        localStorage.removeItem("kakao_access_token");
        // React Router를 사용한 리다이렉트
        navigate("/");
      } else {
        //oauth 로그아웃과 관련없는 로그아웃(그냥 일반사용자가 id입력해서 로그아웃시)
        const appResponse = await fetch(`${url}/user/logout`, {
          method: "POST",
          credentials: "include",
        })

        if (!appResponse.ok) {
          throw new Error("로그아웃 실패");
        }

        console.log("로그아웃 성공");
        // React Router를 사용한 리다이렉트
        navigate("/");
      }

    } catch (error) {

    }
  }

  return (
    <div>
      <h1>메인 페이지</h1>
      {userInfo ? (
        <div>
          <h2>환영합니다, {userInfo.id}님!</h2>
          <Button
            variant="contained"
            color="primary"
            style={{}}
            onClick={handleLogout}
          >
            로그아웃
          </Button>
          {/* <img src={userInfo.properties.profile_image} alt="프로필 이미지" /> */}
        </div>
      ) : (
        <p>사용자 정보를 불러오는 중...</p>
      )}
    </div>
  );
};

export default MainPage;