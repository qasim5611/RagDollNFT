import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LinkIcon from '@mui/icons-material/Link';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Stack from '@mui/material/Stack';
import {BsFillArrowDownLeftCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom';

export default () => {
    const matches = useMediaQuery("(min-width:950px)");
    let [copied, setCopied] = React.useState(false)

    return <Box mt={5} pb={5}>
        <Container>
            <Box sx={{
                display: 'flex ', justifyContent: 'space-between'
            }}>
                <Box sx={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    lineHeight: '1.1',
                    color: '#364a63'
                }}>
                    Recent Activity
                </Box>
                <Box sx={{
                    color: '#559BDA',
                    fontWeight: '300'
                }}>
                    <Link to='/userDashboard/transactions' style={{textDecoration:'none' , color :"#559BDA"}} >

                    See History
                    </Link>

                </Box>
            </Box>

            <Box mt={1} p={matches ? 3 : 1} sx={{
                background: 'white',
                borderRadius: '5px',
                border: '1px solid #8094ae',
                display: 'flex',
                alignItems: 'center'

            }}>
                <Box sx={{
                    // background: '#E2FBF4',
                    // borderRadius: '20px',
                    height: 'fit-content'
                }}>
                    <ArrowForwardIcon style={{
                        color: '#1EE0AC',
                        fontSize: matches ? '2rem' : '1.5rem'
                    }} />
                </Box>

                <Box pl={matches ? 3 : 1} flexGrow='1' >
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Box sx={{ color: '#364A63', fontWeight: '500', fontSize: { md: '16px', xs: '13px' } }} >Signup Bonus</Box>
                        <Box sx={{ color: '#526484', fontSize: { md: '16px', xs: '13px' } }}>
                            <Box component='span' color='#1ee0ac'>+ 500.00</Box> USD
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Box sx={{ color: '#9096B6', fontSize: { md: '12px', xs: '10px' } }}>
                            March 14,2022.  &nbsp; Completed</Box>
                        <Box sx={{ color: '#526484', fontSize: { md: '12px', xs: '10px' } }}> 500 USD</Box>
                    </Box>
                </Box>

                <Box pt={1} pl={2}>
                    <ArrowForwardIosIcon style={{ color: '#1EE0AC', fontSize: '1rem' }} />
                </Box>
            </Box>

            <Box mt={5} p={2} sx={{
                background: 'white',
                borderRadius: '5px',
                border: '1px solid #8094ae',
            }}>

                <Box sx={{
                    fontSize: { md: '1.25rem', xs: '1.1rem' },
                    fontWeight: '700',
                    lineHeight: '2',
                    color: '#364a63'
                }}>
                    Refer Us & Earn
                </Box>

                <Box sx={{
                    color: '#364a63',
                    fontSize: '12px'
                }}>
                    Use the below link to invite your friends.
                </Box>

                <Box mt={1} mb={3} pt={1} pl={matches ? 1 : 0} sx={{
                    display: 'flex',
                    color: '#364a63',
                    border: '1px solid #8094ae',
                    borderRadius: '5px',
                }}>
                    <LinkIcon style={{ fontSize: matches ? '1.5rem' : '1.1rem' }} />
                    <Box pl={matches ? 1 : 0} sx={{
                        flexGrow: '1',
                        fontSize: { md: '16px', xs: '11px' }
                    }}>
                        https://investorm.xyz/invite?ref=9798582a
                    </Box>
                    <CopyToClipboard
                        style={{
                            color: '#364a63',
                        }}
                        text={`https://investorm.xyz/invite?ref=9798582a`}
                        onCopy={() => setCopied(true)}>
                        <Button sx={{
                            fontSize: { md: '16px', xs: '11px' }
                        }}>
                            <ContentCopyIcon style={{ fontSize: matches ? '1.5rem' : '1rem' }} /> Copy
                        </Button>
                    </CopyToClipboard>

                </Box>
                {copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
            </Box>

        </Container >
    </Box >
}

