import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import { Button, Container, Grid, useMediaQuery, } from "@mui/material";


export default () => {
    const matches = useMediaQuery("(min-width:950px)");

    return <Box>
        <Container>
            <Box  py={matches ? 2 : 1.2} px={matches ? 2 : 0} sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: { md: 'row', xs: "column" }
            }}>
                <Box sx={{
                    color: '#364a63',
                    fontSize: '12px'
                }}>
                    Investorm © 2022. All Rights Reserved.
                </Box>
                <Stack spacing={matches ? 2 : 1} direction='row' sx={{
                    display: 'flex',
                    color: '#559BDA',
                    fontSize: { md: '14px', xs: '12px' }
                }}>
                    <Box>FAQs</Box>
                    <Box pl={0.5}>Terms and Conditions</Box>
                    <Box pl={0.5}>Privacy Policy</Box>
                    <Box pl={0.5}>English </Box>
                </Stack>
            </Box>
        </Container>
    </Box>
}