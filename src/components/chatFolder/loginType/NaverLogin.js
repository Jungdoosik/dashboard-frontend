import React, { useEffect } from 'react';
import {
  Button,
} from '@mui/material';

const NaverLogin = () => {
  useEffect(() => {
    // 네이버 로그인 SDK 초기화
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: 'CYtoP5XsksvO3brqJiWl', // 네이버에서 발급받은 Client ID
      callbackUrl: 'http://localhost:3000/main', // 로그인 후 리디렉션될 URL
      isPopup: false, // 팝업을 사용할지 여부
      loginButton: { color: 'green', type: 1, height: 50 } // 버튼 디자인 설정
    });
    naverLogin.init(); // 네이버 로그인 초기화
  }, []);

  return (
    <div>
      <Button
        id="naverIdLogin"
        fullWidth
        style={{ marginTop: '16px' }}
      >네이버 로그인</Button>
    </div>
  );
};

export default NaverLogin;