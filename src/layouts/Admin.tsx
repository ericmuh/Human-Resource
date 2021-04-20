import React, { useContext } from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import AdminFooter from "../components/Footer/AdminFooter";
import AdminNavbar from "../components/Navbars/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { AuthContext } from "../context/contexts/Auth/AuthContext";
import { AdminRoutes } from "../Routes/routes";
import Dashboard from "../views/Admin/Dashboard/Dashboard";

const Admin = (props: any) => {
  const { isLoggedIn } = useContext(AuthContext);

  const getRoutes = (routes: Array<object>) => {
    return routes.map((prop: any, key: any) => {
      return (
        <Route
          exact={!prop.exact}
          path={prop.path}
          render={(props: any) =>
            isLoggedIn ? (
              <prop.component {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
          key={key}
        />
      );
    });
  };
  const getBrandText = (path: any) => {
    let brand = "";
    AdminRoutes.forEach((route, i) => {
      if (props.location.pathname.indexOf(AdminRoutes[i].path) !== -1) {
        brand = AdminRoutes[i].name;
      }
    });
    return brand;
  };

  return (
    <div className="wrapper">
      <Sidebar {...props} routes={AdminRoutes} />
      <div id="main-panel" className="main-panel">
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />

        <Switch>
          <Redirect from="/" to="/dashboard" exact />
          <Route exact path="/" component={Dashboard} />
          {getRoutes(AdminRoutes)}
        </Switch>

        <AdminFooter />
      </div>
    </div>
  );
};

export default Admin;
