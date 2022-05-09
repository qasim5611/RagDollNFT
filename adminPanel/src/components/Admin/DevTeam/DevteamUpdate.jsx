import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/system";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import ResetTvIcon from "@mui/icons-material/ResetTv";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { useMediaQuery } from "@mui/material";
// import Investtab from "./Investtab";
import { FormControlLabel } from "@mui/material";
import ImageUploading from "react-images-uploading";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { useParams } from "react-router-dom";

import "./create.css";
import "./animate.css";
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

import { updateMember } from "../../../redux/actions/Team_action.js";

// import { getNftPopularRefresh } from "../../../redux/actions/adminDash_action.js";

import API from "../../../redux/url.js";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const DevteamUpdate = () => {

  const params = useParams();
  const dispatch = useDispatch();

// const [EditRecordBefore, setEditRecordBefore] = useState("");
const [record, setrecord] = useState(false);
const [idtoUpdate, setidtoUpdate] = useState(false);


  console.log("myid");
  console.log(params.id);
  console.log(params);

  // console.log(updateid);

useEffect(() => {
  // dispatch(getsocial());
// await axios.get('https://httpbin.org/get', { params });

  axios.get(API + "/getMemberByid", { params }).then((res) => {
    console.log("getMemberByid.data", res.data);
    console.log(res.data.user[0]);

setrecord(res.data.user);
setidtoUpdate(res.data.user[0]._id);

  });
}, []);

console.log("record");
console.log(idtoUpdate);



console.log("idtoUpdate");
console.log(idtoUpdate);


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

  const [titleerr, settitleerr] = useState("");
  const [desgerr, setdesgerr] = useState("");
  const [descerr, setdescerr] = useState("");


  const [state, setState] = useState({
    title: "",
    desg: "",
    image: null,
  });



  // const [description, setDescription] = useState(null);

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

  // const handleChange = (content) => {
  //   setDescription(content); //Get Content Inside Editor
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    let obj = {
      ...state,
      // description,
      idtoUpdate,
    };

    // var isFormvalid = validate();
    // console.log("isvalid", isFormvalid);
    window.scrollTo(0, 200);

    // if (description) obj.description = description;

    if (validate()) {
      console.log(obj);
      dispatch(updateMember(obj));
      //  alert("ok");
    }
  };


   const validate = () => {
     console.log("validate called");
     let isvalid = true;

     if (
       state.title.length < 5 ||
       state.title.length > 50 ||
       state.title.length == 0
     ) {
       isvalid = false;
       settitleerr("Name to be 5 to 50 characters long");
       setdesgerr("");
     } else if (
       state.desg.length < 5 ||
       state.desg.length > 50 ||
       state.desg.length == 0
     ) {
       isvalid = false;
       settitleerr("");
       setdesgerr("Designation to be 5 to 50 characters long");
     } else {
       settitleerr("");
       setdesgerr("");
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
            <h2 className="section-title" style={{color: 'black'}} >Edit Team Member </h2>
          </Col>
        </Row>
        <div className="row">
          <Row>
            <Col xs="12" md="9">
              {record ? (<div>
                {record.map((item, index) =>{
                  return (
                    <form>
                      <div className="form-group">
                        <label for="pwd">Edit Member Name</label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          name="title"
                          onChange={onChangeHandler}
                          defaultValue={item.title}
                        />
                        <center>
                          {titleerr ? (
                            <div style={errmsg}>{titleerr}</div>
                          ) : null}
                        </center>
                      </div>

                      <div className="form-group">
                        <label for="pwd">Edit Designation</label>

                        <input
                          type="text"
                          className="form-control"
                          required
                          name="desg"
                          onChange={onChangeHandler}
                          defaultValue={item.desg}
                        />
                        <center>
                          {desgerr ? <div style={errmsg}>{desgerr}</div> : null}
                        </center>
                      </div>

                      <div className="form-group">
                        <label for="pwd">Edit Member Image </label>
                        <input
                          type="file"
                          className="form-control"
                          required
                          name="image"
                          onChange={onChangeHandler}
                        />
                      </div>

                      {/* <div className="form-group featuredItems_out">
                    <input
                      type="checkbox"
                      className=""
                      required
                      name="isFeatured"
                      id="featured_item"
                      onChange={onChangeHandler}
                    />
                    <label for="featured_item">Featured</label>
                  </div> */}
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
                  );
                } ) }
              </div>) : (<div>Loading...</div>)}
            
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DevteamUpdate;
