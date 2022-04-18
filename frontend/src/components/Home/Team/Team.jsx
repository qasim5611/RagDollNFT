import React from "react";
import Bounce from "react-reveal/Bounce";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery
} from "@mui/material";
import icon1 from "../../../images/1.png";
import icon2 from "../../../images/2.png";
import icon3 from "../../../images/3.png";
import icon4 from "../../../images/4.png";
import icon5 from "../../../images/5.png";
import icon6 from "../../../images/6.png";
import tw from "../../../images/twwiter.png";
import fb from "../../../images/fb.png";
import insta from "../../../images/insta.png";
import linkin from "../../../images/linkden.png";
import tele from "../../../images/tele.png";
import msg from "../../../images/msg.png";
import robo from "../../../images/robo.png";
import pin from "../../../images/pin.png";

const Team = () => {
  const check = useMediaQuery("(max-Width:900px)");

  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,250,246,1) 100%)",
        // backgroundColor: "#ffcc94",
        pb: "30px"
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "28px", md: "38px" },
              fontWeight: "Bold",
              color: "#894500",
              my: "5%",
              fontFamily: "MilkyNice"
            }}
          >
            Dev Team
            <Box display="flex" justifyContent="center">
              <Divider
                style={{
                  width: "120px",
                  height: "3px",
                  backgroundColor: "#894500"
                }}
              />
            </Box>
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item align="center" xs={12} md={4}>
              <Bounce left>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                  }}
                >
                  <Box>
                    <img
                      src={icon1}
                      alt=""
                      style={{
                        maxWidth: "300px",
                        width: "100%"
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "Bold",
                        color: "#903800",
                        fontFamily: "Helvetica"
                      }}
                    >
                      Jaxz
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "Bold",
                        color: "#903800",
                        fontFamily: "Helvetica"
                      }}
                    >
                      CEO
                    </Typography>
                  </Box>
                </Box>
              </Bounce>
            </Grid>
            <Grid item align="center" xs={12} md={4}>
              <Bounce left>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                  }}
                >
                  <Box>
                    <img
                      src={icon2}
                      alt=""
                      style={{
                        maxWidth: "300px",
                        width: "100%"
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "Bold",
                        color: "#903800",
                        fontFamily: "Helvetica"
                      }}
                    >
                      Mofnlink
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "Bold",
                        color: "#903800",
                        fontFamily: "Helvetica"
                      }}
                    >
                      COO & Marketing
                    </Typography>
                  </Box>
                </Box>
              </Bounce>
            </Grid>
            <Grid item align="center" xs={12} md={4}>
              <Bounce left>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                  }}
                >
                  <Box>
                    <img
                      src={icon3}
                      alt=""
                      style={{
                        maxWidth: "300px",
                        width: "100%"
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "Bold",
                        color: "#903800",
                        fontFamily: "Helvetica"
                      }}
                    >
                      Suzb
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "Bold",
                        color: "#903800",
                        fontFamily: "Helvetica"
                      }}
                    >
                      CFO & Marketing Manager
                    </Typography>
                  </Box>
                </Box>
              </Bounce>
            </Grid>
            <Grid item align="center" xs={12} md={4}>
              <Bounce right>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                  }}
                >
                  <Box>
                    <img
                      src={icon4}
                      alt=""
                      style={{
                        maxWidth: "300px",
                        width: "100%"
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "Bold",
                        color: "#903800",
                        fontFamily: "Helvetica"
                      }}
                    >
                      Msis
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "Bold",
                        color: "#903800",
                        fontFamily: "Helvetica"
                      }}
                    >
                      Graphic Designer & <br /> Community Manager
                    </Typography>
                  </Box>
                </Box>
              </Bounce>
            </Grid>
            <Grid item align="center" xs={12} md={4}>
              <Bounce right>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                  }}
                >
                  <Box>
                    <img
                      src={icon5}
                      alt=""
                      style={{
                        maxWidth: "300px",
                        width: "100%"
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "Bold",
                        color: "#903800",
                        fontFamily: "Helvetica"
                      }}
                    >
                      S M Zmn & Team
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "Bold",
                        color: "#903800",
                        fontFamily: "Helvetica"
                      }}
                    >
                      NFT Artist & Dev
                    </Typography>
                  </Box>
                </Box>
              </Bounce>
            </Grid>
            <Grid item align="center" xs={12} md={4}>
              <Bounce right>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column"
                  }}
                >
                  <Box>
                    <img
                      src={icon6}
                      alt=""
                      style={{
                        maxWidth: "300px",
                        width: "100%"
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "Bold",
                        color: "#903800",
                        fontFamily: "Helvetica"
                      }}
                    >
                      Sulaman
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "Bold",
                        color: "#903800",
                        fontFamily: "Helvetica"
                      }}
                    >
                      Main Dev & Web 3.0 Expert
                    </Typography>
                  </Box>
                </Box>
              </Bounce>
            </Grid>
          </Grid>
          <Box
            sx={{
              maxWidth: "500px",
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "center",
              my: "4%"
            }}
          >
            <a href="">
              <img
                src={tw}
                alt=""
                style={{ maxWidth: "30px", minHeight: "30px" }}
              />
            </a>
            <a href="">
              <img
                src={fb}
                alt=""
                style={{ maxWidth: "30px", minHeight: "30px" }}
              />
            </a>
            <a href="">
              <img
                src={insta}
                alt=""
                style={{ maxWidth: "30px", minHeight: "30px" }}
              />
            </a>
            <a href="">
              <img
                src={linkin}
                alt=""
                style={{ maxWidth: "30px", minHeight: "30px" }}
              />
            </a>
            <a href="">
              <img
                src={tele}
                alt=""
                style={{ maxWidth: "30px", minHeight: "30px" }}
              />
            </a>
            <a href="">
              <img
                src={msg}
                alt=""
                style={{ maxWidth: "30px", minHeight: "30px" }}
              />
            </a>
            <a href="">
              <img
                src={robo}
                alt=""
                style={{ maxWidth: "30px", minHeight: "30px" }}
              />
            </a>
            <a href="">
              <img
                src={pin}
                alt=""
                style={{ maxWidth: "30px", minHeight: "30px" }}
              />
            </a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Team;
