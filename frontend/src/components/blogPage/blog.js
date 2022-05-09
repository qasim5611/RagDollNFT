import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import API from "./../../redux/url";
import axios from "axios";


import BelowHead from "../belowHead/belowHead";

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
} from "@mui/material";
export default () => {

const [general, setgeneral] = useState(false);

useEffect(() => {

  axios.get(API + "/getBlog").then((res) => {
    console.log("getBlog", res.data.user);
    console.log(res.data.user);
    setgeneral(res.data.user);
     window.scrollTo(0, 0);
  });
}, []);


  return (
    <Box
      py={11}
      sx={{
        background:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,197,134,1) 3%, rgba(255,203,146,1) 59%, rgba(255,250,246,1) 100%, rgba(255,255,255,1) 100%)",
      }}
    >
      <BelowHead />
      <Container>
        <Box
          py={3}
          sx={{
            color: "#371F00",
            fontSize: { md: "28px", xs: "20px" },
            fontFamily: "Helvetice-Bold",
         
          }}
        >
          Blog will live just after presale
        </Box>

        <Grid container>
          <Grid item md={9} sm={12}>
            {general ? (
              <div>
                {general.map((item, index) => {
                  return (
                    <Box>
                      <Box p={1}>
                        <img
                          // src={icon1}
                          src={API + "/uploads/" + item.image}
                          alt=""
                          style={{
                            height: "400px",
                            width: "100%",
                          }}
                        />
                      </Box>
                      <Box
                        px={1}
                        sx={{
                          fontSize: "12px",
                          color: "black",
                        }}
                      >
                        {item.date}
                      </Box>
                      <Box
                        px={1}
                        pb={index == 2 ? 3 : index == 3 ? 6 : 1}
                        sx={{
                          fontWeight: "bold",
                          color: "black",
                          fontSize: { md: "16px", xs: "14px" },
                        }}
                      >
                        * {item.title}
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
                })}
              </div>
            ) : (
              <div>Loading...</div>
            )}
          </Grid>
          <Grid
            item
            md={3}
            sm={12}
            sx={{
              color: "white",
              // backgroundImage: "linear-gradient(to right, rgb(255 104 3 / 0%), rgb(255 131 6))",
              textAlign: 'center',
              padding: '10px',
              borderRadius: '5px'
            }}
          >
            Bogs Side Bar Area
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
