import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/chatFolder/LoginPage"
import KakaoCallback from "./components/chatFolder/loginType/kakao/KakaoCallback";
import MainPage from "./components/chatFolder/MainPage"
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="975393392824-j7nbrg9kjfkt4klj8p27kof777epk8vs.apps.googleusercontent.com" >
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/oauth/callback" element={<KakaoCallback />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
