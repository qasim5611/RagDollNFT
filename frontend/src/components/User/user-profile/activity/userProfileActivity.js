import Box from '@mui/material/Box';
import { Button, Container, Grid, useMediaQuery, Stack } from "@mui/material";
import Profile_upper from '../profile_upper';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

export default () => {
    const matches = useMediaQuery("(min-width:950px)");

    return <Box>
        <Profile_upper head={'Login Activity'} />
        <Container>
            <Box pt={5} sx={{
                lineHeight: matches ? '35px' : '25px',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: { md: 'row', sm: 'column', xs: 'column' }
            }} >
                <Box>
                    <Box
                        sx={{
                            color: '#364A63',
                            fontSize: { md: '20px', xs: '16px' },
                            fontWeight: '700',
                        }}>
                        Activity on your account
                    </Box>
                    <Box sx={{
                        color: '#526484',
                        fontSize: { md: '16px', xs: '14px' }
                    }}
                    >
                        <Box component='span'>Here is your last 20 login activities log.</Box>
                        <Box component='span'>
                            <InfoIcon style={{ color: '#526484', fontSize: '1.5rem', paddingTop: '10px', }} />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{
                    color: 'red',
                    cursor: 'pointer',
                    fontSize: '14px'
                }}>
                    Clear log
                </Box>
            </Box>


            <Box mt={5} sx={{
                border: 1,
                borderColor: 'divider',
                background: 'white'
            }}>
                <Box p={{ md: 2, xs: 2 }}
                    sx={{
                        background: '#F5F6FA',
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: 1,
                        borderColor: 'divider',
                        color: '#364A63',
                        fontSize: { md: '14px', xs: '12px' }
                    }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: matches ? 'row' : 'column',
                        width: matches ? '50%' : 'none'
                    }}>
                        <Box>Browser</Box>
                        <Box sx={{
                            justifyContent: 'flex-start',
                            color: '#364A63',
                            width: matches ? '20%' : 'none'
                        }}>
                            IP
                        </Box>
                    </Box>
                    <Box sx={{
                        color: '#364A63',
                    }}>
                        Time
                    </Box>
                    <Box color='white'>
                        
                    </Box>
                </Box>

                {
                    [1, 2, 3, 4, 5, 6, 7].map((num, i) => {
                        return <Box key={i} p={{ md: 2, xs: 2 }}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                borderBottom: 1,
                                borderColor: 'divider',
                                color: '#364A63',
                                fontSize: { md: '14px', xs: '12px' }
                            }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: matches ? 'row' : 'column',
                                width: matches ? '50%' : 'none'
                            }}>
                                <Box>Chrome on Windows</Box>
                                <Box sx={{
                                    justifyContent: 'flex-start',
                                    color: '#364A63',
                                    width: matches ? '20%' : 'none'
                                }}>
                                    101.50.73.202
                                </Box>
                            </Box>
                            <Box sx={{
                                color: '#364A63',
                            }}>
                                Apr 07, 2022 02:37 PM
                            </Box>
                            <Box color='white'>
                                <CloseIcon style={{ fontSize: '1rem', color: '#364A63', }} />
                            </Box>
                        </Box>
                    })
                }
            </Box>

          
        </Container>
    </Box>
}