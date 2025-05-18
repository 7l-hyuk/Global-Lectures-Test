import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../api/auth";
import { useAuth } from "../context/AuthContext";


const Login: React.FC = () => {
  const {fetchCurrentUser} = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login({username, password})
      await fetchCurrentUser();
      navigate("/");
    } catch (err) {
      alert("로그인 실패");
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default Login;
