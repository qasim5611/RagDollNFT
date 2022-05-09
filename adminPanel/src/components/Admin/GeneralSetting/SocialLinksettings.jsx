import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/system";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import ResetTvIcon from "@mui/icons-material/ResetTv";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { useMediaQuery } from "@mui/material";
import Investtab from "./Investtab";
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
import { useForm } from "react-hook-form";

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

import { editsocial } from "../../../redux/actions/adminDash_action.js";

import { getsocial } from "../../../redux/actions/adminDash_action.js";
import API from "./../../../redux/url.js";
import axios from "axios";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import RedditIcon from "@mui/icons-material/Reddit";
import PinterestIcon from "@mui/icons-material/Pinterest";


const Generalsettings = () => {
  const dispatch = useDispatch();

const [general, setgeneral] = useState(false);

    let { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    // dispatch(getsocial());
    axios.get(API + "/getSocialLinks").then((res) => {
      console.log("useEffectres.data", res.data);
      setgeneral(res.data);
    });
  }, [])
  

  const [statement, setStatement] = React.useState(false);
  const handleClickStatement = () => {
    setStatement(!statement);
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
  };

  const check = useMediaQuery("(max-Width:900px)");

  const [fcberr, setfcberr] = useState("");
  const [instaerr, setinstaerr] = useState("");
  const [linkdinerr, setlinkdinerr] = useState("");
  const [snapchaterr, setsnapchaterr] = useState("");
  const [discorderr, setdiscorderr] = useState("");
  const [redditerr, setredditerr] = useState("");
  const [urlresp, seturlresp] = useState("");

  const [values, setValues] = useState({
    twitter: "",
    fcb: "",
    insta: "",
    linkdin: "",
    snapchat: "",
    discord: "",
    reddit: "",
    pintrest: "",
  });

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  function isValidUrl(userInput) {
    var Urlres = userInput.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    // if (res == null) return false;
    // else return true;
  }

  const validate = () => {
    var res = values.url.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
  };

  // const SubmitData = (e) => {
  //   e.preventDefault();

  //   window.scrollTo(0, 200);
  //   dispatch(editsocial(values));
  //   // alert('ok');
  // };

  const formSubmisiion = async (myData) => {
    console.log(myData);

    let form = new FormData();
    form.append("twitter", myData.twitter);
    form.append("fcb", myData.fcb);
    form.append("insta", myData.insta);
    form.append("snapchat", myData.snapchat);
    form.append("discord", myData.discord);
    form.append("reddit", myData.reddit);
    form.append("pintrest", myData.pintrest);

    console.log('form');
    console.log(form);


    // form.append("file", myData.profilePic[0]);

    // axios.post("/signup-form", form);
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
              Change Company Social Links
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#364a63",
              }}
            >
              Note* In Empty Input case it will Keep Older Links Applied.
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
                <FormControl
                  onSubmit={handleSubmit(formSubmisiion)}
                  sx={{
                    width: "50%",
                  }}
                >
                  <Paper component="form" style={inputstyle}>
                    <IconButton sx={{ p: "5px" }} aria-label="menu">
                      <TwitterIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1, color: "#101924" }}
                      placeholder="Twitter Link"
                      defaultValue={item.twitter}
                      type="url"
                      {...register("twitter", { required: true })}
                    />
                  </Paper>
                  <center>
                    {errors.twitter ? (
                      <div style={errmsg}>Please enter a valid twitter</div>
                    ) : null}
                  </center>

                  <Paper component="form" style={inputstyle}>
                    <IconButton sx={{ p: "5px" }} aria-label="menu">
                      <FacebookIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1, color: "#101924" }}
                      placeholder="Facebook Link"
                      // name="fcb"

                      defaultValue={item.fcb}
                      type="url"
                      {...register("fcb", { required: true })}
                    />
                  </Paper>
                  <center>
                    {errors.fcb ? (
                      <div style={errmsg}>Please enter a valid Username</div>
                    ) : null}
                  </center>

                  <Paper component="form" style={inputstyle}>
                    <IconButton sx={{ p: "5px" }} aria-label="menu">
                      <InstagramIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1, color: "#101924" }}
                      placeholder="Instagram Link"
                      name="insta"
                      defaultValue={item.insta}
                      type="url"
                      {...register("insta", { required: true })}
                    />
                  </Paper>
                  <center>
                    {errors.insta ? (
                      <div style={errmsg}>Please enter a valid Username</div>
                    ) : null}
                  </center>

                  <Paper component="form" style={inputstyle}>
                    <IconButton sx={{ p: "5px" }} aria-label="menu">
                      <LinkedInIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1, color: "#101924" }}
                      placeholder="Linkdin Link"
                      // name="linkdin"
                      defaultValue={item.linkdin}
                      type="url"
                      {...register("linkdin", { required: true })}
                    />
                  </Paper>
                  <center>
                    {errors.linkdin ? (
                      <div style={errmsg}>Please enter a valid Username</div>
                    ) : null}
                  </center>

                  <Paper component="form" style={inputstyle}>
                    <IconButton sx={{ p: "5px" }} aria-label="menu">
                      <TelegramIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1, color: "#101924" }}
                      placeholder="Snapchat Link"
                      // name="snapchat"

                      defaultValue={item.snapchat}
                      type="url"
                      {...register("snapchat", { required: true })}
                    />
                  </Paper>
                  <center>
                    {errors.snapchat ? (
                      <div style={errmsg}>Please enter a valid Username</div>
                    ) : null}
                  </center>

                  <Paper component="form" style={inputstyle}>
                    <IconButton sx={{ p: "5px" }} aria-label="menu">
                      <SportsEsportsIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1, color: "#101924" }}
                      placeholder="Discord Link"
                      // name="discord"

                      defaultValue={item.discord}
                      type="url"
                      {...register("discord", { required: true })}
                    />
                  </Paper>
                  <center>
                    {errors.discord ? (
                      <div style={errmsg}>Please enter a valid Username</div>
                    ) : null}
                  </center>

                  <Paper component="form" style={inputstyle}>
                    <IconButton sx={{ p: "5px" }} aria-label="menu">
                      <RedditIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1, color: "#101924" }}
                      placeholder="Reddit Link"
                      // name="reddit"

                      defaultValue={item.reddit}
                      type="url"
                      {...register("reddit", { required: true })}
                    />
                  </Paper>
                  <center>
                    {errors.reddit ? (
                      <div style={errmsg}>Please enter a valid reddit</div>
                    ) : null}
                  </center>

                  <Paper component="form" style={inputstyle}>
                    <IconButton sx={{ p: "5px" }} aria-label="menu">
                      <PinterestIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1, color: "#101924" }}
                      placeholder="Reddit Link"
                      // name="pintrest"
                      defaultValue={item.pintrest}
                      type="url"
                      {...register("pintrest", { required: true })}
                    />
                  </Paper>
                  <center>
                    {errors.pintrest ? (
                      <div style={errmsg}>Please enter a valid Username</div>
                    ) : null}
                  </center>

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
                      // onClick={SubmitData}
                      type="submit"
                    >
                      <ResetTvIcon sx={{ mr: "10px" }} /> Apply Changes
                    </Button>
                  </Box>
                  {/* {passerr ? <div style={errmsg}>{passerr}</div> : null} */}
                </FormControl>
              );
            } )}
          </>) : (<div>Network Error...</div>) }
         
        </Box>
      </Container>
    </Box>
  );
};

export default Generalsettings;
