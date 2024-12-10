// process.env.REACT_APP_API_URL을 사용해 API URL을 가져옵니다.
const apiUrl = process.env.REACT_APP_API_URL;
// API URL을 반환하는 함수
export const getApiUrl = () => apiUrl;