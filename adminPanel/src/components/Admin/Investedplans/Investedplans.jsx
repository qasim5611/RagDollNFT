import { Button, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CropRotateIcon from '@mui/icons-material/CropRotate';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { useMediaQuery } from '@mui/material';
import Investtab from './Investtab';


const Investedplans = () => {
const check= useMediaQuery("(max-Width:900px)")

  return (
    <Box sx={{
      background:"#f5f6fa"
    }}>
    <Container>
    <Box sx={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:check?"column":""
    }}>
    <Box sx={{
      my:"30px"
    }}>
    <Typography sx={{
        fontSize:"24px",
        fontWeight:500,
        color: "#364a63",
    }}>
    Invested Plans
        </Typography>
    <Typography sx={{
        fontSize:"14px",
        fontWeight:400,
        color: "#526484",
    }}>
    Total 160 entries.
        </Typography>
    </Box>
    <Box>
    <Button sx={{
      background:"white",
      border:"1px solid black",
      mr:"20px",
      mt:"10px",
      color:"black",
    }}><ViewInArIcon sx={{mr:"10px"}}/> Manage Scheme 
    </Button>
    <Button sx={{
      background:"#006adc",
      "&:hover":{
        background:"#006adca1",
        
      },
      mt:"10px",
      color:"white",
    }}><CropRotateIcon sx={{mr:"10px"}}/> Process 
    </Button>
    </Box>
    
    </Box>
    <Investtab />
    </Container>
    </Box>
  )
}

export default Investedplans
