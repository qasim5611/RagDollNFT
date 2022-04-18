import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import BelowHead from "../belowHead/belowHead";
export default () => {
    return <Box
        py={11}
        sx={{
            background:
                "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,197,134,1) 3%, rgba(255,203,146,1) 59%, rgba(255,250,246,1) 100%, rgba(255,255,255,1) 100%)"
        }}
    >
        <BelowHead />
        <Container>
            <Box py={3} sx={{
                color: "#371F00",
                fontSize: { md: "28px", xs: "20px" },
                fontFamily: "Helvetice-Bold",
                // fontWeight: "bold"
            }}>
                Blog will live just after presale
            </Box>
        </Container>
    </Box>
}