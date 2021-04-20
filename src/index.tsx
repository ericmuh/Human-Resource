import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//Calendar css
import "react-calendar/dist/Calendar.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/sass/styles.scss";
// contexts
import AuthContextProvider from "./context/contexts/Auth/AuthContext";
import OperationContextProvider from "./context/contexts/Operations/Operations";
import ProgramContextProvider from "./context/contexts/Programs/Program";
import ProjectContextProvider from "./context/contexts/Projects/Project";
import PublicationContextProvider from "./context/contexts/Publications/Publications";
// Layouts
import AdminLayout from "./layouts/Admin";
import Login from "./views/Auth/Login";





// context provider
const App = () => {
  return (
    <AuthContextProvider>
      <ProjectContextProvider>
        <ProgramContextProvider>
          <OperationContextProvider>
            <PublicationContextProvider>
              <BrowserRouter>
                <Switch>
                  <Route
                    path="/login"
                    exact
                    component={Login}
                  />
                  <Route
                    path="/"
                    render={(props) => <AdminLayout {...props} />}
                  />

                  <Route path="*">
                    <h1>page not found</h1>
                  </Route>
                </Switch>
              </BrowserRouter>
            </PublicationContextProvider>
          </OperationContextProvider>
        </ProgramContextProvider>
      </ProjectContextProvider>
    </AuthContextProvider>
  );
};

// REACTDOM RENDER
ReactDOM.render(<App />, document.getElementById("root"));
