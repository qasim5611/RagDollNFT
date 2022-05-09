import { Box, Grid, Divider, Container } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BelowHead from "../belowHead/belowHead";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import { Autoplay, Navigation } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { HashLink } from "react-router-hash-link";
import ForwardSharpIcon from "@mui/icons-material/ForwardSharp";

export default function Buiness() {
  const banner = [
    "banner 1",
    "banner 2",
    "banner 3",
    "banner 4",
    "banner 5",
    "banner 6"
  ];
  const matches1 = useMediaQuery("(min-width:1050px)");
  // const matches2 = useMediaQuery("(min-Width:790px)");
  const buttonArrray = [
    "RDC token",
    "NFT marketplace",
    "live cat marketplace",
    "stake & earn",
    "community",
    "referral",
    "promotion"
  ];
  const content = [
    "Buy RDC & Keep S For Better Future.",
    "Create NFT & Sell To Get A Lifetime Of 5% Royalty.",
    "5% Referral Reward From The Overall Profit Of Direct Referral.",
    "Passive Income Opportunity By Company Ownership With RDC .",
    "Best Referral Achiever Reward.",
    "Atractive Staking Opportunities With A Compounding System.",
    "Opportunity To Work With Us As Country/ Regional Manager Or, Brand Ambassador. (Contract With Us For More Details)",
    "We Will Offer Continuously Different Attractive Opportunities, Stay With Us To Get More Updates. (Offer May Be Published On Our Official Social Media, Website, Or, Blog.)"
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,197,134,1) 3%, rgba(255,203,146,1) 59%, rgba(255,250,246,1) 100%, rgba(255,255,255,1) 100%)"
      }}
      pt={11.5}
      pb={3}
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

              {/* <Box
                fontSize={{ md: "18px", xs: "14px" }}
                fontFamily="Helvetica"
                color="#371F00"
                textAlign="center"
                fontWeight="700"
              >
                RDC Token
              </Box> */}

              <Box mt={1}>
                <img src="/images/img.jpeg" width="100%" />
              </Box>

              <Box
                color="#151210"
                fontSize={{ md: "15px", xs: "13px" }}
                fontFamily="Helvetica"
                textAlign="justify"
              >
                <Box component="p">
                  When selling any NFT, 80% Amount will y~ to he seller's
                  wallet, and 10% of the amount will go to the admin wallet,
                  admin can change the wallet anytime from the dashboard. 5%
                  will go to the Creator wallet, another 5% will distribute
                  among all previous holders.
                </Box>
                <Box component="p">
                  <span style={{ fontSize: "18px" }}>Example 1:</span> "A"
                  Created an NFT to sell & "B" Bought it 80% of the money will
                  go to A's wallet as an NFT Seller, 10% will go to Admin
                  wallet, 5% will go again to A's account as he is the creator
                  of the NFT, Another 5% will go again to A'S wallet as he is
                  the only previous holder of the NFT,
                </Box>
                <Box component="p">
                  <span style={{ fontSize: "18px" }}>Example 2:</span> When "B"
                  Will sells the same NFT to "C" "B" will receive 80% amount as
                  the seller; 10% will go to the admin wallet, 5% will go to "A"
                  as he is the creator of the NFT. Another 5% will distribute
                  between "A & B" as they both are the previous holder of the
                  NFT.
                </Box>
                <Box component="p">
                  <span style={{ fontSize: "18px" }}>Example 3:</span> Again
                  when "C" Will sells the same NFT to "D". "C" will receive 80%
                  amount as seller, 10% will go to the admin wallet, and 5% will
                  go to "A" as he is the creator of the NFT. Another 5% will
                  distribute Among "A, B & C" as they all are the previous
                  holder of the NFT.
                </Box>
                <Box component="p">
                  <span style={{ fontSize: "18px" }}>Example 4:</span> Now again
                  when "D" Will selis the same NFT to "E", "D" will receive 80%
                  amount as seller, 10% will go to the admin wallet, 5% will go
                  to "A" as he is the creator of the NFT. Another 5% will
                  distribute Among "A, B, C & D" as they all are the previous
                  holders of the NFT.
                </Box>
                <Box component="p">
                  Theprocess will continue like this: If 100th people buy the
                  same NFT one after another, the 5% will be distributed among
                  the all previous 99 holders: B0% to the last seller, 10% to
                  the Admin wallet, And another 5% will go to the Creator wallet
                  (The first person)
                </Box>

                <Box>
                  {content.map((data) => {
                    return (
                      <Box display="flex" mb={1}>
                        <ForwardSharpIcon
                          sx={{ color: "orange", marginRight: "7px" }}
                          fontSize="small"
                        />
                        <Box>{data}</Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <HashLink to="/#BuyRDC" smooth>
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }}
            autoplay={{
              delay: 2500
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {banner.map((image) => {
              return (
                // <SwiperSlide>
                //   <Box mt={4} textAlign="center">
                //     <img
                //       src={
                //         matches1
                //           ? `/images/970x90/${image}.jpg`
                //           : matches2
                //           ? `/images/730x90/${image}.jpg`
                //           : `/images/320x100.jpg`
                //       }
                //     />
                //   </Box>
                // </SwiperSlide>
                <SwiperSlide>
                  <Box
                    mt={4}
                    display={matches1 ? "flex" : "none"}
                    justifyContent="center"
                  >
                    <img src={`/images/970x90/${image}.jpg`} />
                  </Box>

                  <Box
                    mt={4}
                    justifyContent="center"
                    display={matches1 ? "none" : "flex"}
                  >
                    <img src={`/images/730x90/${image}.jpg`} width="100%" />
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </HashLink>
      </Container>
    </Box>
  );
}
