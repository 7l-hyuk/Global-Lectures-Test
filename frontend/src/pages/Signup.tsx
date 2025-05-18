import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/auth";
import styles from "../css/Signup.module.css"

interface InputProps {
  label: string;
  placeholder: string;
  description: string;
  value: string;
  onChange: (e: string) => void;
}


const Input: React.FC<InputProps> = ({label, description, placeholder, value, onChange}) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
        <small>{description}</small>
      </div>
    </div>
  );
}


const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await signup({username, email, password});
      alert("회원가입 성공! 로그인 해주세요.");
      navigate("/login");
    } catch (err) {
      alert("회원가입 실패");
    }
  };

  return (
    <div className={styles.SignupFormContainer}>
      <h1>Register</h1>
      <Input label="Choose Username" description="Only letters, numbers, - and _ can be used." placeholder="Username" value={username} onChange={setUsername}/>
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>회원가입</button>
    </div>
  );
};

export default Signup;
