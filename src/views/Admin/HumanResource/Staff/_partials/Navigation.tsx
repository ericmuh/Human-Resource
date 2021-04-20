import * as React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import PerformancePlanning from "../pages/PerformancePlanning";
import Appraisals from "../pages/Appraisals";
import ScoreCard from "../pages/ScoreCard";
import TimeSheets from "../pages/TimeSheets";
import QuarteryTracking from "../pages/QuarteryTracking";

interface ILinkList {
  name: string;
  path: string;
  component: React.FC;
}

const linksList: Array<ILinkList> = [
  {
    path: "performance-planning",
    name: "Performance Planning",
    component: PerformancePlanning,
  },
  {
    path: "time-sheets",
    name: "Time Sheets",
    component: TimeSheets,
  },

  {
    path: "quartery-tracking",
    name: "Quartery Tracking",
    component: QuarteryTracking,
  },
  {
    path: "appraisal",
    name: "Apprasisals",
    component: Appraisals,
  },
  {
    path: "score-card",
    name: "Score Card",
    component: ScoreCard,
  },
];

interface IProps {
  url: string;
}
export const Nav = ({ url }: IProps) => (
  <Row className="page-heading">
    {linksList.map((link: ILinkList, key: number) => (
      <Col key={key}>
        <NavLink
          to={`${url}/${link.path}`}
          className="btn btn-transparent border-0 nav-link"
          activeClassName="active"
        >
          {link.name}
        </NavLink>
      </Col>
    ))}
  </Row>
);

interface IPropsRoutes {
  path: string;
  rest:React.PropsWithChildren<any>
}
export const Routes = ({ path , rest}: IPropsRoutes) => (
  <Switch>
    <Redirect from={path} exact to={`${path}/performance-planning`} />
    {linksList.map((link: ILinkList, key: number)=>{

      return (
        <Route 
        path={`${path}/${link.path}`}
        render={(props:any)=><link.component {...rest}/>}/>
      )
    })}
  </Switch>
);
