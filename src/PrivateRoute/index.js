import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ children,isAuthenticated, ...rest }) => {
const isAuth = false;
    return (
    <Route
      {...rest}
      render={()=>{
          if (isAuthenticated)  {
              return children;
          }else {
              return<Redirect to={"/"} />
          }

      }}
    />
  );
};


export default PrivateRoute