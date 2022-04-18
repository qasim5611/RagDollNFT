import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import PersonIcon from '@mui/icons-material/Person';
import WarningIcon from '@mui/icons-material/Warning';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom'
export default () => {
    const matches = useMediaQuery("(min-width:950px)");

    return <Box >
        <Container>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Box sx={{
                    lineHeight: matches ? '40px' : '30px'
                }} >
                    <Box sx={{
                        color: '#8094AE',
                        fontSize: { md: '18px', xs: '15px' }
                    }}>
                        Welcome!
                    </Box>
                    <Box
                        sx={{
                            color: '#364A63',
                            fontSize: { md: '30px', xs: '20px' }
                        }}>
                        Only
                    </Box>
                    <Box sx={{
                        color: '#526484',
                        fontSize: { md: '16px', xs: '14px' }
                    }}
                    >
                        Here's a summary of your account. Have fun!
                    </Box>
                </Box>
                <Box sx={{
                    display: { md: 'flex', xs: 'none' },
                    alignItems: 'center'
                }}>
                    <Link to='/userDashboard/invest' style={{ textDecoration: 'none', color: "white" }} >
                        <Button variant="contained" sx={{
                            background: '#364A63',
                            fontWeight: 'bold',
                            fontSize: '12px',
                            "&:hover": { backgroundColor: "#364A63a1" },
                        }}>
                            Invest & Earn
                            <ArrowForwardIcon style={{ paddingLeft: '5px' }} />
                        </Button>
                    </Link>
                    <Link to='/userDashboard/deposit' style={{ textDecoration: 'none', color: "white" }} >

                        <Button variant="contained" sx={{
                            background: '#037DFF',
                            marginLeft: '10px',
                            fontWeight: 'bold',
                            fontSize: '12px',
                            "&:hover": { backgroundColor: "#037DFFa1" },

                        }}>
                            Deposit
                            <ArrowForwardIcon style={{ paddingLeft: '5px' }} />
                        </Button>
                    </Link>

                </Box>
            </Box>

            <Box mt={3} >
                <Box sx={{
                    color: '#526484',
                    background: 'white',
                    border: '1px solid #F7C1BD',
                    display: 'flex',
                    borderRadius: '5px'
                }}>
                    <ReportIcon style={{ color: 'red', paddingTop: '16px', fontSize: '2.5rem' }} />
                    <Box py={2} >
                        <Box component='span' fontWeight='400,bold'>Caution:</Box>
                        All the transactions are NOT real as you have logged into demo application to see the platform.
                    </Box>
                </Box>

                <Box mt={4} sx={{
                    color: '#526484',
                    background: 'white',
                    border: '1px solid #FBE7A8',
                    display: 'flex',
                    borderRadius: '5px'
                }}>
                    <WarningIcon style={{
                        color: '#F4BD0E', paddingTop: '16px',
                        fontSize: '2.5rem'
                    }} />
                    <Box py={2}
                        display='flex'
                        flexDirection={{ md: 'row', xs: 'column' }}
                        justifyContent='space-between'
                        flexGrow='1'
                    >
                        <Box >
                            Add an account that you'd like to receive payment or withdraw fund.
                        </Box>
                        <Box pr={1.5} pt={{ md: 0, xs: 1 }}>
                            <Link to='/userDashboard/profile/accounts' style={{ textDecoration: 'none', color: "white" }} >

                                <Button variant="contained" sx={{
                                    background: '#F4BD0E',
                                    fontWeight: 'bold',
                                    fontSize: '10px',
                                    "&:hover": { backgroundColor: "#F4BD0Ea1" },

                                }}>
                                    Add Account
                                </Button>
                            </Link>

                        </Box>
                    </Box>
                </Box>
                <Box mt={2} sx={{
                    color: '#526484',
                    background: 'white',
                    border: '1px solid #A4D0FF',
                    display: 'flex',
                    borderRadius: '5px'
                }}>
                    <PersonIcon style={{
                        color: '#037DFF', paddingTop: '16px',
                        fontSize: '2.5rem', borderRadius: '3px'
                    }} />
                    <Box py={2}
                        display='flex'
                        flexDirection={{ md: 'row', xs: 'column' }}
                        justifyContent='space-between'
                        flexGrow='1'
                    >
                        <Box >
                            To be compliant and to protect your account, please verify your identity by submitting document.
                        </Box>
                        <Box pr={1.5} pt={{ md: 0, xs: 1 }}>
                            <Button variant="contained" sx={{
                                background: '#037DFF',
                                fontWeight: 'bold',
                                fontSize: '10px',
                            "&:hover": { backgroundColor: "#037DFFa1" },
                            }}>
                                Start Verification
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    </Box>
}