import React, { useState, useEffect, useContext, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import API from "./../../../redux/url.js";
import axios from "axios";


import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Autoplay, Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
// import { Navigation,  } from "swiper";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";

export default ({ data, number }) => {
  const matches = useMediaQuery("(min-width:950px)");
  const matches1 = useMediaQuery("(min-width:650px)");


  
  const dispatch = useDispatch();

const [general, setgeneral] = useState(false);


  useEffect(() => {
    // dispatch(getsocial());
    axios.get(API + "/getNftPromoteRefresh").then((res) => {
      console.log("getNftPromoteRefresh.data", res.data);

      console.log(res.data[0].files);
      // const getNftPromoteImages = getNftPromote ?  getNftPromote[0].files : getNftPromote;
      setgeneral(res.data[0].files);
    });
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={matches ? 5 : matches1 ? 4 : 3}
        spaceBetween={matches ? 15 : 10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          reverseDirection: number % 2 == 0 ? false : true,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        style={{
          marginLeft: matches ? "1%" : matches1 ? "3.7%" : "-0.5%",
          // paddingRight: '5%'
        }}
      >
        {general ? (
          <div style={{ display: "flex" }}>
            {general.map((item, index) => {
              return (
                <SwiperSlide>
                  {" "}
                 

                     <Grid px={1} pt={3} item md={2} xs={4}>
                <Box>
         
                   <img
                    // height={matches ? "180rem" : matches1 ? '140rem' : "90rem"}
                    // width={matches ? "180rem" : matches1 ? '140rem' : "90rem"}
                    src={API + "/" + item.filePath}
                    style={{ height: "150px", width: "150px" }}
                  />
                </Box>
              </Grid>
                </SwiperSlide>
              );
            })}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </Swiper>
    </>
  );
};
