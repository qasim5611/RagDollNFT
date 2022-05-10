import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Box } from "@mui/system";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import ResetTvIcon from "@mui/icons-material/ResetTv";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { useMediaQuery } from "@mui/material";
// import Investtab from "./Investtab";
import { FormControlLabel } from "@mui/material";
import ImageUploading from "react-images-uploading";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { useParams } from "react-router-dom";
import { Box,  Grid } from "@mui/material";

import "./../create.css";
import "./../style.css";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { basic, complex, formatting } from "../../misc/buttonList.js";

import { Row, Col } from "reactstrap";
// Import Swiper styles
// import 'swiper/css';
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

import { updateAboutUs } from "../../../redux/actions/Services_action.js";

import { getAboutUsRefresh } from "../../../redux/actions/Services_action.js";

import API from "../../../redux/url.js";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const AboutUs = () => {

  const params = useParams();
  const dispatch = useDispatch();

// const [EditRecordBefore, setEditRecordBefore] = useState("");
const [record, setrecord] = useState(false);
const [idtoUpdate, setidtoUpdate] = useState(false);


  console.log("myid");
  console.log(params.id);

  // console.log(updateid);

useEffect(() => {

     dispatch(getAboutUsRefresh());

}, []);






  const AboutusData = useSelector((state) => state.ServicesReducer);
  console.log("AboutusData now");

  const getAboutData = AboutusData.AboutusData;
  console.log(getAboutData);

//   const getNftRecentImages = getNftRecent
//     ? getNftRecent[0].files
//     : getNftRecent;



  const AboutDataID = getAboutData ? getAboutData[0]._id : getAboutData;

  console.log("AboutDataID");
  console.log(AboutDataID);



// console.log("record");
// console.log(idtoUpdate);



// console.log("idtoUpdate");
// console.log(idtoUpdate);


  const filesstyle = {
    color: "black",
    border: "1px black solid",
    width: "100%",
    background: "white",
    height: "36px",
    padding: "7px",
    border: "1px solid rgb(190, 194, 199)",
    borderRadius: "7px",
    marginBottom: "20px",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  };



  const labls = {
    color: "#101924",
    flex: "1",
    marginLeft: "2px",
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

  const [desconeerr, setdesconeerr] = useState("");
  const [desctwoerr, setdesctwoerr] = useState("");
  

  const [state, setState] = useState({
    id: AboutDataID,
  });



  const [descone, setdescone] = useState(null);
  const [desctwo, setdesctwo] = useState(null);


  const onChangeHandler = (e) => {
    if (e.target.name == "image") {
      let val = e.target.files[0];
      setState({ ...state, [e.target.name]: val });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };

  const editorRef = useRef < SunEditor > null;
  useEffect(() => {
    // Get underlining core object here
    // Notice that useEffect is been used because you have to make sure the editor is rendered.
    console.log(editorRef.current?.editor.core);
  }, []);

  const handleChangeOne = (content) => {
    setdescone(content); //Get Content Inside Editor
  };

    const handleChangeTwo = (content) => {
      setdesctwo(content); //Get Content Inside Editor
    };

  const onSubmit = (e) => {
    e.preventDefault();
    let obj = {
      // ...state,
      descone,
      desctwo,
      // idtoUpdate,
      AboutDataID,
    };

    var isFormvalid = validate();
    console.log("isvalid", isFormvalid);
    window.scrollTo(0, 200);

    if (descone) obj.descone = descone;
    if (desctwo) obj.desctwo = desctwo;


    if (isFormvalid) {
      console.log(obj);
      dispatch(updateAboutUs(obj));
      //  alert("ok");
    }
  };

  const validate = () => {
    console.log("validate called");
    let isvalid = true;

 if (descone.length == 0) {
      isvalid = false;
      setdesconeerr("Desc Should Not Empty");
      setdesctwoerr("");
    }
    else if (desctwo.length == 0) {
      isvalid = false;
        setdesconeerr("");
        setdesctwoerr("Desc Should Not Empty");
    } else {
        setdesconeerr("");
        setdesctwoerr("");
    }

    return isvalid;
  };

  // const SubmitData = (e) => {
  //   e.preventDefault();

  //   window.scrollTo(0, 200);
  //     // dispatch(setNftPopular(images));
  //      const formData = new FormData();
  //       formData.append('title', state.title);
  //       for (let i = 0; i < multipleFiles.length; i++) {
  //           formData.append('files', multipleFiles[i]);
  //       }
  //       await multipleFilesUpload(formData, mulitpleFileOptions);
  //       props.getMultiple();

  // };

  return (
    <div className="content-wrapper">
      <div
        id="order_preview"
        className="wow fadeInUp content_box"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <Row classNameName="table-header">
          <Col xs="12" md="12">
            <h2 className="section-title" style={{ color: "black" }}>
              Edit About RagDoll Cat & NFT
            </h2>
          </Col>
        </Row>
        <br />
        <div className="row">
          <Row>
            <Col xs="12" md="9">
              <form>
                {getAboutData ? (<div>
                  {getAboutData.map((item, index) =>{
                    return (
                      <Box>
                        <Grid item xs={12} lg={6} md={6} sm={12}>
                          <div className="form-group">
                            <label for="pwd">
                              Edit RagDoll Cat Description
                            </label>

                            <SunEditor
                              setOptions={{
                                height: 200,
                                // width: "60%",
                                buttonList: formatting,
                                buttonList: basic,
                                buttonList: complex,
                              }}
                              onChange={handleChangeOne}
                              defaultValue={item.descone}
                            />
                            <center>
                              {desconeerr ? (
                                <div style={errmsg}>{desconeerr}</div>
                              ) : null}
                            </center>
                          </div>
                        </Grid>
                        <br />
                        <Grid item xs={12} lg={6} md={6} sm={12}>
                          <div className="form-group">
                            <label for="pwd">
                              Edit RagDoll Cat NFT Description
                            </label>

                            <SunEditor
                              setOptions={{
                                height: 200,
                                // width: "60%",
                                buttonList: formatting,
                                buttonList: basic,
                                buttonList: complex,
                              }}
                              onChange={handleChangeTwo}
                              defaultValue={item.desctwo}
                            />
                            <center>
                              {desctwoerr ? (
                                <div style={errmsg}>{desctwoerr}</div>
                              ) : null}
                            </center>
                          </div>
                        </Grid>
                      </Box>
                    );
                  } ) }
                </div>) : (<div>Loading...</div>) }
              

                <button
                  type="submit"
                  className="btn btn-default"
                  onClick={onSubmit}
                  style={{
                    marginTop: 10,
                    float: "right",
                    padding: "8px 16px",
                    fontSize: 16,
                  }}
                >
                  Update Now
                </button>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
