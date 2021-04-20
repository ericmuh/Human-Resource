import {
  dashboard,
  donor,
  establishments_and_operations,
  events_and_production,
  human_resources,
  locations,
  policy,
  programs,
  projects,
  settings,
  vendors
} from "../variables/icons";
import Dashboard from "../views/Admin/Dashboard/Dashboard";
import EventsListForm from "../views/Admin/EventsandProduction/Events/EventsForm";
import EventsList from "../views/Admin/EventsandProduction/Events/EventsList";
import ProductionListForm from "../views/Admin/EventsandProduction/Production/ProductionForm";
import ProductionList from "../views/Admin/EventsandProduction/Production/ProductionList";
import DisciplineForms from "../views/Admin/HumanResource/Discipline/DisciplineForms";
import DisciplineList from "../views/Admin/HumanResource/Discipline/DisciplineList";
import LeaveForm from "../views/Admin/HumanResource/Leave/LeaveForm";
import LeaveList from "../views/Admin/HumanResource/Leave/LeaveList";
import Staff from "../views/Admin/HumanResource/Staff/Staff";
import UserForms from "../views/Admin/HumanResource/Users/UserForms";
import UserList from "../views/Admin/HumanResource/Users/UserList";
import DonorListForm from "../views/Admin/Operations/Donor/DonorForm";
import DonorList from "../views/Admin/Operations/Donor/DonorList";
import LocationListForm from "../views/Admin/Operations/Location/LocationForm";
import LocationList from "../views/Admin/Operations/Location/LocationList";
import VendorForm from "../views/Admin/Operations/Vendor/VendorForm";
import VendorList from "../views/Admin/Operations/Vendor/VendorList";
import Confirm from "../views/Admin/Programs/Forms/Confirm";
import ManagementApproach from "../views/Admin/Programs/Forms/ManagementApproach";
import ProgrammaticApproach from "../views/Admin/Programs/Forms/ProgrammaticApproach";
import ProgramForms from "../views/Admin/Programs/ProgramForms";
import CountryPrograms from "../views/Admin/Programs/ProgramList";
import ProjectForms from "../views/Admin/Projects/ProjectForms";
import ProjectList from "../views/Admin/Projects/ProjectList";
import PublicationsForm from "../views/Admin/Publications/Forms/PublicationsForm";
import Publications from "../views/Admin/Publications/Publications";
import Settings from "../views/Admin/Settings/Settings";
import Login from "../views/Auth/Login";



const AdminRoutes = [
  /* ====================  
   PUBLICATIONS
  ==================
*/

  {
    path: "/dashboard",
    name: "Dashboard",
    icon: dashboard,
    component: Dashboard,
    layout: "/admin",
    auth: true,
  },
  /* ====================  
   PUBLICATIONS
  ==================
*/

  {
    path: "/publications",
    name: "Publications ",
    icon: policy,
    component: Publications,
    layout: "/admin",
    auth: true,
  },
  {
    path: "/publications/add-publication",
    name: "Publicattion Form ",
    icon: policy,
    component: PublicationsForm,
    layout: "/admin",
    auth: true,
    parent: "Publcations",
  },

  /* ====================  
    OPERATIONS
  ==================
*/

  {
    path: "/esop",
    name: "Operations ▼",
    icon: establishments_and_operations,
    component: LocationList,
    layout: "/admin",
    auth: true,
    children: [
      {
        path: "/locationList",
        name: "Location List",
        icon: locations,
      },
      {
        path: "/donorList",
        name: "Donor List",
        icon: donor,
      },
      {
        path: "/vendor-assests",
        name: "Vendor List",
        icon: establishments_and_operations,
      },
    ],
  },

  {
    path: "/esop/locationList",
    name: " Location List",
    icon: establishments_and_operations,
    component: LocationList,
    layout: "/admin",
    auth: true,
    parent: "esop",
  },
  {
    path: "/esop/addLocation",
    name: "Add Location",
    icon: establishments_and_operations,
    component: LocationListForm,
    layout: "/admin",
    auth: true,
    parent: "esop",
  },
  {
    path: "/esop/donorList",
    name: "Donor List",
    icon: establishments_and_operations,
    component: DonorList,
    layout: "/admin",
    auth: true,
    parent: "esop",
  },
  {
    path: "/esop/addDonor",
    name: "Donor List",
    icon: establishments_and_operations,
    component: DonorListForm,
    layout: "/admin",
    auth: true,
    parent: "esop",
  },
  {
    path: "/esop/vendor-assests",
    name: "Vendor List",
    icon: vendors,
    component: VendorList,
    layout: "/admin",
    auth: true,
    parent: "esop",
  },
  {
    path: "/esop/add-vendor",
    name: "Vendor List",
    icon: vendors,
    component: VendorForm,
    layout: "/admin",
    auth: true,
    parent: "esop",
  },

  /* ====================  
      HUMAN RESOURCES
  ==================
*/

  {
    path: "/human-resource",
    name: "Human Resources ▼",
    icon: human_resources,
    layout: "/admin",
    auth: true,

    children: [
      {
        path: "/staff",
        name: "Staff",
      },
      {
        path: "/leave",
        name: "Leave",
      },
      {
        path: "/discipline",
        name: "Discipline",
      },
      {
        path: "/users",
        name: "Users",
      },
    ],
  },

  //===== HR USERS ====//
  {
    path: "/human-resource/users",
    name: "Human Resources",
    icon: human_resources,
    component: UserList,
    layout: "/admin",
    auth: true,
    parent: "human-resource",
  },
  {
    path: "/human-resource/users/forms",
    name: "User forms",
    component: UserForms,
    icon: human_resources,
    layout: "admin",
    auth: true,
    parent: "human-resource",
    exact: true,
  },

  //==== HR STAFF ====//
  {
    path: "/human-resource/staff",
    name: "Staff",
    icon: human_resources,
    component: Staff,
    layout: "/admin",
    auth: true,
    parent: "human-resource",
    exact:true,
  },

  //==== HR LEAVE====//

  {
    path: "/human-resource/leave",
    name: "Leave",
    icon: human_resources,
    component: LeaveList,
    layout: "/admin",
    auth: true,
    parent: "human-resource",
  },
  {
    path: "/human-resource/leave/forms",
    name: "Leave Form",
    icon: human_resources,
    component: LeaveForm,
    layout: "/admin",
    auth: true,
    parent: "human-resource",
  },
  //==== HR DISCIPLINE ====//

  {
    path: "/human-resource/discipline",
    name: "Discipline",
    icon: human_resources,
    component: DisciplineList,
    layout: "/admin",
    auth: true,
    parent: "human-resource",
  },
  {
    path: "/human-resource/discipline/forms",
    name: "Case Log",
    icon: human_resources,
    component: DisciplineForms,
    layout: "/admin",
    auth: true,
    parent: "human-resource",
    exact: true,
  },

  /* ====================  
      PROGRAMS
  ==================
*/

  {
    path: "/programs",
    name: "Programs",
    icon: programs,
    component: CountryPrograms,
    layout: "/admin",
    auth: true,
  },
  // Program children

  {
    path: "/programs/forms",
    name: "Program Summary",
    icon: programs,
    component: ProgramForms,
    layout: "/admin",
    auth: true,
    parent: "programs",
    exact: true,
  },
  {
    path: "/programs/forms/programmatic-approach",
    name: "Program Summary",
    icon: programs,
    component: ProgrammaticApproach,
    layout: "/admin",
    auth: true,
    parent: "programs",
    exact: true,
  },
  {
    path: "/programs/programmatic-approach",
    name: "Programmatic Approach",
    icon: programs,
    component: ProgrammaticApproach,
    layout: "/admin",
    auth: true,
    parent: "programs",
  },
  {
    path: "/programs/management-approach",
    name: "Management Approach",
    icon: programs,
    component: ManagementApproach,
    layout: "/admin",
    auth: true,
    parent: "programs",
  },
  {
    path: "/programs/confirm",
    name: "Confirm Program",
    icon: programs,
    component: Confirm,
    layout: "/admin",
    auth: true,
    parent: "programs",
  },

  /* ====================  
      PROJECTS 
  ==================
*/
  {
    path: "/projects",
    name: "Projects",
    icon: projects,
    component: ProjectList,
    layout: "/admin",
    auth: true,
  },

  // Project children

  {
    path: "/projects/forms",
    name: "Project Forms",
    icon: projects,
    component: ProjectForms,
    layout: "/admin",
    auth: true,
    parent: "projects",
    exact:true,
  },
  
 

  /* ====================  
    EVENTS AND PRODUCITON
  ==================
*/

  {
    name: "Events & Production ▼",
    path: "/events",
    icon: events_and_production,
    layout: "/admin",
    auth: true,
    children: [
      {
        path: "/event-list",
        name: "Events",
      },
      {
        path: "/production-list",
        name: "Production",
      },
    ],
  },

  {
    path: "/events/event-list",
    name: "Events List",
    icon: events_and_production,
    component: EventsList,
    layout: "/admin",
    auth: true,
    parent: "events",
  },
  {
    path: "/events/add-event",
    name: "Add New Event",
    icon: events_and_production,
    component: EventsListForm,
    layout: "/admin",
    auth: true,
    parent: "events",
  },
  {
    path: "/events/production-list",
    name: "Production",
    icon: events_and_production,
    component: ProductionList,
    layout: "/admin",
    auth: true,
    parent: "events",
  },

  {
    path: "/events/add-production",
    name: "Add New Production",
    icon: events_and_production,
    component: ProductionListForm,
    layout: "/admin",
    auth: true,
    parent: "events",
  },
  /* ====================  
    SETTINGS
  ==================
*/

  {
    path: "/settings",
    name: "Settings",
    icon: settings,
    component: Settings,
    layout: "/admin",
    auth: true,
  },
];
const AuthRoutes = [
  /* ====================  
    AUTH
  ==================
*/
  {
    path: "/login",
    name: "Login",
    icon: settings,
    component: Login,
    layout: "/basic",
    auth: false,
  },
];
export { AdminRoutes, AuthRoutes };

