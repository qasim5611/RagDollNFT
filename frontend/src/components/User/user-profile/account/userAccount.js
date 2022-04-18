import Box from '@mui/material/Box';
import { Button, Container, Grid, useMediaQuery, Stack } from "@mui/material";
import Profile_upper from '../profile_upper';
import {Link} from 'react-router-dom';
export default () => {
    const matches = useMediaQuery("(min-width:650px)");

    return <Box sx={{
        background: '#F5F6FA',
        position: 'relative',
        height: '100vh'
    }}>
        <Profile_upper head={'Payment Accounts'} />

        <Container>

            <Box mt={6} p={2} sx={{

                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: matches ? 'row' : 'column',
                background: '#FEF7E2',
                border: '2px solid #FBE7A8',
                borderRadius: '5px'
            }}>

                <Box  >
                    <Box sx={{
                        fontWeight: '600',
                        color: '#CD9F0C',
                        fontSize: { md: '14px', xs: "12px" },
                    }}>
                        You have not added any withdraw account yet in your account.
                    </Box>
                    <Box sx={{
                        color: '#CD9F0C',
                        fontSize: { md: '14px', xs: "12px" },
                    }}>
                        Please add the personal or company accounts that you'd like to withdraw funds.
                    </Box>
                </Box>
                <Box pt={{ md: 0, xs: 1 }}>
                <Link to='/profile/accounts' style={{textDecoration:'none' , color :"white"}} >

                    <Button variant="contained" sx={{
                        background: '#F4BD0E',
                        fontWeight: 'bold',
                        fontSize: { md: '14px', xs: "11px" },
                        "&:hover": { backgroundColor: "#F4BD0Ea1" },
                    }}>
                        Add Account
                    </Button>
                    </Link>

                </Box>
            </Box>

           
        </Container>
    </Box>
}