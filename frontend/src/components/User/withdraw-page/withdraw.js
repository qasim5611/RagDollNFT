import Box from '@mui/material/Box';
import { Button, Container, Grid, useMediaQuery, Stack } from "@mui/material";
import { BiWalletAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom';

export default () => {
    const matches = useMediaQuery("(min-width:950px)");

    return <Box pt={10} sx={{
        background: '#F5F6FA',
        position: 'relative',
        height: '100vh'
    }}>
        <Container maxWidth='md'>
            <Box sx={{
                textAlign: 'center'
            }}>
                <BiWalletAlt style={{
                    background: '#33B5E5',
                    color: 'white',
                    fontSize: '6rem',
                    padding: '15px',
                    borderRadius: '45px'
                }} />
                <Box mx={'auto'} pt={3} sx={{
                    lineHeight: matches ? '35px' : '25px',
                    width: '50%'
                }} >
                    <Box
                        sx={{
                            color: '#364A63',
                            fontSize: { md: '23px', xs: '18px' },
                            fontWeight: '700',
                        }}>
                        You're almost ready to withdraw!
                    </Box>
                    <Box sx={{
                        color: '#526484',
                        fontSize: { md: '18px', xs: '16px' }
                    }}
                    >
                        To make a withdraw, please add a withdraw account from your profile (withdraw accounts).
                    </Box>
                </Box>

                <Box pt={5}>
                    <Button variant="contained" sx={{
                        background: '#037DFF',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        "&:hover": { backgroundColor: "#037DFFa1" },
                    }}>
                        Add Withdraw Account
                    </Button>
                </Box>
                <Link style={{ textDecoration: 'none', color: '#037DFF' }} to='/dashboard'>
                    <Box pt={5} sx={{
                        color: '#037DFF',
                        fontSize: '16px',
                    }}>
                        Go to Dashboard
                    </Box>
                </Link>
                <Box pt={4} sx={{
                    color: '#526484',
                    fontSize: { md: '16px', xs: '13px' }
                }}>
                    Please feel free to contact us if you have any question.
                </Box>
            </Box>


        </Container>
    </Box>
}