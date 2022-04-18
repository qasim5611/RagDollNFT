import React, { useRef, useState } from "react";
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Autoplay, Navigation } from "swiper";
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
// import { Navigation,  } from "swiper";
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from "@mui/material/Grid";

export default ({ data , number }) => {
    const matches = useMediaQuery('(min-width:950px)');

    return <>
        <Swiper
            slidesPerView={matches ? 5 : 3}
            spaceBetween={10}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
                reverseDirection: number%2==0 ? false : true,

            }}

            modules={[Navigation, Autoplay]}
            className="mySwiper"
        >
            {data.map((num, i) => {
                return <SwiperSlide key={i}>
                    <Grid px={1} pt={3}  item md={2} xs={4}>
                        <Box >
                            <img src={`/images/image${num}.png`}
                                height={matches ? '170rem' : '100rem'}
                                width={matches ? '170rem' : '100rem'}
                            />
                        </Box>
                    </Grid>
                </SwiperSlide>
            })}


        </Swiper>
    </>
}