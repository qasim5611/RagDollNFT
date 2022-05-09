import axios from "axios";
import { SITE_GENRL, GETSITE_GENRL, SITE_SOCIALS } from "../constat";
import API from "../url";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import { getTableBodyUtilityClass } from "@mui/material";







export function setGeneralset(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

  console.log("body");
  console.log(body);


    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    let genralData = new FormData();

    for (var item in body) {
      genralData.append(item, body[item]);
    }
    console.log("setGeneralset");
    console.log(genralData);
    console.log(config);


    axios
      .post(API + "/setGeneral", genralData, config)
      .then((resp) => {
        // successFul("success");
        dispatch({
          type: SITE_GENRL,
          payload: resp.data,
        });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}





export function editsocial(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("body");
    console.log(body);

    axios
      .post(API + "/setSocialLinks" , body)
      .then((resp) => {

        console.log(resp);
        // successFul("success");
        // dispatch({
        //   type: SITE_SOCIALS,
        //   payload: resp.data,
        // });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}










export function getgnrldata(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log('body');
    console.log(body);


    axios
      .get(API + "/getGeneralsett", body)
      .then((resp) => {
        // successFul("success");
        console.log(resp.data);
        dispatch({
          type: GETSITE_GENRL,
          payload: resp.data,
        });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}




export function getsocial(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    console.log("body");
    console.log(body);

    axios
      .get(API + "/getSocialsett", body)
      .then((resp) => {
        // successFul("success");
        console.log(resp.data);
        // dispatch({
        //   type: GETSITE_GENRL,
        //   payload: resp.data,
        // });
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}