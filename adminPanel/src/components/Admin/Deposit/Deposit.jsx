import { Button, Container, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Basictabs from './Basictabs';

const Deposit = () => {
  const check= useMediaQuery("(max-Width:900px)")


  return (
    <Box sx={{
      background:"#f5f6fa"
    }}>
    <Container>
    <Box sx={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:check?"start":"center",
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
    Deposits
        </Typography>
    <Typography sx={{
        fontSize:"14px",
        fontWeight:400,
        color: "#526484",
    }}>
    Total 1116 transactions.
    </Typography>
    </Box>
    <Button sx={{
      background:"#006adc",
      "&:hover":{
        background:"#006adca1",
        
      },
      color:"white",
    }}><AddIcon /> Add <KeyboardArrowDownIcon /></Button>
    </Box>
    <Basictabs />
    </Container>
    </Box>
  )
}

export default Deposit
