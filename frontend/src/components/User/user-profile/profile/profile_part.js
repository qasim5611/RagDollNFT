import Box from '@mui/material/Box';
import { Button, Container, Grid, useMediaQuery, Stack } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import Profile_upper from '../profile_upper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { makeStyles } from '@mui/styles';
import LockIcon from '@mui/icons-material/Lock';

const useStyles = makeStyles({
    profile: {
        color: '#526484',

        '&:hover': {
            color: 'black',
        }
    }
});


export default () => {
    const classes = useStyles();
    const matches = useMediaQuery("(min-width:950px)");

    let profile = [
        {
            name: 'Full Name', type: 'Only',
        },
        {
            name: 'Display Name', type: 'Only',
        },
        {
            name: 'Email', type: 'abc@gmail.com',
        },
        {
            name: 'Display Name', type: '1234567',
        },
        {
            name: 'Telegram', type: 'not added yet',
        },
        {
            name: 'Gender', type: 'not added yet',
        },
        {
            name: 'Date of Birth', type: 'Jan 25,1990',
        },
        {
            name: 'Country', type: 'Pakistan',
        },
        {
            name: 'Adress', type: 'not added yet',
        },
    ]

    return <Box sx={{

    }}>
        <Profile_upper head={'Profile Info'}  />
        <Container>
            <Box mt={4} sx={{
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

            <Box pt={3} sx={{
                lineHeight: matches ? '35px' : '25px'
            }} >
                <Box
                    sx={{
                        color: '#364A63',
                        fontSize: { md: '20px', xs: '16px' },
                        fontWeight: '700',
                    }}>
                    Personal Information
                </Box>
                <Box sx={{
                    color: '#526484',
                    fontSize: { md: '16px', xs: '14px' }
                }}
                >
                    Basic info, like your name and address, that you use on our platform.
                </Box>
            </Box>

            <Box mt={4} sx={{
                border: 1,
                borderColor: 'divider',
                background: 'white',
            }}>
                {
                    profile.map(({ name, type }, i) => {
                        return <Box key={i} p={{ md: 3, xs: 2 }} className={classes.profile}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                borderBottom: 1,
                                borderColor: 'divider',
                                fontSize :  {md: '16px' , xs: '13px'}
                            }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: { md: 'row', xs: 'column' },
                                width: '55%'
                            }}>
                                <Box>{name}</Box>
                                <Box sx={{
                                    justifyContent: 'flex-start',
                                    color: '#364A63',
                                    width: '25%'
                                }}>
                                    {type}
                                </Box>
                            </Box>
                            <Box>
                                {
                                    i == 2 ? (
                                        <LockIcon style={{ fontSize: '1rem' }} />)
                                        : (<ArrowForwardIosIcon style={{ fontSize: '1rem' }} />)
                                }
                            </Box>
                        </Box>
                    })
                }
            </Box>

           
        </Container>
    </Box>
}