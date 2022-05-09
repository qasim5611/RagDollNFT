import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/system";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import ResetTvIcon from "@mui/icons-material/ResetTv";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { useMediaQuery } from "@mui/material";
// import Investtab from "./Investtab";
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

import { setHomeBanner } from "../../../redux/actions/adminDash_action.js";
import API from "../../../redux/url.js";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();


const HomeBanner = () => {

  const dispatch = useDispatch();

const [general, setgeneral] = useState(false);

const [generalid, setgeneralid] = useState(false);


  // const HomeBannerid = useSelector((state) => state.adminDashboard_red);
  // console.log("HomeBannerid");
  // console.log(HomeBannerid.HomeBanner.isSaved._id);


// console.log(myid);


useEffect(() => {
  // dispatch(getsocial());
  axios.get(API + "/getHomeBanner" ).then((res) => {
    console.log("getHomeBanner.data", res.data);
    setgeneral(res.data);
    console.log(res.data[0]._id);

    setgeneralid(res.data[0]._id);

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



  const [tagerr, settagerr] = useState("");
  const [newserr, setnewserr] = useState("");


  const [state, setState] = useState({
    tag: "",
    news: "",
    // image: null
  });

   const onChangeHandler = (e) => {
     if (e.target.name == "image") {
       let val = e.target.files[0];
       setState({ ...state, [e.target.name]: val });
     } else {
       setState({ ...state, [e.target.name]: e.target.value });
     }
   };



   
  const validate = () => {
    
    console.log('validate called');
    let isvalid = true;

    if (
      state.tag.length < 5 ||
      state.tag.length > 50 ||
      state.tag.length == 0
    ) {
      isvalid = false;
      settagerr("Banner Left Tag needs to be 5 to 50 characters long");
      setnewserr("");
  
    } else if ( state.news.length < 5 || state.news.length > 500 || state.news.length == 0 ) {
      isvalid = false;
      settagerr("");
      setnewserr("News needs to be 5 to 500 characters long");
    } else {
     settagerr("");
     setnewserr("");
    }

    return isvalid;
  };




  const SubmitData = (e) => {
    e.preventDefault();

    let obj = {
      ...state,
      generalid,
      // description,
      // checkbox,
    };

    var isFormvalid = validate();
    console.log("isvalid", isFormvalid);
    window.scrollTo(0, 200);
    if (isFormvalid) {
      console.log(obj);
      dispatch(setHomeBanner(obj));
      // alert("ok");
    }

    // setState("");

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
              Change Home Banner Settings
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
          {general ? (<div style={{width: '50%'}}>
            {general.map((item,index) =>{
              return (
                <>
                  <Box
                    sx={{
                      color: "#037dff",
                      display: "flex",
                      marginBottom: "4px",
                    }}
                  >
                    <label>Banner Tag Line*</label>
                  </Box>

                  <Paper component="form" style={inputstyle}>
                    <IconButton sx={{ p: "5px" }} aria-label="menu">
                      {/* <img src={userName} alt="" style={{ maxWidth: "40px" }} /> */}
                    </IconButton>
                    <InputBase
                      style={labls}
                      placeholder="Enter Tag"
                      name="tag"
                      onChange={onChangeHandler}
                      defaultValue={item.tag}
                      // ref={inputRef}
                    />
                  </Paper>

                  <center>
                    {tagerr ? <div style={errmsg}>{tagerr}</div> : null}
                  </center>

                  <Box
                    sx={{
                      color: "#037dff",
                      display: "flex",
                      marginBottom: "4px",
                    }}
                  >
                    <label>Change Your News Line</label>
                  </Box>
                  <Paper component="form" style={inputstyle}>
                    <IconButton sx={{ p: "5px" }} aria-label="menu">
                      {/* <img src={email} alt="" style={{ maxWidth: "40px" }} /> */}
                    </IconButton>
                    <InputBase
                      style={labls}
                      placeholder="Enter News Updates"
                      name="news"
                      onChange={onChangeHandler}
                      defaultValue={item.news}
                    />
                  </Paper>
                  <center>
                    {newserr ? <div style={errmsg}>{newserr}</div> : null}
                  </center>

                  <Box
                    sx={{
                      color: "#037dff",
                      display: "flex",
                      marginBottom: "4px",
                    }}
                  >
                    <label>Upload Banner Right Image</label>
                  </Box>
                  <Paper component="form" style={inputstyle}>
                    <IconButton
                      sx={{ p: "5px" }}
                      aria-label="menu"
                    ></IconButton>
                    <InputBase
                      style={labls}
                      placeholder="Upload your Banner Image"
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
                </>
              );
            } )}
          </div>) : (<div>Loading...</div>) }
         
        </Box>
      </Container>
    </Box>
  );
};

export default HomeBanner;
