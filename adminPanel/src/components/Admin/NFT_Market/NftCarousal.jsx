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

import { setNftBanner } from "../../../redux/actions/adminDash_action.js";

import { getNftBannerRefresh } from "../../../redux/actions/adminDash_action.js";

import API from "../../../redux/url.js";
import axios from "axios";
import Cookies from "universal-cookie";

import "./style.css";



const cookies = new Cookies();



const NftRecent = () => {
  const dispatch = useDispatch();

   

   useEffect(() => {
     // dispatch(getsocial());
     console.log('useEffect');
     dispatch(getNftBannerRefresh());
   }, []);


  const filesstyle = {
    color: 'black',
    // border: '1px black solid',
    width: '100%',
    background: 'white',
    height: '115px',
    paddingTop: '92px',
    border: '5px red dashed !important',
    // border: '1px solid rgb(190, 194, 199)',
    borderRadius: '7px',
    marginBottom: '20px',
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  }
   

  const NftRecent = useSelector((state) => state.adminDashboard_red);
  console.log("getNftBanner now");
  const getNftBanner = NftRecent.NftBanner;
  console.log(getNftBanner);

  console.log(getNftBanner.user);


  const getNftBannerImages = getNftBanner ?  getNftBanner.user[0].files : getNftBanner;

  const NftBannerID = getNftBanner ? getNftBanner.user[0]._id : getNftBanner;


console.log("getNftBannerImages");
console.log(getNftBannerImages);

console.log(NftBannerID);



 

    const [multipleFiles, setMultipleFiles] = useState("");
    const [multipleProgress, setMultipleProgress] = useState(0);


   const MultipleFileChange = (e) => {
     setMultipleFiles(e.target.files);
     setMultipleProgress(0);
   };

  const mulitpleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setMultipleProgress(percentage);
    },
  };

    const UploadMultipleFiles = async () => {
        const formData = new FormData();
       
        // console.log('state.title');
        //  console.log(state.title);
         console.log(NftBannerID);

         let title = "banner";
        formData.append('title', title);
        formData.append("id", NftBannerID);

        for (let i = 0; i < multipleFiles.length; i++) {
            formData.append('files', multipleFiles[i]);                      
        }
        console.log('formData');
        console.log(formData);
        console.log(mulitpleFileOptions);

        // dispatch(setNftRecent);
      dispatch(setNftBanner(formData, mulitpleFileOptions));


        // await multipleFilesUpload(formData, mulitpleFileOptions);
        // props.getMultiple();
    }



  const [statement, setStatement] = React.useState(false);
  const handleClickStatement = () => {
    setStatement(!statement);
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


  const [state, setState] = useState({
    // title: "",
    id: NftBannerID,
  });

   const [images, setImages] = React.useState([]);
   const maxNumber = 69;

   const [general, setgeneral] = useState(false);

   const [generalid, setgeneralid] = useState(false);

   const onChange = (imageList, addUpdateIndex) => {
     // data for submit
     console.log(imageList, addUpdateIndex);
     setImages(imageList);
   };

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
      state.title.length < 5 ||
      state.title.length > 20 ||
      state.title.length == 0
    ) {
      isvalid = false;
      settitleerr("title1 to be 5 to 20 characters long");
  
    }  else {
     settitleerr("");
    }

    return isvalid;
  };



  // const SubmitData = (e) => {
  //   e.preventDefault();

  //   window.scrollTo(0, 200);
  //     // dispatch(setNftRecent(images));
  //      const formData = new FormData();
  //       formData.append('title', state.title);
  //       for (let i = 0; i < multipleFiles.length; i++) {
  //           formData.append('files', multipleFiles[i]);                      
  //       }
  //       await multipleFilesUpload(formData, mulitpleFileOptions);
  //       props.getMultiple();
    
  // };

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
              Change Nft-Carousal Banners (970*90)
            </Typography>
          </Box>
        </Box>
        {/* <Investtab /> */}
        <Box
          sx={{
            width: "50%",
            margin: "0px auto",
          }}
        >
          <div className="form-group">
            <Box
              sx={{
                color: "#037dff",
                display: "flex",
                marginBottom: "4px",
              }}
            >
              <label>Select Multiple Images</label>
            </Box>
            <Box className="uploadArea">
              <Box>Drag Drop Images</Box>
            </Box>
            <input
              type="file"
              style={filesstyle}
              onChange={(e) => MultipleFileChange(e)}
              className="form-control dragdrop"
              multiple
            />
          </div>

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
              onClick={() => UploadMultipleFiles()}
              type="submit"
            >
              <ResetTvIcon sx={{ mr: "10px" }} /> Upload NFT-Banners
            </Button>
          </Box>
        </Box>

        {/* {getNftRecent ? (
          <div>
            {getNftRecent.map((item, index) => {
              console.log(item.files);
              {
              }
              return (
                <Box
                  sx={{
                    width: "50%",
                    margin: "0px auto",
                  }}
                >
                  <div className="form-group">
                    <Box
                      sx={{
                        color: "#037dff",
                        display: "flex",
                        marginBottom: "4px",
                      }}
                    >
                      <label>Select Multiple Images</label>
                    </Box>
                    <Box className="uploadArea">
                      <Box>Drag Drop Images</Box>
                    </Box>
                    <input
                      type="file"
                      style={filesstyle}
                      onChange={(e) => MultipleFileChange(e)}
                      className="form-control dragdrop"
                      multiple
                    />
                  </div>

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
                      onClick={() => UploadMultipleFiles()}
                      type="submit"
                    >
                      <ResetTvIcon sx={{ mr: "10px" }} /> Upload NFT-Banners
                    </Button>
                  </Box>
                </Box>
              );
            })}
          </div>
        ) : (
          <div>Loading...</div>
        )} */}

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {getNftBannerImages ? (
            <div style={{ display: "flex" }}>
              {getNftBannerImages.map((item, index) => {
                return (
                  <SwiperSlide>
                    {" "}
                    <img
                      src={API + "/" + item.filePath}
                      style={{ height: "90px", width: "800px" }}
                    />
                  </SwiperSlide>
                );
              })}
            </div>
          ) : (
            <div>Loading...</div>
          )}

        </Swiper>
      </Container>
    </Box>
  );
};

export default NftRecent;
