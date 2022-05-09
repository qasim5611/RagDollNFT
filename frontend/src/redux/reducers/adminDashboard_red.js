import { SITE_GENRL, GETSITE_GENRL } from "../constat";
import { useNavigate } from "react-router-dom";

import history from "../../components/history/history";
import Cookies from "universal-cookie";


let token = localStorage.getItem("token");




var initState = {
  SiteGenrlmsg: null,

  GetgnrlsiteData: [{}],
};

export function adminDashboard_red(state = initState, action) {
  //  const navigate = useNavigate();

  const cookies = new Cookies();

  switch (action.type) {
    case SITE_GENRL:
      // state.SiteGenrlmsg = "General Setting Succesfully Applied.";
      console.log("reducer run SITE_GENRL", action.payload);
      // setTimeout(() => {
      //   state.msg = null;
      // });
      break;

    case GETSITE_GENRL:
      // state.SiteGenrlmsg = "General Setting Succesfully Applied.";
      console.log("reducer run SITE_GENRL");

      console.log(action.payload);

      return {
        ...state,
        // data: action.payload,
        GetgnrlsiteData: action.payload,
      };
      break;
    default:
      break;
  }
  return state;
}
