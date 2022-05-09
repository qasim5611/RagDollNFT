import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/system";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import ResetTvIcon from "@mui/icons-material/ResetTv";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { useMediaQuery } from "@mui/material";
import Investtab from "./Investtab";
import { FormControlLabel } from "@mui/material";


import {
  Container,
  FormControl,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  Paper,
  TextField,
  Typography,
  Button,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
// Nested List starts
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import { Link, NavLink } from "react-router-dom";
// Nested List ends
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AiOutlineCalculator } from "react-icons/ai";



import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { setGeneralset } from "../../../redux/actions/adminDash_action.js";
import API from "./../../../redux/url.js";
import axios from "axios";

const Generalsettings = () => {

  const dispatch = useDispatch();

const [general, setgeneral] = useState(false);

useEffect(() => {
  // dispatch(getsocial());
  axios.get(API + "/getGeneralsett").then((res) => {
    console.log("getGeneralsett.data", res.data);
    setgeneral(res.data);
  });
}, []);
  
  

   const [statement, setStatement] = React.useState(false);
   const handleClickStatement = () => {
     setStatement(!statement);
   };

   const labls = {
     color: '#101924',
     flex: '1',
     marginLeft: '2px'
   };

const errmsg = {
  color: "red",
  position: "relative",
  top: "-11px",
};

const inputstyle = {
      padding: "3px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                border: "1px solid #bec2c7",
                borderRadius: "7px",
                marginBottom: "20px",
}



  const check = useMediaQuery("(max-Width:900px)");



  const [nameerr, setnameerr] = useState("");
  const [emailerr, setemailerr] = useState("");
  const [copyrighterr, setcopyrighterr] = useState("");

  const [state, setState] = useState({
    name: "",
    email: "",
    copyright: "",
    image: null
  });

   const onChangeHandler = (e) => {
     if (e.target.name == "image") {
       let val = e.target.files[0];
       setState({ ...state, [e.target.name]: val });
      
     } else {
       setState({ ...state, [e.target.name]: e.target.value });
     }
      console.log(state);
   };





   
  const validate = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isemailVer = re.test(state.email);
    console.log("isemailVer", isemailVer);

    let isvalid = true;

    if (
      state.name.length < 3 ||
      state.name.length > 20 ||
      state.name.length == 0
    ) {
      isvalid = false;
      setnameerr("Username needs to be 3 to 20 characters long");
      setemailerr("");
      setcopyrighterr("");
    } else if (!isemailVer) {
      isvalid = false;
      setemailerr("Your Email is not Correct!");
      setcopyrighterr("");
      setnameerr("");
    } else if (
      state.copyright.length < 5 ||
      state.copyright.length > 30 ||
      state.copyright.length == 0
    ) {
      isvalid = false;
      setcopyrighterr("copyright needs to be 5 to 30 characters long");
      setemailerr("");
      setnameerr("");
    } else {
      setnameerr("");
      setemailerr("");
      setcopyrighterr("");
    }

    return isvalid;
  };




  const SubmitData = (e) => {
    e.preventDefault();

    let obj = {
      ...state,
      // description,
      // checkbox,
    };

    var isFormvalid = validate();
    console.log("isvalid", isFormvalid);
    window.scrollTo(0, 200);
    if (isFormvalid) {
      console.log(obj);
      dispatch(setGeneralset(obj));
      // alert("ok");
    }

    setState("");

    //  inputRef.current.focus();
  };

  return (
    <Box
      sx={{
        background: "#f5f6fa",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: check ? "column" : "",
          }}
        >
          <Box
            sx={{
              my: "30px",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 500,
                color: "#364a63",
              }}
            >
              Change General Settings
            </Typography>
          </Box>
        </Box>
        {/* <Investtab /> */}

        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {general ? (<>
            {general.map((item,index) =>{
              return (
                <Box
                  sx={{
                    width: "50%",
                  }}
                >
                  <Box sx={{ color: "#037dff", display: 'flex',marginBottom:'4px'  }}>
                    <label>Change Your Site Title</label>
                  </Box>

                  <Paper component="form" style={inputstyle}>
                    <IconButton sx={{ p: "5px" }} aria-label="menu">
                      {/* <img src={userName} alt="" style={{ maxWidth: "40px" }} /> */}
                    </IconButton>
                    <InputBase
                      style={labls}
                      placeholder="Enter Your Site Name"
                      name="name"
                      onChange={onChangeHandler}
                      defaultValue={item.name}
                      // ref={inputRef}
                    />
                  </Paper>

                  <center>
                    {nameerr ? <div style={errmsg}>{nameerr}</div> : null}
                  </center>

                    <Box sx={{ color: "#037dff", display: 'flex',marginBottom:'4px'  }}>
                    <label>Change Your Site email</label>
                  </Box>
                  <Paper component="form" style={inputstyle}>
                    <IconButton sx={{ p: "5px" }} aria-label="menu">
                      {/* <img src={email} alt="" style={{ maxWidth: "40px" }} /> */}
                    </IconButton>
                    <InputBase
                      style={labls}
                      placeholder="Enter Your Site Email"
                      name="email"
                      onChange={onChangeHandler}
                      defaultValue={item.email}
                    />
                  </Paper>
                  <center>
                    {emailerr ? <div style={errmsg}>{emailerr}</div> : null}
                  </center>

                   <Box sx={{ color: "#037dff", display: 'flex',marginBottom:'4px'  }}>
                    <label>Change Your Site copyright</label>
                  </Box>
                  <Paper component="form" style={inputstyle}>
                    <IconButton sx={{ p: "5px" }} aria-label="menu">
                      {/* <img src={padlock} alt="" style={{ maxWidth: "40px" }} /> */}
                    </IconButton>
                    <InputBase
                      style={labls}
                      placeholder="Enter copyright@"
                      type="text"
                      name="copyright"
                      onChange={onChangeHandler}
                      defaultValue={item.copyright}
                    />
                  </Paper>
                  <center>
                    {copyrighterr ? (
                      <div style={errmsg}>{copyrighterr}</div>
                    ) : null}
                  </center>
                  <Box sx={{ color: "#037dff", display: 'flex',marginBottom:'4px'  }}>
                    <label>Upload Your Site Logo</label>
                  </Box>
                  <Paper component="form" style={inputstyle}>
                    <IconButton
                      sx={{ p: "5px" }}
                      aria-label="menu"
                    ></IconButton>
                    <InputBase
                      style={labls}
                      placeholder="Upload your site Logo"
                      type="file"
                      name="image"
                      onChange={onChangeHandler}
                      required={true}
                    />
                  </Paper>

                  <Box>
                    <Button
                      sx={{
                        background: "#006adc",
                        "&:hover": {
                          background: "#006adca1",
                        },
                        mt: "10px",
                        color: "white",
                      }}
                      onClick={SubmitData}
                    >
                      <ResetTvIcon sx={{ mr: "10px" }} /> Apply Changes
                    </Button>
                  </Box>
                  {/* {passerr ? <div style={errmsg}>{passerr}</div> : null} */}
                </Box>
              );
            })}
          </>) : (<div>
            Loading.....
          </div>)}

        
        </Box>
      </Container>
    </Box>
  );
};

export default Generalsettings;
