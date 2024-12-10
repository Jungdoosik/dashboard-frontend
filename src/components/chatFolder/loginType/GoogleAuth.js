import React, { useState } from 'react';
import { useGoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const GoogleAuth = () => {
  const [user, setUser] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      console.log("Login Success", credentialResponse);
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <div>
      {user ? (
        <div>
          <h2>환영합니다, {user.name}</h2>
          <img src={user.imageUrl} alt="profile" />
        </div>
      ) : (
        // 여기서 클라이언트 ID를 넣습니다.
        <button
          onClick={login}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <img
            src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
            alt=""
            width="40"
          />
        </button>
      )}
    </div>
  );
};

export default GoogleAuth;