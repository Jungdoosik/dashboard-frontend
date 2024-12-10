import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/chatFolder/LoginPage"
import KakaoCallback from "./components/chatFolder/loginType/kakao/KakaoCallback";
import MainPage from "./components/chatFolder/MainPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/oauth/callback" element={<KakaoCallback />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
