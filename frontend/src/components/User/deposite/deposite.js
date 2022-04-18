import { Button, Container, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { GrPaypal } from "react-icons/gr";
import { FaCoins, FaWallet, FaBuilding } from "react-icons/fa";

export default () => {
  const matches = useMediaQuery("(min-width: 586px)");
  return (
    <Box bgcolor="#F5F6FA" py={5}>
      <Container maxWidth="sm">
        <Box textAlign="center">
          <Box
            sx={{
              color: "#364A63",
              fontSize: "27px",
              fontWeight: "600"
            }}
            mb={3}
          >
            Deposit Funds
          </Box>
          <Box
            sx={{
              color: "#526484",
              fontSize: "16px"
            }}
            mb={1.5}
          >
            Select from payment options below
          </Box>
          <Box
            sx={{
              color: "#8094ae",
              fontSize: "12px"
            }}
          >
            Secure and safely deposit money into your account.
          </Box>
        </Box>

        <Box
          bgcolor="white"
          border="1px solid"
          borderRadius="4px"
          borderColor="divider"
          mt={4}
        >
          <FormControl sx={{ width: "100%" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider"
                }}
                px={3}
                py={1}
                color="black"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box color="#364a63" fontSize="14px">
                  <FormControlLabel
                    value="paypal"
                    control={<Radio />}
                    label="PayPal"
                  />
                </Box>
                <Box>
                  <GrPaypal style={{ color: "#8094AE", fontSize: "1.3rem" }} />
                </Box>
              </Box>

              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider"
                }}
                px={3}
                py={1}
                color="black"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box color="#364a63" fontSize="14px">
                  <FormControlLabel
                    value="wireTrans"
                    control={<Radio />}
                    label="Wire Transfer"
                  />
                </Box>
                <Box>
                  <FaBuilding
                    style={{ color: "#8094AE", fontSize: "1.3rem" }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider"
                }}
                px={3}
                py={1}
                color="black"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box color="#364a63" fontSize="14px">
                  <FormControlLabel
                    value="wallet"
                    control={<Radio />}
                    label="Crypto Wallet"
                  />
                </Box>
                <Box>
                  <FaWallet style={{ color: "#8094AE", fontSize: "1.3rem" }} />
                </Box>
              </Box>

              <Box
                px={3}
                py={1}
                color="black"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box color="#364a63" fontSize="14px">
                  <FormControlLabel
                    value="coinbase"
                    control={<Radio />}
                    label="Coinbase"
                  />
                </Box>
                <Box>
                  <FaCoins style={{ color: "#8094AE", fontSize: "1.3rem" }} />
                </Box>
              </Box>
            </RadioGroup>
          </FormControl>
        </Box>

        <Box
          textAlign="center"
          mt={4}
          py={0.5}
          bgcolor="#037DFF"
          sx={{ cursor: "pointer", borderRadius: "4px" }}
        >
          <Button
            varient="contained"
            sx={{
              color: "white",
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: "700"
            }}
          >
            deposit now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
