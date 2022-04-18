import { Container, Grid, Slider, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const Investedscheme = () => {
  return (
    
        <Box ml={4} mt={10} sx={{
            border:"1px solid #8094ae",
            p:"30px"
        }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb:"30px"
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#364A63",
                  fontSize: "18px"
                }}
              >
                Top Invested Scheme
              </Typography>
              <Typography
                sx={{
                  color: "#8094AE",
                  fontSize:"14px"
                }}
              >
                In last 30 days top invested plans.
              </Typography>
            </Box>
            <MoreHorizIcon
              sx={{
                color: "#364A63",
              }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, mb:"20px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "#8094AE",
                  fontSize: "12px",
                }}
              >
              Mercury
              </Typography>
              <Typography
                sx={{
                  color: "#8094AE",
                  fontSize:"12px" 
                }}
              >
                38
              </Typography>
            </Box>
            <BorderLinearProgress variant="determinate" value={38} />
          </Box>
          <Box sx={{ flexGrow: 1,mb:"20px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "#8094AE",
                  fontSize: "12px",
                }}
              >
              Silver Plan
              </Typography>
              <Typography
                sx={{
                  color: "#8094AE",
                  fontSize:"12px" 
                }}
              >
                22
              </Typography>
            </Box>
            <BorderLinearProgress variant="determinate" value={22} />
          </Box>
          <Box sx={{ flexGrow: 1,mb:"20px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "#8094AE",
                  fontSize: "12px",
                }}
              >
              Standard Plan
              </Typography>
              <Typography
                sx={{
                  color: "#8094AE",
                  fontSize:"12px" 
                }}
              >
                6
              </Typography>
            </Box>
            <BorderLinearProgress variant="determinate" value={6} />
          </Box>
          <Box sx={{ flexGrow: 1,mb:"20px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "#8094AE",
                  fontSize: "12px",
                }}
              >
              Venus
              </Typography>
              <Typography
                sx={{
                  color: "#8094AE",
                  fontSize:"12px" 
                }}
              >
                4
              </Typography>
            </Box>
            <BorderLinearProgress variant="determinate" value={4} />
          </Box>
          <Box sx={{ flexGrow: 1,mb:"20px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "#8094AE",
                  fontSize: "12px",
                }}
              >
              Platinum Plan
              </Typography>
              <Typography
                sx={{
                  color: "#8094AE",
                  fontSize:"12px" 
                }}
              >
                3
              </Typography>
            </Box>
            <BorderLinearProgress variant="determinate" value={3} />
          </Box>
          
        </Box>
      
  );
};

export default Investedscheme;
