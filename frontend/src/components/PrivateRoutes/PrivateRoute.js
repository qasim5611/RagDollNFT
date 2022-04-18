import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isLogin } from "../../Hooks/useAuth";

// import { withRouter } from "react-router-dom";
import Header from "./../../components/Header.jsx";
import HeaderLogout from "./../../components/HeaderLogout.jsx";
const PrivateRoute = ({children}) => {
    // return (

    //   <Route {...rest}> {isLogin ? children : <Navigate to="/login" /> } </Route>
    // );
    // const auth = useAuth();
    console.log("isLogin");
    // console.log(isLogin);

    return isLogin() ? (
      <div>
        <HeaderLogout />
        {children}
      </div>
    ) : (
      <div>
        <Header />
        <Navigate to="/login" />
      </div>
    );
};

export default PrivateRoute;  