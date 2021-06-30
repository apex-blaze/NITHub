import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";

function PrivateRoute({ authenticated, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authenticated) {
          return <Component user={authenticated} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    ></Route>
  );
}

export default withRouter(PrivateRoute);
