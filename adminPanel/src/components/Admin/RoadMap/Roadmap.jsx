import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/system";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import ResetTvIcon from "@mui/icons-material/ResetTv";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { useMediaQuery } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import ImageUploading from "react-images-uploading";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Row, Col } from "reactstrap";
import "./../style.css";
import "./../create.css";
// import "./animate.css";
import { confirmAlert } from "react-confirm-alert"; // Import

import "react-confirm-alert/src/react-confirm-alert.css"; 

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
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


import { deleteRoadmapByid } from "../../../redux/actions/Roadmap_action.js";

import API from "../../../redux/url.js";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();



const Roadmap = () => {
  const dispatch = useDispatch();


  const [articleList, setArticleList] = useState(false);
  const [articleList2, setArticleList2] = useState(false);

  const searchTextField = (e) => {
    e.preventDefault();
    let searching = e.target.value.toLowerCase();
    let result = articleList2.filter(
      (item) => item.title && item.title.toLowerCase().includes(searching)
    );
    setArticleList(result);
  };

  
  const isRoadmapDeleted = useSelector(
    (state) => state.RoadmapReducer.isRoadmapDeleted
  );

  console.log("isRoadmapDeleted");
  console.log(isRoadmapDeleted);



  useEffect(() => {
    axios.get(API + "/getRoadmap").then((result) => {
      console.log("getRoadmap");
      console.log(result.data);

      setArticleList(result.data.user);
      setArticleList2(result.data.user);
    });
  }, [isRoadmapDeleted]);



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




  const submit = (_id) => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteRoadmap(_id),
        },
        {
          label: "No",
        },
      ],
    });
  };


  const deleteRoadmap = (id) => {
    dispatch(deleteRoadmapByid(id));
  };







  return (
    <div class="content-wrapper">
      <div
        id="order_preview"
        class="wow fadeInUp content_box"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        {/* Companies Header and Search Bar Start */}

        <Row className="table-header">
          <Col md="4">
            <h2 class="section-title">All RoadMaps</h2>
          </Col>
          <Col md="8">
            <form class="form-inline form-searchbar" action="#">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Roadmap.."
                  onChange={searchTextField}
                  style={{ width: "100%" }}
                />
              </div>
              <NavLink to="/adminDashboard/appsetting/list/roadmapCreate">
                <button
                  type="submit"
                  class="btn btn-default"
                  style={{ padding: "10px" }}
                >
                  Add RoadMap
                </button>
              </NavLink>
            </form>
          </Col>
        </Row>

        {/* Companies Table Sart */}

        <div class="row">
          <div class="col-xs-12 col-md-12">
            <div class="table-responsive">
              {articleList ? (
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <th class="active">S#</th>
                      <th class="active">RoadMap Title</th>
                      <th class="active">RoadMap List</th>

                      <th class="active">RoadMap Image</th>

                      <th class="active" style={{ width: "300px" }}>
                        Action
                      </th>
                    </tr>

                    {articleList.map((item, ind) => {
                      return (
                        <tr>
                          <td>{ind + 1}</td>
                          <td>{item.title && item.title}</td>
                          <td>
                            <p>
                              {item.maplists ? (
                                <div>
                                  {item.maplists.map((item, i) => {
                                    return (
                                      <p
                                        key={i}
                                        style={{
                                          width: "30%",
                                          float: "left",
                                          backgroundColor: "#dbf1ff",
                                          borderRadius: "15px",
                                          color: "black",
                                          padding: "3px 7px",
                                          margin: "0px 4px 3px 0px",
                                          border: "1px #101924 solid",
                                          textAlign: "center",
                                        }}
                                      >
                                        {item}
                                      </p>
                                    );
                                  })}
                                </div>
                              ) : (
                                <div>Loading...</div>
                              )}
                            </p>
                          </td>

                          <td>
                            <img
                              src={API + "/uploads/" + item.image}
                              alt={item.image}
                              height="50"
                            />
                          </td>

                          <td style={{ textAlign: "center" }}>
                            <Link
                              to={`/adminDashboard/appsetting/list/roadmapUpdate/${item._id}`}
                            >
                              <ModeEditIcon />
                            </Link>

                            <DeleteForeverIcon
                              onClick={() => submit(item._id)}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
