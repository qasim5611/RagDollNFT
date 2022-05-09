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
// import "./animate.css";
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

import { updateBlog } from "../../../redux/actions/Blog_action.js";


import API from "../../../redux/url.js";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const BlogUpdate = () => {

  const params = useParams();
  const dispatch = useDispatch();

const [record, setrecord] = useState(false);
const [idtoUpdate, setidtoUpdate] = useState(false);


  console.log("myid");
  console.log(params.id);

useEffect(() => {

  axios.get(API + "/getBlogByid", { params }).then((res) => {
    console.log("getBlogByid.data", res.data);
    console.log(res.data.user[0]);

    setrecord(res.data.user);
    setidtoUpdate(res.data.user[0]._id);
    // setEditRecordBefore(res.data.user[0]);
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
  const [authererr, setauthererr] = useState("");
  const [descerr, setdescerr] = useState("");
  const [dateerr, setdateerr] = useState("");

  const [state, setState] = useState({
    title: "",
    auther: "",
    date: "",
    image: null,
  });


  const [description, setDescription] = useState(null);

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

  const handleChange = (content) => {
    setDescription(content); //Get Content Inside Editor
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let obj = {
      ...state,
      description,
      idtoUpdate,
    };

    window.scrollTo(0, 200);

    if (description) obj.description = description;

    if (validate()) {
      console.log(obj);
      dispatch(updateBlog(obj));

    }
  };

  const validate = () => {
    console.log("validate called");
    let isvalid = true;

    if (
      state.title.length < 5 ||
      state.title.length > 80 ||
      state.title.length == 0
    ) {
      isvalid = false;
      settitleerr("title to be 5 to 80 characters long");
      setauthererr("");
      setdescerr();
      setdateerr();
    } else if (
      state.auther.length < 5 ||
      state.auther.length > 40 ||
      state.auther.length == 0
    ) {
      isvalid = false;
      settitleerr("");
      setauthererr("auther to be 5 to 50 characters long");
      setdescerr("");
      setdateerr("");
    } else if (state.date.length == 0) {
      isvalid = false;
      settitleerr("");
      setauthererr("");
      setdescerr("");
      setdateerr("Date is Required!");
    } else if (description.length == 0) {
      isvalid = false;
      settitleerr("");
      setauthererr("");
      setdescerr("Desc should not empty");
      setdateerr("");
    } else {
      settitleerr("");
      setauthererr("");
      setdescerr("");
      setdateerr("");
    }

    return isvalid;
  };



  return (
    <div class="content-wrapper">
      <div
        id="order_preview"
        class="wow fadeInUp content_box"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <Row className="table-header">
          <Col xs="12" md="12">
            <h2 class="section-title">Enter New Blog</h2>
          </Col>
        </Row>

        <div class="row">
          <Row>
            <Col xs="12" md="9">
              {record ? (<div>
                {record.map((item, index) =>{
                  return (
                    <form>
                      <div class="form-group">
                        <label for="pwd">Blog title</label>
                        <input
                          type="text"
                          class="form-control"
                          required
                          name="title"
                          onChange={onChangeHandler}
                          defaultValue={item.title}

                          // value={state.title}
                        />
                        <center>
                          {titleerr ? (
                            <div style={errmsg}>{titleerr}</div>
                          ) : null}
                        </center>
                      </div>

                      <div class="form-group">
                        <label for="pwd"> Blog Auther </label>
                        <input
                          name="auther"
                          type="text"
                          class="form-control"
                          required
                          onChange={onChangeHandler}
                          defaultValue={item.auther}
                        />
                        <center>
                          {authererr ? (
                            <div style={errmsg}>{authererr}</div>
                          ) : null}
                        </center>
                      </div>

                      <div class="form-group">
                        <label for="pwd"> Blog Date </label>
                        <input
                          name="date"
                          type="date"
                          class="form-control"
                          required
                          onChange={onChangeHandler}
                          defaultValue={item.date}
                        />
                        <center>
                          {dateerr ? <div style={errmsg}>{dateerr}</div> : null}
                        </center>
                      </div>

                      <div class="form-group">
                        <label for="pwd">Blog Descriptions</label>

                        <SunEditor
                          setOptions={{
                            height: 200,
                            width: "60%",
                            buttonList: formatting,
                            buttonList: basic,
                            buttonList: complex,
                          }}
                          onChange={handleChange}
                          defaultValue={item.description}
                        />
                        <center>
                          {descerr ? <div style={errmsg}>{descerr}</div> : null}
                        </center>
                      </div>

                      <div class="form-group">
                        <label for="pwd">Blog Image </label>
                        <img
                          src={API + "/uploads/" + item.image}
                          alt={item.image}
                          height="200"
                          width="200"
                        />
                        <input
                          type="file"
                          class="form-control"
                          required
                          name="image"
                          onChange={onChangeHandler}
                        />
                      </div>

                      <button
                        type="submit"
                        class="btn btn-default"
                        onClick={onSubmit}
                        style={{
                          marginTop: 10,
                          float: "right",
                          padding: "8px 16px",
                          fontSize: 16,
                        }}
                      >
                        Update Blog
                      </button>
                    </form>
                  );
                } ) }
              </div>) : (<div>Loading...</div>) }
           
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default BlogUpdate;
