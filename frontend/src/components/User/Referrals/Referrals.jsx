import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import {
  Avatar,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LinkIcon from "@mui/icons-material/Link";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PersonIcon from "@mui/icons-material/Person";
import WarningIcon from "@mui/icons-material/Warning";
import ReportIcon from "@mui/icons-material/Report";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {Link} from 'react-router-dom'
const Referrals = () => {
  const [copied, setCopied] = React.useState(false);

  const matches = useMediaQuery("(min-width:950px)");

  return (
    <Box sx={{
      background: "#F5F6FA",
      pb: "5%"
    }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              lineHeight: matches ? "40px" : "30px",
            }}
          >
            <Box
              sx={{
                color: "#8094AE",
                fontSize: { md: "18px", xs: "15px" },
              }}
            >
              Referrals
            </Box>
            <Box
              sx={{
                color: "#364A63",
                fontSize: { md: "30px", xs: "20px" },
              }}
            >
              Referral Activity
            </Box>
            <Box
              sx={{
                color: "#526484",
                fontSize: { md: "16px", xs: "14px" },
              }}
            >
              See who you've referred and statistic of your referrals.
            </Box>
          </Box>
        </Box>

        <Box mt={3}>
          <Box
            mt={4}
            sx={{
              color: "#526484",
              background: "white",
              border: "1px solid #FBE7A8",
              display: "flex",
              borderRadius: "5px",
            }}
          >
            <WarningIcon
              style={{
                color: "#F4BD0E",
                paddingTop: "16px",
                fontSize: "2.5rem",
              }}
            />
            <Box
              py={2}
              display="flex"
              flexDirection={{ md: "row", xs: "column" }}
              justifyContent="space-between"
              flexGrow="1"
            >
              <Box>
                Add an account that you'd like to receive payment or withdraw
                fund.
              </Box>
              <Box pr={1.5} pt={{ md: 0, xs: 1 }}>
                <Link to='/userDashboard/profile/accounts' style={{ textDecoration: 'none', color: "white" }} >

                  <Button
                    variant="contained"
                    sx={{
                      background: "#F4BD0E",
                      fontWeight: "bold",
                      fontSize: "10px",
                      "&:hover": { backgroundColor: "#F4BD0Ea1" },

                    }}
                  >
                    Add Account
                  </Button>
                </Link>

              </Box>
            </Box>
          </Box>
          <Box
            mt={2}
            sx={{
              color: "#526484",
              background: "white",
              border: "1px solid #A4D0FF",
              display: "flex",
              borderRadius: "5px",
            }}
          >
            <PersonIcon
              style={{
                color: "#037DFF",
                paddingTop: "16px",
                fontSize: "2.5rem",
                borderRadius: "3px",
              }}
            />
            <Box
              py={2}
              display="flex"
              flexDirection={{ md: "row", xs: "column" }}
              justifyContent="space-between"
              flexGrow="1"
            >
              <Box>
                To be compliant and to protect your account, please verify your
                identity by submitting document.
              </Box>
              <Box pr={1.5} pt={{ md: 0, xs: 1 }}>
                <Button
                  variant="contained"
                  sx={{
                    background: "#037DFF",
                    fontWeight: "bold",
                    fontSize: "10px",
                    "&:hover": { backgroundColor: "#037DFFa1" },
                  }}
                >
                  Start Verification
                </Button>
              </Box>
            </Box>
          </Box>



          {/* Referral table List */}



          <Box sx={{
            my: "5%"
          }}>
            <Typography sx={{
              color: "#364A63",
              fontSize: { md: "19px", xs: "14px" },
              mb: "2%"
            }}>
              Referral List
            </Typography>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead sx={{ background: "#F5F6FA" }}>
                  <TableRow>
                    <TableCell sx={{ color: "#526484", fontSize: "12px" }}>USERNAME</TableCell>
                    <TableCell align="center" sx={{ color: "#526484", fontSize: "12px" }}>
                      JOIN DATE
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#526484", fontSize: "12px" }}>
                      EARNED
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ color: "#526484" }}
                    >
                      No one join yet!
                    </TableCell>


                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box sx={{
            my: "5%"
          }}>
            <Typography sx={{
              color: "#364A63",
              fontSize: { md: "19px", xs: "14px" },
              mb: "2%"
            }}>
              Referral Commissions
            </Typography>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead sx={{ background: "#F5F6FA" }}>
                  <TableRow>
                    <TableCell sx={{ color: "#526484", fontSize: "12px" }}>DETAILS</TableCell>
                    <TableCell align="center" sx={{ color: "#526484", fontSize: "12px" }}>
                      DATE
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#526484", fontSize: "12px" }}>
                      Status
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#526484", fontSize: "12px" }}>
                      EARNING
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ color: "#526484" }}
                    >
                      No transactions found!
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box
            mt={5}
            p={2}
            sx={{
              background: "white",
              borderRadius: "5px",
              border: "1px solid #8094ae",
            }}
          >
            <Box
              sx={{
                fontSize: { md: "1.25rem", xs: "1.1rem" },
                fontWeight: "700",
                lineHeight: "2",
                color: "#364a63",
              }}
            >
              Refer Us & Earn
            </Box>

            <Box
              sx={{
                color: "#364a63",
                fontSize: "12px",
              }}
            >
              Use the below link to invite your friends.
            </Box>

            <Box
              mt={1}
              mb={3}
              pt={1}
              pl={matches ? 1 : 0}
              sx={{
                display: "flex",
                color: "#364a63",
                border: "1px solid #8094ae",
                borderRadius: "5px",
              }}
            >
              <LinkIcon style={{ fontSize: matches ? "1.5rem" : "1.1rem" }} />
              <Box
                pl={matches ? 1 : 0}
                sx={{
                  flexGrow: "1",
                  fontSize: { md: "16px", xs: "11px" },
                }}
              >
                https://investorm.xyz/invite?ref=9798582a
              </Box>
              <CopyToClipboard
                style={{
                  color: "#364a63",
                }}
                text={`https://investorm.xyz/invite?ref=9798582a`}
                onCopy={() => setCopied(true)}
              >
                <Button
                  sx={{
                    fontSize: { md: "16px", xs: "11px" },
                  }}
                >
                  <ContentCopyIcon
                    style={{ fontSize: matches ? "1.5rem" : "1rem" }}
                  />{" "}
                  Copy
                </Button>
              </CopyToClipboard>
            </Box>
            {copied ? <span style={{ color: "red" }}>Copied.</span> : null}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Referrals;
