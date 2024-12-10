import React, { useEffect, useState } from "react";

const MainPage = () => {
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

  return (
    <div>
      <h1>메인 페이지</h1>
      {userInfo ? (
        <div>
          <h2>환영합니다, {userInfo.id}님!</h2>
          {/* <img src={userInfo.properties.profile_image} alt="프로필 이미지" /> */}
        </div>
      ) : (
        <p>사용자 정보를 불러오는 중...</p>
      )}
    </div>
  );
};

export default MainPage;