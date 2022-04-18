import Box from '@mui/material/Box';
import { Button, Container, Grid, useMediaQuery, Stack } from "@mui/material";
import Profile_upper from '../profile_upper';
import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import { useSwitch } from '@mui/base/SwitchUnstyled';

const blue = {
    500: '#007FFF',
};

const grey = {
    400: '#BFC7CF',
    500: '#AAB4BE',
    600: '#6F7E8C',
};

const BasicSwitchRoot = styled('span')(
    ({ theme }) => `
    font-size: 0;
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
    margin: ${{ md: '10px', xs: '1px' }};
    background: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
    border-radius: 15px;
    cursor: pointer;
  
    &.Switch-disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  
    &.Switch-checked {
      background: ${blue[500]};
    }
    `,
);

const BasicSwitchInput = styled('input')`
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  `;

const BasicSwitchThumb = styled('span')`
    display: block;
    width: 19px;
    height: 19px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  
    &.Switch-focusVisible {
      background-color: ${grey[500]};
      box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
    }
  
    &.Switch-checked {
      left: 26px;
      top: 3px;
      background-color: #fff;
    }
  `;

function BasicSwitch(props) {
    const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

    const stateClasses = {
        'Switch-checked': checked,
        'Switch-disabled': disabled,
        'Switch-focusVisible': focusVisible,
    };

    return (
        <BasicSwitchRoot className={clsx(stateClasses)}>
            <BasicSwitchThumb className={clsx(stateClasses)} />
            <BasicSwitchInput {...getInputProps()} aria-label="Demo switch" />
        </BasicSwitchRoot>
    );
}


export default () => {
    const matches = useMediaQuery("(min-width:950px)");
    const matches1 = useMediaQuery("(min-width:480px)");
    const matches2 = useMediaQuery("(min-width:550px)");
    const matches3 = useMediaQuery("(min-width:630px)");

    return <Box>
        <Profile_upper head={'Security Settings'} />

        <Container>
            <Box pt={5} sx={{
                lineHeight: matches ? '35px' : '25px'
            }} >
                <Box
                    sx={{
                        color: '#364A63',
                        fontSize: { md: '20px', xs: '16px' },
                        fontWeight: '700',
                    }}>
                    Settings
                </Box>
                <Box sx={{
                    color: '#526484',
                    fontSize: { md: '16px', xs: '14px' }
                }}
                >
                    These settings are helps you keep your account secure.

                </Box>
            </Box>

            <Box mt={4} sx={{
                border: 1,
                borderColor: 'divider',
                background: 'white',
                borderRadius: '5px'
            }}>
                <Box p={2} sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: matches1 ? 'row' : 'column'
                }}>
                    <Box>
                        <Box>
                            <Box sx={{
                                fontWeight: '600',
                                color: '#364A63',
                                fontSize: { md: '16px', xs: "14px" },
                            }}>
                                Save my Activity Logs
                            </Box>
                            <Box sx={{
                                color: '#526484',
                                fontSize: { md: '16px', xs: "14px" },
                            }}>
                                Save your all activity logs including unusual activity detected.
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <BasicSwitch />
                    </Box>
                </Box>

                <Box p={2} sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: matches1 ? 'row' : 'column'
                }}>
                    <Box>
                        <Box>
                            <Box sx={{
                                fontWeight: '600',
                                color: '#364A63',
                                fontSize: { md: '16px', xs: "14px" },
                            }}>
                                Email me if encounter unusual activity
                            </Box>
                            <Box sx={{
                                color: '#526484',
                                fontSize: { md: '16px', xs: "14px" },
                            }}>
                                You will get email notification whenever encounter invalid login activity.
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <BasicSwitch />
                    </Box>
                </Box>

                <Box p={2} sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: matches2 ? 'row' : 'column'
                }}>
                    <Box>
                        <Box>
                            <Box sx={{
                                fontWeight: '600',
                                color: '#364A63',
                                fontSize: { md: '16px', xs: "14px" },
                            }}>
                                Change Email Address
                            </Box>
                            <Box sx={{
                                color: '#526484',
                                fontSize: { md: '16px', xs: "14px" },
                            }}>
                                Update your current email address to new email address.
                            </Box>
                        </Box>
                    </Box>
                    <Box pt={{ md: 0, xs: 1 }}>
                        <Button variant="contained" sx={{
                            background: '#037DFF',
                            fontWeight: 'bold',
                            fontSize: { md: '12px', xs: "10px" },
                            "&:hover": { backgroundColor: "#037DFFa1" },

                        }}>
                            Change Email
                        </Button>
                    </Box>
                </Box>

                <Box p={2} sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: matches3 ? 'row' : 'column'
                }}>
                    <Box>
                        <Box>
                            <Box sx={{
                                fontWeight: '600',
                                color: '#364A63',
                                fontSize: { md: '16px', xs: "14px" },
                            }}>
                                Change Password
                            </Box>
                            <Box sx={{
                                color: '#526484',
                                fontSize: { md: '16px', xs: "14px" },
                            }}>
                                Set a unique password to protect your account.
                            </Box>
                        </Box>
                    </Box>
                    <Box pt={{ md: 0, xs: 1 }} >
                        <Box component='span' pr={1} pt={2} sx={{
                            fontSize: { md: '12px', xs: "10px" },
                            color: '#526484'
                        }}>Last changed: N/A</Box>
                        <Button variant="contained" sx={{
                            background: '#037DFF',
                            fontWeight: 'bold',
                            fontSize: { md: '12px', xs: "10px" },
                            "&:hover": { backgroundColor: "#037DFFa1" },

                        }}>
                            Change Password
                        </Button>
                    </Box>
                </Box>

                <Box p={2} sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: {md: 'row' , sm :"column" , xs :"column"}
                }}>
                    <Box>
                        <Box>
                            <Box sx={{
                                fontWeight: '600',
                                color: '#364A63',
                                fontSize: { md: '16px', xs: "14px" },
                            }}>
                                <Box pr={1} component='span'>2FA Authentication</Box>
                                <Button  variant="contained" sx={{
                                    background: '#E85347',
                                    fontWeight: 'bold',
                                    fontSize: "10px" ,
                            "&:hover": { backgroundColor: "#E85347a1" },
                                }}>
                                    Disabled
                                </Button>
                            </Box>
                            <Box sx={{
                                color: '#526484',
                                fontSize: { md: '16px', xs: "14px" },
                            }}>
                                Secure your account with 2FA security. When it is activated you will need to enter not only your password, but also a special code using your mobile.
                            </Box>
                        </Box>
                    </Box>
                    <Box pt={{ md: 3, xs: 1 }}>
                        <Button variant="contained" sx={{
                            background: '#037DFF',
                            fontWeight: 'bold',
                            fontSize: { md: '12px', xs: "10px" },
                            "&:hover": { backgroundColor: "#037DFFa1" },
                        }}>
                            Enable
                        </Button>
                    </Box>
                </Box>
            </Box>


           


        </Container>
    </Box>
}