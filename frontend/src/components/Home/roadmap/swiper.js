
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import API from "./../../../redux/url.js";
import axios from "axios";

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import { Navigation } from "swiper";
import useMediaQuery from '@mui/material/useMediaQuery';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
export default () => {
    const [general, setgeneral] = useState(false);

    useEffect(() => {
      axios.get(API + "/getRoadmap").then((res) => {
        console.log("getRoadmap", res.data.user);
        console.log(res.data.user);
        setgeneral(res.data.user);
      });
    }, []);
    const matches = useMediaQuery('(min-width:950px)');
    let road1 = [
        'Market Research',
        'Project Concept',
        'Website Launch',
        'Whitepaper',
        'Team Organization',
        'Early Marketing Plan',
        'Socials Development',
        'Community Event',
        'Contract Deployment',
        'Awareness Campaign',
    ]

    let road2 = [
        'Ads and Promotions',
        'Audit and KYC',
        'Whitelist Competition',
        'Referral Contest ',
        'Private Presale',
        'Marketing Campaign',
        'Pinksale Presale',
        'Pancakeswap Launch',
        'NFT Marketplace Launch',
        'Staking Platform Launch',
        'Live Cat Marketplace Launch',
        'Cat Lovers Community Launch'
    ]

    let road3 = [
        'Mega Buyback',
        'CMC & CG Listing',
        'More Partnership',
        'YouTube Promotion',
        'Big Marketing Campaign',
        'Centralized Exchanges',
        'Influencer Collaboration',
        'Continuous Content Release',
        'Regular Marketing',
        'Regular Buyback',
        'Stay Tuned for The Next Update'
    ]
    return (
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
        >
          {general ? (<>
              {general.map((item, index) =>{
                  return (
                    <SwiperSlide>
                      <Box pt={3} pl={3}>
                        <Button
                          sx={{
                            border: "1.5px solid white",
                            borderRadius: "30px",
                            fontFamily: "Helvetica",
                            backgroundImage:
                              "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                            color: "#371F00",
                            fontSize: { xs: "18px", md: "26px" },
                            fontWeight: "900",
                            boxShadow: 4,
                            width: { md: "60%", xs: "50%" },
                          }}
                        >
                          {item.title}
                        </Button>
                        <Box pt={2}>
                          {item.maplists.map((text, i) => {
                            return (
                              <Box pl={1} pt={1} key={i}>
                                <Box
                                  component="span"
                                  style={{ color: "green" }}
                                >
                                  &#10004;{" "}
                                </Box>
                                <Box
                                  pl={1}
                                  component="span"
                                  sx={{
                                    color: "#371F00",
                                  }}
                                >
                                  {" "}
                                  {text}
                                </Box>
                              </Box>
                            );
                          })}
                        </Box>
                      </Box>
                    </SwiperSlide>
                  );
              } ) }
          </>) : (<div>Loading...</div>) }
        

          {/* <SwiperSlide>
                <Box pt={3} pl={3}>
                    <Button
                        sx={{
                            border: "1.5px solid white",
                            borderRadius: "30px",
                            fontFamily: 'Helvetica',
                            backgroundImage:
                                "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                            color: '#371F00',
                            fontSize: { xs: "18px", md: "26px" },
                            fontWeight: "900",
                            boxShadow: 4,
                            width: { md: '40%', xs: '50%' }
                        }}>
                        PHASE TWO
                    </Button>
                    <Box pt={2}>
                        {
                            road2.map((text, i) => {
                                return <Box pl={1} pt={1} key={i}>
                                    <Box component='span' style={{ color: 'green' }}>&#10004; </Box>
                                    <Box pl={1} component='span' sx={{
                                        color: '#371F00'
                                    }}> {text}</Box>
                                </Box>
                            })
                        }
                    </Box>

                </Box>
            </SwiperSlide>

            <SwiperSlide>
                <Box pt={3} pl={3}>
                    <Button
                        sx={{
                            border: "1.5px solid white",
                            borderRadius: "30px",
                            fontFamily: 'Helvetica',
                            backgroundImage:
                                "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                            color: '#371F00',
                            fontSize: { xs: "18px", md: "26px" },
                            fontWeight: "900",
                            boxShadow: 4,
                            width: { md: '43%', xs: '53%' }
                        }}>
                        PHASE THREE
                    </Button>
                    <Box pt={2}>
                        {
                            road3.map((text, i) => {
                                return <Box pl={1} pt={1} key={i}>
                                    <Box component='span' style={{ color: 'green' }}>&#10004; </Box>
                                    <Box pl={1} component='span' sx={{
                                        color: '#371F00'
                                    }}> {text}</Box>
                                </Box>
                            })
                        }
                    </Box>

                </Box>
            </SwiperSlide> */}

          <Box pt={3} sx={{ display: "flex", justifyContent: "center" }}>
            <FaArrowCircleLeft
              className="swiper-button-prev"
              style={{
                marginRight: "10px",
                color: "#FF5100",
                fontSize: "2rem ",
              }}
            />
            <FaArrowCircleRight
              className="swiper-button-next"
              style={{
                color: "#FF5100",
                fontSize: "2rem ",
              }}
            />
          </Box>
        </Swiper>
      </>
    );
}