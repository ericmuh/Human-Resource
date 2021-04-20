import * as React from "react";
import { Route, Switch } from "react-router-dom";
import BasicFooter from "../components/Footer/BasicFooter";
import {AuthRoutes} from "../Routes/routes";

const Admin = (props: any) => {
  const getRoutes = (routes: any) => {
    return routes.map((prop: any, key: any) => {
      if (!prop.auth) {
        return (
          <Route
            path={"/auth" + prop.path}
            render={(props: any) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div
      className={
        props.location.pathname === "/auth/login"
          ? "wrapper login-form-container"
          : "wrapper"
      }>
      <Switch>{getRoutes(AuthRoutes)}</Switch>
      <BasicFooter />
    </div>
  );
};

export default Admin;
