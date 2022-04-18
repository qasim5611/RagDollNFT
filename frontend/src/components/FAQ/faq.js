import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BelowHead from "../belowHead/belowHead";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0
  },
  "&:before": {
    display: "none"
  }
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: "1.5rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)"
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1)
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)"
}));

export default () => {
  let faqs = [
    "What is Ragdoll Cat?",
    "What is Ragdoll Cat NFT?",
    "What is Auto-Compounding",
    "What makes Ragdoll Cat NFT Unique?",
    "What issues Ragdoll Cat NFT trying to solve?",
    "What is RDC Tokens?",
    "How can I Participate"
  ];

  const [expanded, setExpanded] = React.useState("false");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  React.useEffect(()=>{
    window.scrollTo(0,0)
},[])
  return (
    <Box>
      <Box
        pb={5}
        pt={11.5}
        sx={{
          background:
            "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,197,134,1) 3%, rgba(255,203,146,1) 59%, rgba(255,250,246,1) 100%, rgba(255,255,255,1) 100%)"
        }}
      >
        <BelowHead />
        <Container>
          <Box pt={3} pb={5} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                color: "#894500",
                fontSize: { md: "36px", xs: "28px" },
                fontFamily: "MilkyNice",
                fontWeight: "bold"
              }}
            >
              FAQ
            </Box>
            <Box display="flex" justifyContent="center">
              <Divider
                style={{
                  width: "100px",
                  height: "3px",
                  backgroundColor: "#894500"
                }}
              />
            </Box>
          </Box>

          <Box>
            {faqs.map((faq, i) => {
              return (
                <Accordion
                  key={i}
                  expanded={expanded === `panel${i + 1}`}
                  onChange={handleChange(`panel${i + 1}`)}
                  sx={{
                    fontFamily: "Helvetica",
                    backgroundImage:
                      "linear-gradient(34deg, rgba(255,82,0,1) 0%, rgba(255,157,9,1) 100%)",
                    color: "#371F00",
                    fontSize: { xs: "20px", md: "28px" },
                    fontWeight: "900",
                    borderRadius: "30px",
                    marginTop: "10px"
                  }}
                >
                  <AccordionSummary
                    aria-controls={`panel${i + 1}d-content`}
                    id={`panel${i + 1}d-header`}
                  >
                    <Typography>{faq}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};
