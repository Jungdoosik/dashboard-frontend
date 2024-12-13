import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
} from '@mui/material';
import axios from "axios";
import { getApiUrl } from '../../utils/ApiUrl'
// import NaverLogin from './loginType/NaverLogin';
import GoogleAuth from './loginType/google/GoogleAuth'
import KakaoLogin from './loginType/kakao/KakaoLogin';

function ChatMain() {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [userList, setUserList] = useState([]);

  const url = getApiUrl();

  const submit = async (e) => {
    e.preventDefault();
    try {
      //인풋에 입력한 사용자 데이터 저장
      const response = await axios.post(`${url}/user/saveUser`, { name, phoneNum });
      console.log(response.data);
      setName('');
      setPhoneNum('');
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Container maxWidth="xs">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          bgcolor="#f5f5f5"
          p={3}
          borderRadius={2}
          boxShadow="0 2px 8px rgba(0, 0, 0, 0.1)"
        >
          <Typography variant="h4" gutterBottom color='black'>
            로그인
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '16px' }}
            type='submit'
            onClick={submit}
          >
            Login
          </Button>
          {/* <NaverLogin /> */}
          <GoogleAuth />
          <KakaoLogin />
        </Box>
      </Container>
    </>
  )
}

export default ChatMain;