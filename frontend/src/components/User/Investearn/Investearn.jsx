import { Avatar, Container, Typography,Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Investearn = () => {
  return (
    <Box
      sx={{
        background: "#f5f6fa",
        
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              m: "4%",
              p: "4%",
            }}
          >
            <Typography
              sx={{
                color: "#1f2b3a",
                fontSize: "26px",
                fontWeight: "bold",
                textAlign: "center",
                mb:"10px"
              }}
            >
              Invest & Earn
            </Typography>
            <Typography
              sx={{
                color: "#8094ae",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              We have various investment plans for you.
            </Typography>
            <Typography
              sx={{
                color: "#8094ae",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              You can invest daily, weekly or monthly and start earning now.
            </Typography>
            <Box>
              <Typography
                sx={{
                  color: "#1f2b3a",
                  fontSize: "14px",
                  mt:"4%",
                  mb:"10px",
                  fontWeight:600,
                }}
              >
                Invested Plan
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  p: "10px",
                  border: "1px solid #BFC9D6",
                  background:"white",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Brightness7Icon sx={{ color: "#8094ae", mr:"5px" }} />
                  <Box>
                    <Typography
                      sx={{
                        color: "#364a63",
                        fontSize: "14px",
                      }}
                    >
                      Mercury (Fixed Invest)
                    </Typography>
                    <Typography
                      sx={{
                        color: "#8094ae",
                        fontSize: "12px",
                      }}
                    >
                      Invest for 1 day &amp; earn hourly 0.45% as profit.s
                    </Typography>
                  </Box>
                </Box>
                <ArrowDropDownIcon sx={{color:"#8094ae"}} />
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#1f2b3a",
                  fontSize: "14px",
                  mt:"4%",
                  mb:"10px",
                  fontWeight:600,
                }}
              >
              Fixed Investment Amount
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  p: "20px",
                  border: "1px solid #BFC9D6",
                  background:"white",
                }}
              > 
             <Typography
                      sx={{
                        color: "#364a63",
                        fontSize: "14px",
                        fontWeight:"bold"
                      }}
                    >
                      100
                    </Typography>
                    <Typography
                      sx={{
                        color: "#8094ae",
                        fontSize: "12px",
                        borderLeft:"1px solid #8094ae",
                        pl:"10px"
                      }}
                    >
                      USD
                    </Typography>
              </Box>
            </Box>
            <Typography sx={{
                color: "#8094ae",
                        fontSize: "12px",
                        fontStyle:"italic",
                        mt:"3px"
            }}>
            Note: The investment amount is a fixed amount for the selected plan.

            </Typography>
            <Box>
              <Typography
                sx={{
                  color: "#1f2b3a",
                  fontSize: "14px",
                  mt:"4%",
                  mb:"10px",
                  fontWeight:600,
                }}
              >
              Payment Account
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: "10px",
                  width: "100%",
                  background:"white",
                  border: "1px solid #BFC9D6",
                }}
              >
                
                  <AccountBalanceWalletIcon sx={{ color: "#8094ae", mr:"5px" }} />
                  <Box>
                    <Typography
                      sx={{
                        color: "#364a63",
                        fontSize: "14px",
                      }}
                    >
                    Main Balance                    
                    </Typography>
                    <Typography
                      sx={{
                        color: "#8094ae",
                        fontSize: "12px",
                      }}
                    >
                    Current Balance: 500.00 USD ( 0.155 ETH )
                    </Typography>
                  </Box>
                
              </Box>
            </Box>
            <Button
            sx={{
              background: "#037dff",
              borderRadius: "5px",
              color: "white",
              fontSize:"16px",
              mt:"5%",
              "&:hover": {
                background: "#037dffa1",
              },
              textTransform:"capitalize"
            }}
          >
          Continue to Invest
          </Button>
            <Typography sx={{
                color: "#8094ae",
                        fontSize: "12px",
                        fontStyle:"italic",
                        mt:"5%",
                        textAlign:"center"
            }}>
            By continue this, you agree to our investment terms and conditions.

            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Investearn;
