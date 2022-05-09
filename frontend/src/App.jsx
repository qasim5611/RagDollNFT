import React, { useState } from "react";
import "./App.css";
// import Header from "./components/Header";
import { useMediaQuery } from "@mui/material";
import Home from "./components/Home/Home";
import FAQ from "./components/FAQ/faq";
import Footer from "./components/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Business from "./components/Business/Business";
import SrollButton from "./components/scrollButton/scrollbtn";
import Logo from "./components/Logo/logo";
import Signup from "./components/signup/Signup";
import Login from "./components/Login/Login";
import Forgotpass from "./components/Forgotpass/ForgotPass";
import Resetpass from "./components/Forgotpass/ResetPass";
import VerifyTockenMail from "./components/Forgotpass/VerifyTockenMail";

// import Admin from "./components/Admin/Admin";
// import User from "./components/User/User";
import BlogPage from "./components/blogPage/blog";
import Getblog from "./components/blogPage/getblog.js";

import Privacy from "./components/privacyPage/privacy";
import SwitchNetwork from "./networkSwitch";

import PrivateRoute from "./components/PrivateRoutes/PrivateRoute.js";
import PublicRoute from "./components/PublicRoutes/PublicRoute.js";
import Snackbar from "./components/Customsnackbar/Customsnackbar.js";
function App() {
  const matches = useMediaQuery("(max-width:750px)");
  const [open, setopen] = useState(false);
  // const HomeComponent = () => {
  //   return (
  //     <>
  //       {/* <Header /> */}
  //       {/* <SwitchNetwork setopen={setopen} open={open} /> */}
  //       <Routes>
  //         <Route index path="/" element={<PublicRoute ><Home setopen={setopen} /></PublicRoute> } />
  //         <Route index path="/home" element={ <PublicRoute > <Home setopen={setopen} /> </PublicRoute>} />
  //         <Route path="/faq" element={<PrivateRoute > <FAQ /> </PrivateRoute> } />
  //         <Route path="/business" element={<PublicRoute>  <Business />  </PublicRoute> }   />
  //         <Route path="/logo" element={<PrivateRoute>  <Logo />   </PrivateRoute> } />
  //         <Route path="/signup" element={<PublicRoute>  <Signup />   </PublicRoute>} />
  //         <Route path="/login" element={ <PublicRoute> <Login />  </PublicRoute>} />
  //          <Route path="/blog" element={ <PublicRoute><BlogPage /></PublicRoute>  } />
  //         <Route path="/forgotpass" element={ <PublicRoute> <Forgotpass />  </PublicRoute>} />
  //         <Route path="/resetpass" element={ <PublicRoute> <Resetpass />  </PublicRoute>} />
  //         <Route path="/verifyTockenMail" element={ <PublicRoute> <VerifyTockenMail />  </PublicRoute>} />
  //         <Route path="/PrivacyTerms" element={ <PublicRoute> <Privacy />  </PublicRoute>} />
       
  //       </Routes>
  //       <Footer />
  //     </>
  //   );
  // };

  return (
    <>
      <BrowserRouter>
        <Snackbar />
        {/* <Routes>
          <Route path="/*" element={<HomeComponent />} />
          <Route path="/userDashboard/*" element={<User />} />
          <Route path="/adminDashboard/*" element={  <Admin /> } />
        </Routes> */}
          <Routes>
          <Route index path="/" element={<PublicRoute ><Home setopen={setopen} /></PublicRoute> } />
          <Route index path="/home" element={ <PublicRoute > <Home setopen={setopen} /> </PublicRoute>} />
          <Route path="/faq" element={<PrivateRoute > <FAQ /> </PrivateRoute> } />
          <Route path="/business" element={<PublicRoute>  <Business />  </PublicRoute> }   />
          <Route path="/logo" element={<PrivateRoute>  <Logo />   </PrivateRoute> } />
          <Route path="/signup" element={<PublicRoute>  <Signup />   </PublicRoute>} />
          <Route path="/login" element={ <PublicRoute> <Login />  </PublicRoute>} />
           <Route path="/blog" element={ <PublicRoute><BlogPage /></PublicRoute>  } />
           <Route path="/getblog/:id" element={ <PublicRoute><Getblog /></PublicRoute>  } />

          <Route path="/forgotpass" element={ <PublicRoute> <Forgotpass />  </PublicRoute>} />
          <Route path="/resetpass" element={ <PublicRoute> <Resetpass />  </PublicRoute>} />
          <Route path="/verifyTockenMail" element={ <PublicRoute> <VerifyTockenMail />  </PublicRoute>} />
          <Route path="/PrivacyTerms" element={ <PublicRoute> <Privacy />  </PublicRoute>} />
       
        </Routes>
          <Footer />
        <SrollButton />
      </BrowserRouter>
    </>
  );
}

export default App;
