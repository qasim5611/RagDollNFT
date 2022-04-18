import { Box, Grid, Divider, Container } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BelowHead from "../belowHead/belowHead";
import React from 'react'
export default function Buiness() {
  const buttonArrray = [
    "RDC token",
    "NFT marketplace",
    "live cat marketplace",
    "stake & earn",
    "community",
    "referral",
    "promotion"
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,197,134,1) 3%, rgba(255,203,146,1) 59%, rgba(255,250,246,1) 100%, rgba(255,255,255,1) 100%)"
      }}
      pt={11.5}
      pb={4}
    >
      <BelowHead />
      <Container>
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            md={3}
            display="flex"
            justifyContent={{ xs: "center", md: "none" }}
          >
            <Box textAlign="center">
              {buttonArrray.map((item) => {
                return (
                  <Box
                    sx={{
                      width: "220px",
                      border: "3px solid #FF8504",
                      borderRadius: "30px",
                      backgroundImage:
                        "linear-gradient(to right, #FF8605, #FFAB24)",
                      boxShadow: 4
                    }}
                    mt={1}
                  >
                    <Box
                      zIndex={1}
                      sx={{
                        cursor: "pointer",
                        textTransform: "capitalize"
                      }}
                      width="100%"
                      height="42px"
                      fontWeight="500"
                      border="1px solid white"
                      borderRadius="30px"
                      fontSize={{ xs: "13px", md: "16px" }}
                      fontFamily="Helvetica"
                      color="#ffffff"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      pr={1}
                    >
                      <Box width="90%" mt={0.5}>
                        {item}
                      </Box>
                      <Box width="10%" alignSelf="flex-end" pr={1}>
                        <ArrowForwardIosIcon fontSize="small" />
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box pt={3}>
              <Box pb={3} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    color: "#894500",
                    fontSize: { md: "36px", xs: "25px" },
                    fontFamily: "MilkyNice",
                    fontWeight: "bold"
                  }}
                >
                  Business & Opportunities
                </Box>
                <Box display="flex" justifyContent="center">
                  <Divider
                    style={{
                      width: "130px",
                      height: "3px",
                      backgroundColor: "#894500"
                    }}
                  />
                </Box>
              </Box>

              <Box
                fontSize={{ md: "18px", xs: "14px" }}
                fontFamily="Helvetica"
                color="#371F00"
                textAlign="center"
                fontWeight="700"
              >
                RDC Token
              </Box>

              <Box mt={1}>
                <img src="/images/img.png" width="100%" />
              </Box>

              <Box
                color="#151210"
                fontSize={{ md: "15px", xs: "13px" }}
                fontFamily="Helvetica"
                textAlign="justify"
              >
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampen-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lore
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a trea- tie on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum...
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
