
import Cookies from "universal-cookie";

const cookies = new Cookies();


export const isLogin = () => {
    if (cookies.get("jwtToken")) {
      return true;
    }

  return false;
};
