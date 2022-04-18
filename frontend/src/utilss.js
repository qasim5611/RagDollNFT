
import Cookies from "universal-cookie";
const TOKEN_KEY = "jwt";


const cookies = new Cookies();

export const login = () => {
  localStorage.setItem(TOKEN_KEY, "TestLogin");
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
    
//   if (cookies.get("jwtToken")) {
//     return true;
//   }

  return false;
};
