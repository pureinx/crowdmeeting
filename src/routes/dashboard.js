// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
// core components/views
import DashboardPage from "../ui/templates/Dashboard/dashboard";
import UserProfile from "../features/UserProfile/user-profile";
import NotificationsPage from "../features/Notifications/notifications";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Workspace",
    navbarName: "Welcome back, hyperloud!",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "Profile",
    navbarName: "Your profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
