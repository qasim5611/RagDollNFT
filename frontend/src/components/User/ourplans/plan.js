import { Container, Divider, Grid, Button, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import {Link } from 'react-router-dom';
export default () => {
  const matches = useMediaQuery("(min-width: 960px)");
  const matches1 = useMediaQuery("(min-width: 650px)");

  const coinArray = [
    { name: "Mercury", amount: "100.00", interest: "0.45%", days: "1" },
    { name: "Venus", amount: "250.00", interest: "5.75%", days: "3" },
    { name: "Jupiter", amount: "500.00", interest: "9.5%", days: "1" }
  ];
  const planArray = [
    {
      name: "Standard Plan",
      minamount: "10.00",
      maxamount: "500.00",
      interest: "2.5%",
      days: "7"
    },
    {
      name: "Premium Plan",
      minamount: "100.00",
      maxamount: "1,500.00",
      interest: "1.5%",
      days: "1"
    },
    {
      name: "Professional Plan",
      minamount: "500.00",
      maxamount: "2,500.00",
      interest: "2.75%",
      days: "15"
    },
    {
      name: "Silver Plan",
      minamount: "100.00",
      maxamount: "1,000.00",
      interest: "7.5%%",
      days: "2"
    },
    {
      name: "Diamond Plan",
      minamount: "250.00",
      maxamount: "1,500.00",
      interest: "5%",
      days: "2"
    },
    {
      name: "Platinum Plan",
      minamount: "250.00",
      maxamount: "1,200.00",
      interest: "1.5%",
      days: "1"
    }
  ];

  return (
    <Box bgcolor="#F5F6FA" pb={5}>
      <Container>
        <Box textAlign="center" color="#364a63" py={5}>
          <Box fontSize={{ md: "40px", xs: "28px" }} fontWeight="700" mb={2}>
            Investment Plans
          </Box>
          <Box
            color="#526484"
            fontSize={{ md: "18px", xs: "16px" }}
            width={{ md: "50%", xs: "100%" }}
            margin="auto"
          >
            Here is our several investment plans. You can invest daily, weekly
            or monthly and get higher returns in your investment.
          </Box>

          <Box fontSize={{ md: "14px", xs: "12px" }} fontWeight="550" mt={2}>
            Choose your favourite plan and start earning now.
          </Box>
        </Box>
        <Grid container spacing={5}>
          {coinArray.map((item) => {
            return (
              <Grid item xs={matches ? 4 : matches1 ? 6 : 12}>
                <Box
                  bgcolor="white"
                  border="1px solid"
                  borderColor="divider"
                  borderRadius="4px"
                  py={3}
                >
                  <Box
                    textAlign="center"
                    mb={3}
                    color="#364a63"
                    fontSize={{ md: "24px", xs: "20px" }}
                    fontWeight="550"
                  >
                    {item.name}
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    mb={2.5}
                  >
                    <Box textAlign="center">
                      <Box color="#1c2b46" fontSize="27px" fontWeight="400">
                        {item.interest}
                      </Box>
                      <Box color="#8094ae" fontSize="12px">
                        Daily Interest
                      </Box>
                    </Box>
                    <Box textAlign="center">
                      <Box color="#1c2b46" fontSize="27px" fontWeight="400">
                        {item.days}
                      </Box>
                      <Box color="#8094ae" fontSize="12px">
                        Term Days
                      </Box>
                    </Box>
                  </Box>

                  <Divider />

                  <Box mt={3}>
                    <Container>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        fontSize="14px"
                      >
                        <Box display="flex" color="#526484" fontWeight="400">
                          Deposite Amount
                          <Box ml={2.5}>-</Box>
                        </Box>
                        <Box color="#1c2b46" fontWeight="550">
                          {item.amount} USD
                        </Box>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        fontSize="14px"
                        mt={1.5}
                      >
                        <Box display="flex" color="#526484" fontWeight="400">
                          Deposite Type
                          <Box ml={4.7}>-</Box>
                        </Box>
                        <Box color="#526484" fontWeight="400">
                          Fixed
                        </Box>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        fontSize="14px"
                        mt={1.5}
                      >
                        <Box display="flex" color="#526484" fontWeight="400">
                          Capital Return
                          <Box ml={4.6}>-</Box>
                        </Box>
                        <Box color="#526484" fontWeight="400">
                          Each Term
                        </Box>
                      </Box>
                    </Container>
                  </Box>

                  <Box textAlign="center" mt={6}>
                    <Link to='/userDashboard/invest' style={{ textDecoration: 'none', color: "white" }} >

                      <Button
                        sx={{
                          backgroundColor: "#037DFF",
                          color: "white",
                          textTransform: "capitalize",
                          fontSize: "13px",
                          fontWeight: "550",
                          width: "120px",
                          "&:hover": { backgroundColor: "#037DFFa1" },
                        }}
                      >
                        invest now
                      </Button>
                    </Link>

                  </Box>
                </Box>
              </Grid>
            );
          })}

          {planArray.map((item) => {
            return (
              <Grid item xs={matches ? 4 : matches1 ? 6 : 12}>
                <Box
                  bgcolor="white"
                  border="1px solid"
                  borderColor="divider"
                  borderRadius="4px"
                  py={3}
                >
                  <Box
                    textAlign="center"
                    mb={3}
                    color="#364a63"
                    fontSize={{ md: "24px", xs: "20px" }}
                    fontWeight="550"
                  >
                    {item.name}
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    mb={2.5}
                  >
                    <Box textAlign="center">
                      <Box color="#1c2b46" fontSize="27px" fontWeight="400">
                        {item.interest}
                      </Box>
                      <Box color="#8094ae" fontSize="12px">
                        Daily Interest
                      </Box>
                    </Box>
                    <Box textAlign="center">
                      <Box color="#1c2b46" fontSize="27px" fontWeight="400">
                        {item.days}
                      </Box>
                      <Box color="#8094ae" fontSize="12px">
                        Term Days
                      </Box>
                    </Box>
                  </Box>

                  <Divider />

                  <Box mt={3}>
                    <Container>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        fontSize="14px"
                      >
                        <Box display="flex" color="#526484" fontWeight="400">
                          Min Deposite
                          <Box ml={5.6}>-</Box>
                        </Box>
                        <Box color="#1c2b46" fontWeight="550">
                          {item.minamount} USD
                        </Box>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        fontSize="14px"
                        mt={1.5}
                      >
                        <Box display="flex" color="#526484" fontWeight="400">
                          Max Deposite
                          <Box ml={5.1}>-</Box>
                        </Box>
                        <Box color="#526484" fontWeight="400">
                          {item.maxamount} USD
                        </Box>
                      </Box>

                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        fontSize="14px"
                        mt={1.5}
                      >
                        <Box display="flex" color="#526484" fontWeight="400">
                          Capital Return
                          <Box ml={4.6}>-</Box>
                        </Box>
                        <Box color="#526484" fontWeight="400">
                          End of Term
                        </Box>
                      </Box>
                    </Container>
                  </Box>

                  <Box textAlign="center" mt={6}>
                    <Link to='/userDashboard/invest' style={{ textDecoration: 'none', color: "white" }} >
                      <Button
                        sx={{
                          backgroundColor: "#037DFF",
                          color: "white",
                          textTransform: "capitalize",
                          fontSize: "13px",
                          fontWeight: "550",
                          width: "120px",
                          "&:hover": { backgroundColor: "#037DFFa1" },
                        }}
                      >
                        invest now
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
