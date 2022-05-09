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
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Row, Col } from "reactstrap";
import "./style.css";
// import "./animate.css";


import { confirmAlert } from "react-confirm-alert"; // Import



import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
// import CircularProgress from "@material-ui/core/CircularProgress";


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

// import { setNftPopular } from "../../../redux/actions/adminDash_action.js";

import { deleteServiceByid } from "../../../redux/actions/Services_action.js";

import API from "../../../redux/url.js";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();



const HomeServices = () => {
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

  
  const isCategoryDeleted = useSelector(
    (state) => state.ServicesReducer.isServiceDeleted
  );

  console.log("isCategoryDeleted");
  console.log(isCategoryDeleted);



  useEffect(() => {
    axios.get(API + "/getService").then((result) => {
      console.log("getService");
      console.log(result.data);

      setArticleList(result.data.user);
      setArticleList2(result.data.user);
    });
  }, [isCategoryDeleted]);



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
          onClick: () => deleteCategory(_id),
        },
        {
          label: "No",
        },
      ],
    });
  };


  const deleteCategory = (id) => {
    dispatch(deleteServiceByid(id));
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
            <h2 class="section-title">All Services</h2>
          </Col>
          <Col md="8">
            <form class="form-inline form-searchbar" action="#">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Service.."
                  onChange={searchTextField}
                  style={{width: '100%'}}
                />
              </div>
              <NavLink to="/adminDashboard/appsetting/list/service-create">
                <button
                  type="submit"
                  class="btn btn-default"
                  style={{ padding: "10px" }}
                >
                  Add New Service
                </button>
              </NavLink>
              {/* <Link to="/admin/CategoriesAddSubCate" className="ml-5">
                  <button type="submit" class="btn btn-default">
                    Add New Sub Category
                  </button>
                </Link> */}
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
                      <th class="active">Services Title</th>
                      <th class="active">Services Description</th>
                      {/* <th class="active">Short Description</th> */}
                      <th class="active">Button Name</th>
                      {/* <th class="active">Button Link</th> */}

                      {/* <th class="active">Story desc</th> */}
                      <th class="active">Services Image</th>
                      {/* <th class="active">Sub-Category</th> */}

                      <th class="active" style={{ width: "300px" }}>
                        Action
                      </th>
                    </tr>

                    {articleList.map((item, ind) => {
                      return (
                        <tr>
                          <td>{ind + 1}</td>
                          <td>{item.title && item.title}</td>
                          {/* <td>{item.position && item.position}</td> */}

                          <td
                            dangerouslySetInnerHTML={{
                              __html: item.description && item.description,
                            }}
                          ></td>
                          <td>{item.btn && item.btn}</td>
                          <td>
                            <img
                              src={API + "/uploads/" + item.image}
                              alt={item.image}
                              height="50"
                            />
                          </td>

                          {/* <td>{item.category_name && item.category_name}</td>
                            <td>{item.sub_cate && item.sub_cate}</td>
                            <td>{item.isFeatured ? "Yes" : "No"}</td> */}
                          <td style={{ textAlign: "center" }}>
                            <Link
                              to={`/adminDashboard/appsetting/list/service-update/${item._id}`}
                            >
                              <ModeEditIcon />
                            </Link>
                            {/* <Link to={`/admin/magzine_update/${item._id}`}>
                     
                        <FontAwesomeIcon
                          icon={faUserEdit}
                          className="iconCompany"
                        />
                      </Link> */}

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

export default HomeServices;
