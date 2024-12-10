import React, { useState } from 'react';
import axios from 'axios';
import { getApiUrl } from './utils/ApiUrl';

const Test = () => {
  const [responseData, setResponseData] = useState(null);

  const handleClick = async () => {
    try {
      // 스프링부트 백엔드에 GET 요청 보내기
      const url = getApiUrl();
      const response = await axios.get(`${url}/user/selectList`);
      setResponseData(response.data);  // 응답 데이터를 상태로 저장
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div>
      <h1>Test API Communication</h1>
      <button onClick={handleClick}>Get Data from Backend</button>

      {responseData && (
        <div>
          <h2>Response from Backend:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Test;