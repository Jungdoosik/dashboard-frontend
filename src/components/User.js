import axios from "axios";
import { useState } from "react";
import { getApiUrl } from '../utils/ApiUrl'

function UserList() {
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

  const getList = async (e) => {
    try {
      // 스프링부트 백엔드에 GET 요청 보내기
      const url = getApiUrl();
      const response = await axios.get(`${url}/user/selectList`);
      setUserList(response.data);  // 응답 데이터를 상태로 저장
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }

  return (
    <>
      <form onSubmit={submit}>
        <div>
          <label>이름 : </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>휴대폰번호 : </label>
          <input type="text" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} />
        </div>
        <button type="submit"> 저장 </button>
      </form >
      <div>
        <label>저장된 사용자 List</label>
        <button onClick={getList}>저장된 사용자</button>
        <div>
          {userList.map((ele, i) => {
            return (
              <>
                <div key={i}>
                  <label>{ele.name}</label>
                  <label>{ele.phoneNum}</label>
                </div>
              </>
            )
          }
          )}
        </div>
      </div>
    </>
  )
}
export default UserList;