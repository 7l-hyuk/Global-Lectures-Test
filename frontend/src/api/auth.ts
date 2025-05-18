import axiosInstance from "./axiosInstance";

interface LoginData {
  username: string;
  password: string;
}

interface SignupData {
  username: string;
  email: string;
  password: string;
}

// 회원가입
export const signup = (data: SignupData) => {
  return axiosInstance.post("/signup", data);
};

// 로그인
export const login = (data: LoginData) => {
  return axiosInstance.post("/login", data);
};

// 내 정보 불러오기
export const fetchMe = () => {
  return axiosInstance.get("/me");
};

// 로그아웃
export const logout = () => {
  return axiosInstance.post("/logout", {});
};
