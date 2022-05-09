import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import API from "./../../../redux/url.js";
import axios from "axios";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

import { useMediaQuery } from "@mui/material";
import Bounce from "react-reveal/Bounce";
import animation from "../../../images/animation.png";

const About = () => {
  const check = useMediaQuery("(max-Width:900px)");
  // const check2 = useMediaQuery("(max-Width:452px)");


  const dispatch = useDispatch();

  const [general, setgeneral] = useState(false);

  useEffect(() => {
    // dispatch(getsocial());
    axios.get(API + "/getAboutUsRefresh").then((res) => {
      console.log("getAboutUsRefresh", res.data.user);

      console.log(res.data.user);
      // const getNftPromoteImages = getNftPromote ?  getNftPromote[0].files : getNftPromote;
      setgeneral(res.data.user);
    });
  }, []);








  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,250,246,1) 100%)",
        backgroundColor: "#ffcc94",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            left: "0rem",
            right: "0rem",
          }}
        >
          <img
            className="animation"
            src={animation}
            alt=""
            style={{
              position: "absolute",
              width: check ? "70px" : "100px",
              top: check ? "-2rem" : "-3rem",
              right: "0rem",
              transform: " translateY(-50%) translateX(-10%)",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            pb: check ? "13%" : "5%",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "38px" },
              color: "#894500",
              my: "5%",
              fontFamily: "MilkyNice",
            }}
          >
            About
            <Box display="flex" justifyContent="center">
              <Divider
                sx={{
                  width: { md: "110px", xs: "80px" },
                  height: "3px",
                  backgroundColor: "#894500",
                }}
              />
            </Box>
          </Typography>

          {general ? (
            <div>
              { general.map((item, index) => {
                return (
                  <Grid
                    container
                    justifyContent="center"
                    spacing={3}
                    key={index}
                  >
                    <Grid item xs={12} md={6} align="center">
                      <Bounce left>
                        <Box
                          pt={2}
                          pb={{ xs: 0, md: 7 }}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            maxWidth: "400px",
                            height: "100%",
                            border: "2px solid #ff9d09",
                            my: 3,
                            position: "relative",
                            left: "0rem",
                            right: "0rem",
                            borderRadius: "40px",
                          }}
                        >
                          <Button
                            sx={{
                              background:
                                "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                              fontSize: check ? "16" : "20px",
                              width: "60%",

                              fontWeight: "bold",
                              borderRadius: "30px",
                              py: "5px",
                              px: "10px",
                              fontFamily: "MilkyNice",
                              position: "absolute",
                              top: "-.1rem",
                              left: "50%",
                              transform: " translateY(-50%) translateX(-50%)",
                            }}
                          >
                            RagDoll Cat
                          </Button>

                          <Typography
                            sx={{
                              p: "20px",
                              fontSize: { md: "20px", xs: "16px" },
                              color: "#903800",
                              fontFamily: "Helvetica",
                              textAlign: "justify",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: item.descone && item.descone,
                            }}
                          ></Typography>
                        </Box>
                      </Bounce>
                    </Grid>
                    <Grid item xs={12} md={6} align="center">
                      <Bounce right>
                        <Box
                          pt={2}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            maxWidth: "400px",
                            height: "100%",
                            border: "2px solid #ff9d09",
                            borderRadius: "40px",
                            my: 3,
                            position: "relative",
                            left: "0rem",
                            right: "0rem",
                          }}
                        >
                          <Button
                            sx={{
                              background:
                                "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                              fontSize: check ? "16" : "20px",
                              width: "60%",
                              fontWeight: "bold",
                              borderRadius: "30px",
                              py: "5px",
                              px: "10px",
                              fontFamily: "MilkyNice",
                              position: "absolute",
                              top: "-.1rem",
                              left: "50%",
                              transform: " translateY(-50%) translateX(-50%)",
                            }}
                          >
                            RagDoll Cat NFT
                          </Button>

                          <Typography
                            sx={{
                              p: "20px",
                              fontSize: { md: "20px", xs: "16px" },
                              color: "#903800",
                              fontFamily: "Helvetica",
                              textAlign: "justify",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: item.desctwo && item.desctwo,
                            }}
                          ></Typography>
                        </Box>
                      </Bounce>
                    </Grid>
                  </Grid>
                );
              })}
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default About;
