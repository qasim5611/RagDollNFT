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

import { setNftPopular } from "../../../redux/actions/adminDash_action.js";

import { getNftPopularRefresh } from "../../../redux/actions/adminDash_action.js";

import API from "../../../redux/url.js";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();



const NftPopular = () => {
  const dispatch = useDispatch();

   

   useEffect(() => {
     // dispatch(getsocial());
     console.log('useEffect');
     dispatch(getNftPopularRefresh());
   }, []);


  const filesstyle = {
    color: 'black',
    border: '1px black solid',
    width: '100%',
    background: 'white',
    height: '36px',
    padding: '7px',
    border: '1px solid rgb(190, 194, 199)',
    borderRadius: '7px',
    marginBottom: '20px',
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  }
   

  // const [NftPopular, setNftPopular] = useState("");


  const NftPopular = useSelector((state) => state.adminDashboard_red);
  console.log("NftPopular.NftPopulard now");
  const getNftPopular = NftPopular.NftPopular;
  console.log(getNftPopular);
  const getNftPopularImages = getNftPopular ?  getNftPopular[0].files : getNftPopular;

  const NftPopularID = getNftPopular ?  getNftPopular[0]._id : getNftPopular;


console.log("getNftPopularImages");
console.log(getNftPopularImages);




 

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
       
        console.log('state.title');
         console.log(state.title);
         console.log(NftPopularID);


        formData.append('title', state.title);
        formData.append("id", NftPopularID);

        for (let i = 0; i < multipleFiles.length; i++) {
            formData.append('files', multipleFiles[i]);                      
        }
        console.log('formData');
        console.log(formData);
        console.log(mulitpleFileOptions);

        // dispatch(setNftPopular);
      dispatch(setNftPopular(formData, mulitpleFileOptions));


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
    title: "",
    id: NftPopularID,
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
              Change Nft-Popular Settings
            </Typography>
          </Box>
        </Box>
        {/* <Investtab /> */}
        {getNftPopular ? (
          <div>
            {getNftPopular.map((item, index) => {
              console.log(item.files);

              return (
                <Box
                  sx={{
                    width: "50%",
                    margin: "0px auto",
                  }}
                >
                  <Box
                    sx={{
                      color: "#037dff",
                      display: "flex",
                      marginBottom: "4px",
                    }}
                  >
                    <label>Set Title</label>
                  </Box>

                  <Paper component="form" style={inputstyle}>
                    <IconButton
                      sx={{ p: "5px" }}
                      aria-label="menu"
                    ></IconButton>
                    <InputBase
                      style={labls}
                      placeholder="Enter Your Title"
                      name="title"
                      onChange={onChangeHandler}
                      defaultValue={item.title}
                    />
                  </Paper>

                  <center>
                    {titleerr ? <div style={errmsg}>{titleerr}</div> : null}
                  </center>

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
                    <input
                      type="file"
                      style={filesstyle}
                      onChange={(e) => MultipleFileChange(e)}
                      className="form-control"
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
                      <ResetTvIcon sx={{ mr: "10px" }} /> Upload NFT-Popular
                    </Button>
                  </Box>
                </Box>
              );
            })}
          </div>
        ) : (
          <div>
            Lading...
          </div>
        )}

        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {getNftPopularImages ? (
            <div style={{ display: "flex" }}>
              {getNftPopularImages.map((item, index) => {
                return (
                  <SwiperSlide>
                    {" "}
                    <img
                      src={API + "/" + item.filePath}
                      style={{ height: "150px", width: "150px" }}
                    />
                  </SwiperSlide>
                );
              })}
            </div>
          ) : (
            <div>Loading...</div>
          )}

          {/*  */}
        </Swiper>
      </Container>
    </Box>
  );
};

export default NftPopular;
