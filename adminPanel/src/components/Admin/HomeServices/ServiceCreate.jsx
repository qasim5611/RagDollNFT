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

import "./create.css";
// import "./animate.css";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { basic, complex, formatting } from "./../../misc/buttonList.js";

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

import { createService } from "../../../redux/actions/Services_action.js";

import { getNftPopularRefresh } from "../../../redux/actions/adminDash_action.js";

import API from "../../../redux/url.js";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();



const HomeServices = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getsocial());
    console.log("useEffect");
    // dispatch(getNftPopularRefresh());
  }, []);



     let success = useSelector((state) => state.ServicesReducer);
     console.log("success ServicesReducer");
     console.log(success);
 
     useEffect(() => {
     if (success.msg) {
       toast.success("Service Added Successfully", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
       });
     }
   }, [success]);

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




  // const [NftPopular, setNftPopular] = useState("");

  // const NftPopular = useSelector((state) => state.adminDashboard_red);
  // console.log("NftPopular.NftPopulard now");
  // const getNftPopular = NftPopular.NftPopular;
  // console.log(getNftPopular);
  // const getNftPopularImages = getNftPopular
  //   ? getNftPopular[0].files
  //   : getNftPopular;

  // const NftPopularID = getNftPopular ? getNftPopular[0]._id : getNftPopular;

  // console.log("getNftPopularImages");
  // console.log(getNftPopularImages);

  const [multipleFiles, setMultipleFiles] = useState("");
  const [multipleProgress, setMultipleProgress] = useState(0);



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
  const [btnerr, setbtnerr] = useState("");
  const [descerr, setdescerr] = useState("");



  const [state, setState] = useState({
    title: "",
    btn: "",
    image: null,
  });

  

  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const [general, setgeneral] = useState(false);

  const [generalid, setgeneralid] = useState(false);


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
      };
      

       var isFormvalid = validate();
       console.log("isvalid", isFormvalid);
       window.scrollTo(0, 200);
       if (isFormvalid) {
         console.log(obj);
      dispatch(createService(obj));
        //  alert("ok");
       }
    };


  const validate = () => {
    console.log("validate called");
    let isvalid = true;

    if ( state.title.length < 5 || state.title.length > 50 || state.title.length == 0 ) {
      isvalid = false;
      settitleerr("title to be 5 to 50 characters long");
      setbtnerr("");
      setdescerr();

    }
    else if ( state.btn.length < 5 || state.btn.length > 40 || state.btn.length == 0 ) {
      isvalid = false;
      settitleerr("");
      setbtnerr("Button Name to be 5 to 40 characters long");
      setdescerr();

    }
     else if (description.length == 0) {
       isvalid = false;
       settitleerr("");
       setbtnerr("");
       setdescerr("Desc Should Not Empty");
     } else {
       settitleerr("");
       setbtnerr("");
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
    <div class="content-wrapper">
      <div
        id="order_preview"
        class="wow fadeInUp content_box"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <Row className="table-header">
          <Col xs="12" md="12">
            <h2 class="section-title">Enter New Service</h2>
          </Col>
        </Row>
        <div class="row">
          <Row>
            <Col xs="12" md="9">
              <form>
                <div class="form-group">
                  <label for="pwd">title</label>
                  <input
                    type="text"
                    class="form-control"
                    required
                    name="title"
                    onChange={onChangeHandler}
                    // value={state.title}
                  />
                  <center>
                    {titleerr ? <div style={errmsg}>{titleerr}</div> : null}
                  </center>
                </div>

                <div class="form-group">
                  <label for="pwd">Descriptions</label>

                  <SunEditor
                    setOptions={{
                      height: 200,
                      width: "60%",
                      buttonList: formatting,
                      buttonList: basic,
                      buttonList: complex,
                    }}
                    onChange={handleChange}
                  />
                  <center>
                    {descerr ? <div style={errmsg}>{descerr}</div> : null}
                  </center>
                </div>

                <div class="form-group">
                  <label for="pwd"> Button Name </label>
                  <input
                    name="btn"
                    type="text"
                    class="form-control"
                    required
                    onChange={onChangeHandler}
                  />
                  <center>
                    {btnerr ? <div style={errmsg}>{btnerr}</div> : null}
                  </center>
                </div>

                {/* <div class="form-group">
                  <label for="pwd"> Button Link </label>
                  <input
                    type="text"
                    class="form-control"
                    required
                    name="shortdesc"
                    maxlength="100"
                    // onChange={onChangeHandler}
                  />
                </div> */}

                {/* <div class="form-group">
                    <label for="pwd">description Title</label>
                    <input
                      type="text"
                      class="form-control"
                      required
                      name="subtitle"
                      onChange={onChangeHandler}
                      value={state.subtitle}
                    />
                  </div> */}

                {/* <div class="form-group">
                    <label for="pwd">Category</label>
                    <MultipleSelect changeHandler={onChangeHandler} />
                  </div>
                  <div class="form-group">
                    <label for="pwd">Sub-Category</label>
                    <SubCategorySelector changeHandler={onChangeHandler} categoryID={subCate}/>
                  </div> */}

                <div class="form-group">
                  <label for="pwd">Service Image </label>
                  <input
                    type="file"
                    class="form-control"
                    required
                    name="image"
                    onChange={onChangeHandler}
                  />
                </div>

                {/* <div class="form-group featuredItems_out">
                    <input
                      type="checkbox"
                      class=""
                      required
                      name="isFeatured"
                      id="featured_item"
                      onChange={onChangeHandler}
                    />
                    <label for="featured_item">Featured</label>
                  </div> */}
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
                  Create
                </button>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
