import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import API from "./../../../redux/url.js";
import axios from "axios";

import { Box, Container, Grid, Typography, Button } from "@mui/material";

import Bounce from "react-reveal/Bounce";
import { Link } from "react-router-dom";

export default function RagDollCatNFT() {

  const dispatch = useDispatch();

  const [service, setservice] = useState(false);

  useEffect(() => {
    // dispatch(getsocial());
    axios.get(API + "/getService").then((res) => {
      console.log("getService", res.data.user);

      console.log(res.data.user);
      // const getNftPromoteImages = getNftPromote ?  getNftPromote[0].files : getNftPromote;
      setservice(res.data.user);
    });
  }, []);





  return (
    <Box
      style={{
        background:
          "linear-gradient(180deg, rgba(255,189,117,1) 0%, rgba(255,250,246,1) 100%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "100% 100%",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Box pt={3} pb={6}>
        <>
          {service ? (<div>
            { service.map((item, index) =>{
              {/* if (index >= 2 && index < 3) */}
              if (index >= 0 && index < 1) {
                return (
                  <Grid container alignItems="center" key={index}>
                    <Grid
                      item
                      xs={12}
                      lg={6}
                      md={12}
                      sm={12}
                      order={{ xs: 2, sm: 1 }}
                    >
                      <Bounce left>
                        <Box>
                          <img
                            alt=""
                            style={{
                              maxWidth: "600px",
                              width: "100%",
                            }}
                            src={API + "/uploads/" + item.image}
                          />
                        </Box>
                      </Bounce>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      lg={6}
                      md={12}
                      sm={12}
                      order={{ xs: 2, sm: 1 }}
                    >
                      <Bounce right>
                        <Box p={3}>
                          <Typography
                            sx={{
                              fontFamily: "MilkyNice",
                              fontSize: "33px",
                              fontWeight: "700",
                              color: "#371F00",
                              py: "3%",
                              px: "3%",
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "justify",
                              fontSize: "17px",
                              fontFamily: "Helvetice-Bold",
                              color: "#903800",
                              py: "1%",
                              px: "3%",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: item.description && item.description,
                            }}
                          ></Typography>

                          <Box
                            border="3px solid #FF8504"
                            borderRadius="30px"
                            mt={2}
                            sx={{ width: "fit-content" }}
                          >
                            <Link
                              to="/login"
                              style={{ textDecoration: "none" }}
                            >
                              <Button
                                sx={{
                                  textTransform: "capitalize",
                                  border: "1.5px solid white",
                                  borderRadius: "30px",
                                  width: "200px",
                                  backgroundImage:
                                    "linear-gradient(to right, #FF8605, #FFAB24)",
                                  fontSize: { xs: "12px", md: "14px" },
                                  // fontWeight: "700",
                                  fontFamily: "Helvetice-Bold",

                                  boxShadow: 4,
                                }}
                              >
                                {item.btn}
                              </Button>
                            </Link>
                          </Box>
                        </Box>
                      </Bounce>
                    </Grid>
                  </Grid>
                );
              }

              else if (index >= 1 && index < 2) {
                 return (
                   <Grid container alignItems="center" key={index}>
                     <Grid
                       item
                       xs={12}
                       lg={6}
                       md={12}
                       sm={12}
                       order={{ xs: 2, sm: 1 }}
                     >
                       <Bounce right>
                         <Box p={3}>
                           <Typography
                             sx={{
                               fontFamily: "MilkyNice",
                               fontSize: "33px",
                               fontWeight: "700",
                               color: "#371F00",
                               py: "3%",
                               px: "3%",
                             }}
                           >
                             {item.title}
                           </Typography>
                           <Typography
                             sx={{
                               textAlign: "justify",
                               fontSize: "17px",
                               fontFamily: "Helvetice-Bold",
                               color: "#903800",
                               py: "1%",
                               px: "3%",
                             }}
                             dangerouslySetInnerHTML={{
                               __html: item.description && item.description,
                             }}
                           ></Typography>

                           <Box
                             border="3px solid #FF8504"
                             borderRadius="30px"
                             mt={2}
                             sx={{ width: "fit-content" }}
                           >
                             <Link
                               to="/login"
                               style={{ textDecoration: "none" }}
                             >
                               <Button
                                 sx={{
                                   textTransform: "capitalize",
                                   border: "1.5px solid white",
                                   borderRadius: "30px",
                                   width: "200px",
                                   backgroundImage:
                                     "linear-gradient(to right, #FF8605, #FFAB24)",
                                   fontSize: { xs: "12px", md: "14px" },
                                   // fontWeight: "700",
                                   fontFamily: "Helvetice-Bold",

                                   boxShadow: 4,
                                 }}
                               >
                                 {item.btn}
                               </Button>
                             </Link>
                           </Box>
                         </Box>
                       </Bounce>
                     </Grid>
                     <Grid
                       item
                       xs={12}
                       lg={6}
                       md={12}
                       sm={12}
                       order={{ xs: 2, sm: 1 }}
                     >
                       <Bounce left>
                         <Box>
                           <img
                             alt=""
                             style={{
                               maxWidth: "600px",
                               width: "100%",
                             }}
                             src={API + "/uploads/" + item.image}
                           />
                         </Box>
                       </Bounce>
                     </Grid>
                   </Grid>
                 );
              }
               

                 else if (index >= 2 && index < 3) {
                return (
                  <Grid container alignItems="center" key={index}>
                    <Grid
                      item
                      xs={12}
                      lg={6}
                      md={12}
                      sm={12}
                      order={{ xs: 2, sm: 1 }}
                    >
                      <Bounce right>
                        <Box p={3}>
                          <Typography
                            sx={{
                              fontFamily: "MilkyNice",
                              fontSize: "33px",
                              fontWeight: "700",
                              color: "#371F00",
                              py: "3%",
                              px: "3%",
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "justify",
                              fontSize: "17px",
                              fontFamily: "Helvetice-Bold",
                              color: "#903800",
                              py: "1%",
                              px: "3%",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: item.description && item.description,
                            }}
                          ></Typography>

                          <Box
                            border="3px solid #FF8504"
                            borderRadius="30px"
                            mt={2}
                            sx={{ width: "fit-content" }}
                          >
                            <Link
                              to="/login"
                              style={{ textDecoration: "none" }}
                            >
                              <Button
                                sx={{
                                  textTransform: "capitalize",
                                  border: "1.5px solid white",
                                  borderRadius: "30px",
                                  width: "200px",
                                  backgroundImage:
                                    "linear-gradient(to right, #FF8605, #FFAB24)",
                                  fontSize: { xs: "12px", md: "14px" },
                                  // fontWeight: "700",
                                  fontFamily: "Helvetice-Bold",

                                  boxShadow: 4,
                                }}
                              >
                                {item.btn}
                              </Button>
                            </Link>
                          </Box>
                        </Box>
                      </Bounce>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      lg={6}
                      md={12}
                      sm={12}
                      order={{ xs: 2, sm: 1 }}
                    >
                      <Bounce left>
                        <Box>
                          <img
                            alt=""
                            style={{
                              maxWidth: "600px",
                              width: "100%",
                            }}
                            src={API + "/uploads/" + item.image}
                          />
                        </Box>
                      </Bounce>
                    </Grid>
                  </Grid>
                );


                 }

                 else if (index >= 3 && index < 4) {
                     return (
                       <Grid container alignItems="center" key={index}>
                         <Grid
                           item
                           xs={12}
                           lg={6}
                           md={12}
                           sm={12}
                           order={{ xs: 2, sm: 1 }}
                         >
                           <Bounce left>
                             <Box>
                               <img
                                 alt=""
                                 style={{
                                   maxWidth: "600px",
                                   width: "100%",
                                 }}
                                 src={API + "/uploads/" + item.image}
                               />
                             </Box>
                           </Bounce>
                         </Grid>

                         <Grid
                           item
                           xs={12}
                           lg={6}
                           md={12}
                           sm={12}
                           order={{ xs: 2, sm: 1 }}
                         >
                           <Bounce right>
                             <Box p={3}>
                               <Typography
                                 sx={{
                                   fontFamily: "MilkyNice",
                                   fontSize: "33px",
                                   fontWeight: "700",
                                   color: "#371F00",
                                   py: "3%",
                                   px: "3%",
                                 }}
                               >
                                 {item.title}
                               </Typography>
                               <Typography
                                 sx={{
                                   textAlign: "justify",
                                   fontSize: "17px",
                                   fontFamily: "Helvetice-Bold",
                                   color: "#903800",
                                   py: "1%",
                                   px: "3%",
                                 }}
                                 dangerouslySetInnerHTML={{
                                   __html: item.description && item.description,
                                 }}
                               ></Typography>

                               <Box
                                 border="3px solid #FF8504"
                                 borderRadius="30px"
                                 mt={2}
                                 sx={{ width: "fit-content" }}
                               >
                                 <Link
                                   to="/login"
                                   style={{ textDecoration: "none" }}
                                 >
                                   <Button
                                     sx={{
                                       textTransform: "capitalize",
                                       border: "1.5px solid white",
                                       borderRadius: "30px",
                                       width: "200px",
                                       backgroundImage:
                                         "linear-gradient(to right, #FF8605, #FFAB24)",
                                       fontSize: { xs: "12px", md: "14px" },
                                       // fontWeight: "700",
                                       fontFamily: "Helvetice-Bold",

                                       boxShadow: 4,
                                     }}
                                   >
                                     {item.btn}
                                   </Button>
                                 </Link>
                               </Box>
                             </Box>
                           </Bounce>
                         </Grid>
                       </Grid>
                     );
                   
                 }


                 else if (index >= 4 && index < 5) {
                   return (
                     <Grid container alignItems="center" key={index}>
                       <Grid
                         item
                         xs={12}
                         lg={6}
                         md={12}
                         sm={12}
                         order={{ xs: 2, sm: 1 }}
                       >
                         <Bounce right>
                           <Box p={3}>
                             <Typography
                               sx={{
                                 fontFamily: "MilkyNice",
                                 fontSize: "33px",
                                 fontWeight: "700",
                                 color: "#371F00",
                                 py: "3%",
                                 px: "3%",
                               }}
                             >
                               {item.title}
                             </Typography>
                             <Typography
                               sx={{
                                 textAlign: "justify",
                                 fontSize: "17px",
                                 fontFamily: "Helvetice-Bold",
                                 color: "#903800",
                                 py: "1%",
                                 px: "3%",
                               }}
                               dangerouslySetInnerHTML={{
                                 __html: item.description && item.description,
                               }}
                             ></Typography>

                             <Box
                               border="3px solid #FF8504"
                               borderRadius="30px"
                               mt={2}
                               sx={{ width: "fit-content" }}
                             >
                               <Link
                                 to="/login"
                                 style={{ textDecoration: "none" }}
                               >
                                 <Button
                                   sx={{
                                     textTransform: "capitalize",
                                     border: "1.5px solid white",
                                     borderRadius: "30px",
                                     width: "200px",
                                     backgroundImage:
                                       "linear-gradient(to right, #FF8605, #FFAB24)",
                                     fontSize: { xs: "12px", md: "14px" },
                                     // fontWeight: "700",
                                     fontFamily: "Helvetice-Bold",

                                     boxShadow: 4,
                                   }}
                                 >
                                   {item.btn}
                                 </Button>
                               </Link>
                             </Box>
                           </Box>
                         </Bounce>
                       </Grid>
                       <Grid
                         item
                         xs={12}
                         lg={6}
                         md={12}
                         sm={12}
                         order={{ xs: 2, sm: 1 }}
                       >
                         <Bounce left>
                           <Box>
                             <img
                               alt=""
                               style={{
                                 maxWidth: "600px",
                                 width: "100%",
                               }}
                               src={API + "/uploads/" + item.image}
                             />
                           </Box>
                         </Bounce>
                       </Grid>
                     </Grid>
                   );

                 }


                 else if (index >= 5 && index < 6) {
               return (
                 <Grid container alignItems="center" key={index}>
                   <Grid
                     item
                     xs={12}
                     lg={6}
                     md={12}
                     sm={12}
                     order={{ xs: 2, sm: 1 }}
                   >
                     <Bounce left>
                       <Box>
                         <img
                           alt=""
                           style={{
                             maxWidth: "600px",
                             width: "100%",
                           }}
                           src={API + "/uploads/" + item.image}
                         />
                       </Box>
                     </Bounce>
                   </Grid>

                   <Grid
                     item
                     xs={12}
                     lg={6}
                     md={12}
                     sm={12}
                     order={{ xs: 2, sm: 1 }}
                   >
                     <Bounce right>
                       <Box p={3}>
                         <Typography
                           sx={{
                             fontFamily: "MilkyNice",
                             fontSize: "33px",
                             fontWeight: "700",
                             color: "#371F00",
                             py: "3%",
                             px: "3%",
                           }}
                         >
                           {item.title}
                         </Typography>
                         <Typography
                           sx={{
                             textAlign: "justify",
                             fontSize: "17px",
                             fontFamily: "Helvetice-Bold",
                             color: "#903800",
                             py: "1%",
                             px: "3%",
                           }}
                           dangerouslySetInnerHTML={{
                             __html: item.description && item.description,
                           }}
                         ></Typography>

                         <Box
                           border="3px solid #FF8504"
                           borderRadius="30px"
                           mt={2}
                           sx={{ width: "fit-content" }}
                         >
                           <Link to="/login" style={{ textDecoration: "none" }}>
                             <Button
                               sx={{
                                 textTransform: "capitalize",
                                 border: "1.5px solid white",
                                 borderRadius: "30px",
                                 width: "200px",
                                 backgroundImage:
                                   "linear-gradient(to right, #FF8605, #FFAB24)",
                                 fontSize: { xs: "12px", md: "14px" },
                                 // fontWeight: "700",
                                 fontFamily: "Helvetice-Bold",

                                 boxShadow: 4,
                               }}
                             >
                               {item.btn}
                             </Button>
                           </Link>
                         </Box>
                       </Box>
                     </Bounce>
                   </Grid>
                 </Grid>
               );
                   
                 }


                 else if (index >= 6 && index < 7) {
                   return (
                     <Grid container alignItems="center" key={index}>
                       <Grid
                         item
                         xs={12}
                         lg={6}
                         md={12}
                         sm={12}
                         order={{ xs: 2, sm: 1 }}
                       >
                         <Bounce right>
                           <Box p={3}>
                             <Typography
                               sx={{
                                 fontFamily: "MilkyNice",
                                 fontSize: "33px",
                                 fontWeight: "700",
                                 color: "#371F00",
                                 py: "3%",
                                 px: "3%",
                               }}
                             >
                               {item.title}
                             </Typography>
                             <Typography
                               sx={{
                                 textAlign: "justify",
                                 fontSize: "17px",
                                 fontFamily: "Helvetice-Bold",
                                 color: "#903800",
                                 py: "1%",
                                 px: "3%",
                               }}
                               dangerouslySetInnerHTML={{
                                 __html: item.description && item.description,
                               }}
                             ></Typography>

                             <Box
                               border="3px solid #FF8504"
                               borderRadius="30px"
                               mt={2}
                               sx={{ width: "fit-content" }}
                             >
                               <Link
                                 to="/login"
                                 style={{ textDecoration: "none" }}
                               >
                                 <Button
                                   sx={{
                                     textTransform: "capitalize",
                                     border: "1.5px solid white",
                                     borderRadius: "30px",
                                     width: "200px",
                                     backgroundImage:
                                       "linear-gradient(to right, #FF8605, #FFAB24)",
                                     fontSize: { xs: "12px", md: "14px" },
                                     // fontWeight: "700",
                                     fontFamily: "Helvetice-Bold",

                                     boxShadow: 4,
                                   }}
                                 >
                                   {item.btn}
                                 </Button>
                               </Link>
                             </Box>
                           </Box>
                         </Bounce>
                       </Grid>
                       <Grid
                         item
                         xs={12}
                         lg={6}
                         md={12}
                         sm={12}
                         order={{ xs: 2, sm: 1 }}
                       >
                         <Bounce left>
                           <Box>
                             <img
                               alt=""
                               style={{
                                 maxWidth: "600px",
                                 width: "100%",
                               }}
                               src={API + "/uploads/" + item.image}
                             />
                           </Box>
                         </Bounce>
                       </Grid>
                     </Grid>
                   );

                   
                 }


                 else if (index >= 7 && index < 8) {

                   return (
                     <Grid container alignItems="center" key={index}>
                       <Grid
                         item
                         xs={12}
                         lg={6}
                         md={12}
                         sm={12}
                         order={{ xs: 2, sm: 1 }}
                       >
                         <Bounce left>
                           <Box>
                             <img
                               alt=""
                               style={{
                                 maxWidth: "600px",
                                 width: "100%",
                               }}
                               src={API + "/uploads/" + item.image}
                             />
                           </Box>
                         </Bounce>
                       </Grid>

                       <Grid
                         item
                         xs={12}
                         lg={6}
                         md={12}
                         sm={12}
                         order={{ xs: 2, sm: 1 }}
                       >
                         <Bounce right>
                           <Box p={3}>
                             <Typography
                               sx={{
                                 fontFamily: "MilkyNice",
                                 fontSize: "33px",
                                 fontWeight: "700",
                                 color: "#371F00",
                                 py: "3%",
                                 px: "3%",
                               }}
                             >
                               {item.title}
                             </Typography>
                             <Typography
                               sx={{
                                 textAlign: "justify",
                                 fontSize: "17px",
                                 fontFamily: "Helvetice-Bold",
                                 color: "#903800",
                                 py: "1%",
                                 px: "3%",
                               }}
                               dangerouslySetInnerHTML={{
                                 __html: item.description && item.description,
                               }}
                             ></Typography>

                             <Box
                               border="3px solid #FF8504"
                               borderRadius="30px"
                               mt={2}
                               sx={{ width: "fit-content" }}
                             >
                               <Link
                                 to="/login"
                                 style={{ textDecoration: "none" }}
                               >
                                 <Button
                                   sx={{
                                     textTransform: "capitalize",
                                     border: "1.5px solid white",
                                     borderRadius: "30px",
                                     width: "200px",
                                     backgroundImage:
                                       "linear-gradient(to right, #FF8605, #FFAB24)",
                                     fontSize: { xs: "12px", md: "14px" },
                                     // fontWeight: "700",
                                     fontFamily: "Helvetice-Bold",

                                     boxShadow: 4,
                                   }}
                                 >
                                   {item.btn}
                                 </Button>
                               </Link>
                             </Box>
                           </Box>
                         </Bounce>
                       </Grid>
                     </Grid>
                   );
                   
                 }
            } ) }
          </div>) : (<div>Loading...</div>) }
        </>
         

         
        </Box>
      </Container>
    </Box>
  );
}
