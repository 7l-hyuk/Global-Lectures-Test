import React, { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/auth";
import styles from "../css/Signup.module.css"

interface InputProps {
  label: string;
  description: string;
  value: string;
  type: string;
  onChange: (e: string) => void;
}


const Input: React.FC<InputProps> = ({label, type, description, value, onChange}) => {
  return (
    <div className={styles.row}>
      <label className={styles.Label}>{label}</label>
      <div className={styles.InputContainer}>
        <input
          className={styles.Input}
          value={value}
          type={type}
          onChange={(e) => onChange(e.target.value)} 
        />
        <small className={styles.Description}>{description}</small>
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
      <div>
        <Input 
          label="Choose Username"
          type="text"
          description="Only letters, numbers, - and _ can be used." 
          value={username} 
          onChange={setUsername}
        />
        <Input 
          label="Email Address"
          type="text"
          description="Not used for marketing. We'll never share your email with anyone else." 
          value={email} 
          onChange={setEmail} 
        />
        <Input 
          label="Password"
          type="password"
          description="At least 8 characters." 
          value={password} 
          onChange={setPassword} 
        />
        <button onClick={handleSignup}>회원가입</button>
      </div>
    </div>
  );
};

export default Signup;
