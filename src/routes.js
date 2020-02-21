// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard";
import NotificationsPage from "./views/Notifications/Notifications";
import UserProfile from "./views/Profile/Profile";
import MarketCap from "./views/MarketCap/MarketCap";
import Transactions from "./views/MarketCap/MarketCap";
import Deposit from "./views/Deposit/Deposit";
import Withdraw from "./views/Withdraw/Withdraw";
import { Equalizer, ShopTwo, Input,OpenInNew } from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "home",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    // layout: "/admin"
  },
  {
    path: "deposit",
    name: "Deposit",
    icon: Input,
    component: Deposit,
    // layout: "/admin"
  },
  {
    path: "withdraw",
    name: "Withdraw",
    icon: OpenInNew,
    component: Withdraw,
    // layout: "/admin"
  },
  {
    path: "marketcap",
    name: "Market Cap",
    icon: Equalizer,
    component: MarketCap,
    // layout: "/admin"
  },
  {
    path: "user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    // layout: "/admin"
  },
  {
    path: "notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    // layout: "/admin"
  },
  {
    path: "transactions",
    name: "Transactions",
    icon: ShopTwo,
    component: Transactions,
    // layout: "/admin"
  }

];

export default dashboardRoutes;
