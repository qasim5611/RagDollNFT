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
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";

import Stack from "@mui/material/Stack";

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

import { updateRoadmap } from "../../../redux/actions/Roadmap_action.js";

// import { getNftPopularRefresh } from "../../../redux/actions/adminDash_action.js";

import API from "../../../redux/url.js";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const RoadmapUpdate = () => {
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


    axios.get(API + "/getRoadmapByid", { params }).then((res) => {
      console.log("getRoadmapByid.data", res.data);
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
  const [listerr, setlisterr] = useState("");

  const [maplist, setmaplist] = useState(null);

  const [state, setState] = useState({
    title: "",
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

  
  const onChangeHandlerMap = (value) => {
    setmaplist(value);
    console.log(value);
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
     maplist,
     idtoUpdate,
   };

   var isFormvalid = validate();
   console.log("isvalid", isFormvalid);
   window.scrollTo(0, 200);
   if (isFormvalid) {
     console.log(obj);
     dispatch(updateRoadmap(obj));
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

  // const top100Films = [
  //   { title: "Market Research" },
  //   { title: "Project Concept" },
  //   { title: "Website Launch" },
  //   { title: "Whitepaper" },
  //   { title: "Team Organization" },
  //   { title: "Early Marketing Plan" },
  //   { title: "Socials Development" },
  //   { title: "Community Event" },
  //   { title: "Contract Deployment" },
  //   { title: "Awareness Campaign" },
  // ];



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
              Edit Roadmap{" "}
            </h2>
          </Col>
        </Row>
        <div className="row">
          <Row>
            <Col xs="12" md="9">
              {record ? (
                <div>
                  {record.map((item, index) => {
                    return (
                      <form>
                        <div class="form-group">
                          <label for="pwd">Title</label>
                          <input
                            type="text"
                            class="form-control"
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
                        <Stack spacing={3} sx={{ width: "60%" }}>
                          <Autocomplete
                            sx={{ color: "black" }}
                            multiple
                            id="tags-filled"
                            options={item.maplists.map((option) => option)}
                            defaultValue={item.maplists.map((option) => option)}
                            // defaultValue={[top100Films[1].title]}
                            freeSolo
                            onChange={(event, value) =>
                              onChangeHandlerMap(value)
                            }
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
                            {listerr ? (
                              <div style={errmsg}>{listerr}</div>
                            ) : null}
                          </center>
                        </Stack>

                        <Box>
                          <img
                            src={API + "/uploads/" + item.image}
                            alt={item.image}
                            height="50"
                          />
                        </Box>

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
                          Edit RoadMap
                        </button>
                      </form>
                    );
                  })}
                </div>
              ) : (
                <div>Loading...</div>
              )}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default RoadmapUpdate;
