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
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";

import Stack from "@mui/material/Stack";
import "./../style.css";
import "./../create.css";
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


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createRoadmap } from "../../../redux/actions/Roadmap_action.js";

import { getNftPopularRefresh } from "../../../redux/actions/adminDash_action.js";

import API from "../../../redux/url.js";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();



const RoadmapCreate = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    // dispatch(getsocial());
    console.log("useEffect");
    // dispatch(getNftPopularRefresh());
  }, []);

  let success = useSelector((state) => state.ServicesReducer);
  console.log("success TeamReducer");
  console.log(success);

  useEffect(() => {
    if (success.msg) {
      toast.success("Team Added Successfully", {
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
  const [listerr, setlisterr] = useState("");

  const [maplist, setmaplist] = useState(null);

  const [state, setState] = useState({
    title: "",
    image: null,
  });

  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const [general, setgeneral] = useState(false);


  const onChangeHandler = (e) => {
    if (e.target.name == "image") {
      let val = e.target.files[0];
      setState({ ...state, [e.target.name]: val });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };

  const onChangeHandlerMap = (value) => {
      setmaplist(value);
      console.log(value);
      // onChange={(event, value) => console.log(value)}
  }

  const editorRef = useRef < SunEditor > null;
  useEffect(() => {
    // Get underlining core object here
    // Notice that useEffect is been used because you have to make sure the editor is rendered.
    console.log(editorRef.current?.editor.core);
  }, []);


  const onSubmit = (e) => {
    e.preventDefault();
    let obj = {
      ...state,
       maplist,
    };

    var isFormvalid = validate();
    console.log("isvalid", isFormvalid);
    window.scrollTo(0, 200);
    if (isFormvalid) {
      console.log(obj);
      dispatch(createRoadmap(obj));
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
      settitleerr("Title to be 5 to 30 characters long");
      setlisterr("");
    } else if (maplist.length == 0) {
      isvalid = false;
      settitleerr("");
      setlisterr("List Should not Empty");
    } else {
      settitleerr("");
      setlisterr("");
    }

    return isvalid;
  };


  const top100Films = [
    { title: "Market Research" },
    { title: "Project Concept" },
    { title: "Website Launch" },
    { title: "Whitepaper" },
    { title: "Team Organization" },
    { title: "Early Marketing Plan" },
    { title: "Socials Development" },
    { title: "Community Event" },
    { title: "Contract Deployment" },
    { title: "Awareness Campaign" },
  ];

  return (
    <div class="content-wrapper">
      <div
        id="order_preview"
        class="wow fadeInUp content_box"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <Row className="table-header">
          <Col xs="12" md="12">
            <h2 class="section-title">Add New RoadMap</h2>
          </Col>
        </Row>
        <div class="row">
          <Row>
            <Col xs="12" md="9">
              <form>
                <div class="form-group">
                  <label for="pwd">Title</label>
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
                <Stack spacing={3} sx={{ width: "60%" }}>
                  <Autocomplete
                    sx={{ color: "black" }}
                    multiple
                    id="tags-filled"
                    options={top100Films.map((option) => option.title)}
                    // defaultValue={top100Films.map((option) => option.title)}
                    // defaultValue={[top100Films[1].title]}
                    freeSolo
                    onChange={(event, value) => onChangeHandlerMap(value)}
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <Chip
                          sx={{ color: "black" }}
                          variant="outlined"
                          label={option}
                          {...getTagProps({ index })}
                        />
                      ))
                    }
                    renderInput={(params) => (
                      <TextField
                        sx={{ color: "black" }}
                        {...params}
                        variant="filled"
                        label="RoadMap List"
                        // placeholder="Favorites"
                        name="list"
                      />
                    )}
                  />
                  <center>
                    {listerr ? <div style={errmsg}>{listerr}</div> : null}
                  </center>
                </Stack>

                <div class="form-group">
                  <label for="pwd">Roadmap Image </label>
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
                  Add RoadMap
                </button>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default RoadmapCreate;
