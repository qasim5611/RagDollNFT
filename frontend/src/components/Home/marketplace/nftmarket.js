import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import { Bounce } from "react-reveal";
import SwiperFile from "./swiper"


export default () => {

  const loop1 = [1,2,3,4,5]
  const loop2 = [6, 7, 8, 9, 10]
  return (
    <Box
      py={5}
      sx={{
        background:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,197,134,1) 3%, rgba(255,203,146,1) 59%, rgba(255,250,246,1) 100%, rgba(255,255,255,1) 100%)"
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              color: "#894500",
              fontSize: { md: "36px", xs: "27px" },
              fontWeight: "bold",
              fontFamily: "MilkyNice"
            }}
          >
            NFT Marketplace
          </Box>
          <Box display="flex" justifyContent="center">
            <Divider
              style={{
                width: "120px",
                height: "3px",
                backgroundColor: "#894500"
              }}
            />
          </Box>
        </Box>

        <Bounce left>
          <Box
            mt={5}
            sx={{
              borderRadius: "5px",
              border: "2px solid white",
              position: "relative"
            }}
          >
            <Box
              sx={{
                // fontWeight: "bolder",
                color: "#894500",
                textAlign: "center",
                border: "2px solid white",
                width: "200px",
                margin: "auto",
                borderRadius: "5px",
                background:
                  "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                position: "absolute",
                left: "0rem",
                right: "0rem",
                top: "-1rem",
                fontFamily: "Helvetice-Bold"
              }}
            >
              Promoted
            </Box>

            <Grid container  justifyContent="space-evenly">
              <SwiperFile data={loop1} number={1} />
            </Grid>
          </Box>
        </Bounce>

        <Bounce right>
          <Box
            mt={5}
            sx={{
              borderRadius: "5px",
              border: "2px solid white",
              position: "relative"
            }}
          >
            <Box
              sx={{
                // fontWeight: "bolder",
                color: "#894500",
                textAlign: "center",
                border: "2px solid white",
                width: "200px",
                margin: "auto",
                borderRadius: "5px",
                background:
                  "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                position: "absolute",
                left: "0rem",
                right: "0rem",
                top: "-1rem",
                fontFamily: 'Helvetice-Bold',
              }}
            >
              Popular
            </Box>

            <Grid container  justifyContent="space-evenly">
              <SwiperFile data={loop2} number={2}/>
            </Grid>
          </Box>
        </Bounce>
        <Bounce left>
          <Box
            mt={5}
            sx={{
              borderRadius: "5px",
              border: "2px solid white",
              position: "relative"
            }}
          >
            <Box
              sx={{
                // fontWeight: "bolder",
                color: "#894500",
                textAlign: "center",
                border: "2px solid white",
                width: "200px",
                margin: "auto",
                borderRadius: "5px",
                background:
                  "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                position: "absolute",
                left: "0rem",
                right: "0rem",
                top: "-1rem",
                fontFamily: "Helvetice-Bold"

              }}
            >
              Recent Upload
            </Box>

            <Grid container  justifyContent="space-evenly">
              <SwiperFile data={loop1} number={3}/>
            </Grid>
          </Box>
        </Bounce>
      </Container>
    </Box>
  );
};
