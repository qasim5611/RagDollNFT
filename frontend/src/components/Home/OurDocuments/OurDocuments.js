import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import API from "./../../../redux/url.js";
import axios from "axios";

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import banner from "../../../images/hue.png";
import logo from "../../../images/logo.png";
import Bounce from "react-reveal/Bounce";


export default function OurDocuments() {


  const dispatch = useDispatch();

  const [general, setgeneral] = useState(false);
  const [generalHead, setgeneralHead] = useState(false);


  useEffect(() => {
    // dispatch(getsocial());
    axios.get(API + "/getHomeDocsRefresh").then((res) => {
      console.log("getHomeDocsRefresh", res.data.user);
      console.log(res.data.user);
      // const getNftPromoteImages = getNftPromote ?  getNftPromote[0].files : getNftPromote;
      setgeneral(res.data.user);
    });
  }, []);


    useEffect(() => {
      axios.get(API + "/getDocsHeadingRefresh").then((res) => {
        console.log("getDocsHeadingRefresh", res.data);
        console.log(res.data.user);
        setgeneralHead(res.data.user);
      });
    }, []);



  return (
    <Box
      pb={5}
      style={{
        background:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,250,246,1) 100%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% 100%",
        backgroundSize: "cover",
      }}
    >
      <Container>
        {generalHead ? (<>
          {generalHead.map((item,index) =>{
            return (
              <Box textAlign="center">
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "MilkyNice",
                      fontSize: { xs: "27px", md: "36px" },
                      fontWeight: "700",
                      color: "#894500",
                      pt: "2%",
                    }}
                  >
                    {item.title}
                    <Box display="flex" justifyContent="center">
                      <Divider
                        style={{
                          width: "150px",
                          height: "3px",
                          backgroundColor: "#894500",
                        }}
                      />
                    </Box>
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Helvetica",
                      fontSize: "18px",
                      fontWeight: "550",
                      color: "#903800",
                    }}
                    mt={3}
                    dangerouslySetInnerHTML={{
                      __html: item.description && item.description,
                    }}
                  ></Typography>
                </Box>
              </Box>
            );
          } )}
        </>) : (<>Loading...</>) }

   

        <Grid container mt={2} spacing={5}>
          {general ? (
            <>
              {general.map((item, index) => {
                return (
                  <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
                    <Box textAlign="center">
                      <Bounce left>
                        <Box
                          sx={{
                            backgroundImage: `url(${banner})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "100% 100%",
                            height: "30rem",
                          }}
                        >
                          <Box p={5}>
                            <Typography
                              p={3}
                              borderBottom="5px solid white"
                              sx={{
                                fontSize: "20px",
                                fontWeight: "600",
                              }}
                            >
                              {item.title}
                            </Typography>
                          </Box>

                          <Box>
                            <img
                              style={{
                                height: "150px",
                                width: "150px",
                                borderRadius: "50%",
                              }}
                              src={API + "/uploads/" + item.image}

                              // src={logo}
                            />
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            border="3px solid #FF8504"
                            borderRadius="30px"
                            mt={3}
                            sx={{ width: "fit-content" }}
                          >
                            <a
                              href={item.btnlink}
                              target="_blank"
                              style={{ textDecoration: "none" }}
                            >
                              <Button
                                sx={{
                                  textTransform: "capitalize",
                                  border: "1.5px solid white",
                                  borderRadius: "30px",
                                  width: "200px",
                                  backgroundImage:
                                    "linear-gradient(to right, #FF8605, #FFAB24)",
                                  fontSize: { xs: "14px", md: "18px" },
                                  fontWeight: "700",
                                  boxShadow: 4,
                                  textAlign: "center",
                                  py: "5%",
                                }}
                              >
                                {item.btn}
                              </Button>
                            </a>
                          </Box>
                        </Box>
                      </Bounce>
                    </Box>
                  </Grid>
                );
              })}
            </>
          ) : (
            <div>Loading...</div>
          )}

      
        </Grid>
      </Container>
    </Box>
  );
}
