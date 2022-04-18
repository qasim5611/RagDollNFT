import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
export default () => {
    return <Box >
        <Container>
            <Grid mt={3} container spacing={3} >
                <Grid item xs={12} md={4} >
                    <Box px={1} pt={1} sx={{
                        color: '#364a63',
                        background: 'white',
                        border: '1px solid #8094ae',
                        borderRadius: '5px',
                        borderBottom: '10px solid #037DFF',
                    }}>
                        <Box display='flex' justifyContent='space-between'>
                            <Box sx={{
                                fontWeight: '400',
                                fontSize: '1.125rem'
                            }}>Available Balance</Box>
                            <ErrorOutlineIcon style={{ color: '#364a63' }} />
                        </Box>

                        <Box pt={2} sx={{
                            fontWeight: '500',
                            fontSize: '1.5rem'
                        }}>
                            500 <Box component='span' color='#526484'>USD</Box>
                        </Box>


                        <Box pt={3} sx={{
                            fontSize: '11px',
                            color: '#8094ae',
                            textTransform: 'uppercase',
                            marginBottom: '0.125rem',
                            letterSpacing: '0.1em',
                        }}>INVESTMENT ACCOUNT</Box>
                        <ErrorOutlineIcon style={{ color: '#8094ae', fontSize: '1rem' }} />

                        <Box pb={1} pt={1.5} sx={{
                            lineHeight: '1.2',
                            fontSize: '0.93rem',
                        }}>
                            0 <Box component='span' color='#364a63'>USD</Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} md={4} >
                    <Box px={1} pt={1} sx={{
                        color: '#364a63',
                        background: 'white',
                        border: '1px solid #8094ae',
                        borderRadius: '5px',
                        borderBottom: '10px solid #364A63',
                    }}>
                        <Box display='flex' justifyContent='space-between'>
                            <Box sx={{
                                fontWeight: '400',
                                fontSize: '1.125rem'
                            }}>Total Deposit</Box>
                            <ErrorOutlineIcon style={{ color: '#364a63' }} />
                        </Box>

                        <Box pt={2} sx={{
                            fontWeight: '500',
                            fontSize: '1.5rem'
                        }}>
                            0 <Box component='span' color='#526484'>USD</Box>
                        </Box>


                        <Box pt={3} sx={{
                            fontSize: '11px',
                            color: '#8094ae',
                            textTransform: 'uppercase',
                            marginBottom: '0.125rem',
                            letterSpacing: '0.1em',
                        }}>THIS MONTH</Box>
                        <ErrorOutlineIcon style={{ color: '#8094ae', fontSize: '1rem' }} />

                        <Box pb={1} sx={{
                            lineHeight: '1.2',
                            fontSize: '0.93rem'
                        }}>
                            0 <Box component='span' color='#364a63'>USD</Box>
                            <Box pl={1} component='span' sx={{
                                color: 'red'
                            }}><ArrowDownwardIcon style={{ paddingTop: '5px' }} /> 100%</Box>
                        </Box>
                    </Box>
                </Grid>


                <Grid item xs={12} md={4} >
                    <Box px={1} pt={1} sx={{
                        color: '#364a63',
                        background: 'white',
                        border: '1px solid #8094ae',
                        borderRadius: '5px',
                        borderBottom: '10px solid #F4BD0E',
                    }}>
                        <Box display='flex' justifyContent='space-between'>
                            <Box sx={{
                                fontWeight: '400',
                                fontSize: '1.125rem'
                            }}>Total Withdraw</Box>
                            <ErrorOutlineIcon style={{ color: '#364a63' }} />
                        </Box>

                        <Box pt={2} sx={{
                            fontWeight: '500',
                            fontSize: '1.5rem'
                        }}>
                            0 <Box component='span' color='#526484'>USD</Box>
                        </Box>


                        <Box pt={3} sx={{
                            fontSize: '11px',
                            color: '#8094ae',
                            textTransform: 'uppercase',
                            marginBottom: '0.125rem',
                            letterSpacing: '0.1em',
                        }}>THIS MONTH</Box>
                        <ErrorOutlineIcon style={{ color: '#8094ae', fontSize: '1rem' }} />

                        <Box pb={1} sx={{
                            lineHeight: '1.2',
                            fontSize: '0.93rem'
                        }}>
                            0 <Box component='span' color='#364a63'>USD</Box>
                            <Box pl={1} component='span' sx={{
                                color: 'red'
                            }}><ArrowDownwardIcon style={{ paddingTop: '5px' }} /> 100%</Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box >
}