import { AiOutlineHome } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import ROLES from "src/constants/roles";
import ROUTES from "src/constants/routes";

const mainSidebar = [
  {
    title: "Dashboard",
    path: ROUTES.dashboard,
    icon: AiOutlineHome,
  },
  {
    title: "Profile",
    path: ROUTES.userProfile,
    icon: ImProfile,
  },
  {
    title: "Admin",
    path: ROUTES.admin,
    icon: AiOutlineHome,
    roles: [ROLES.ADMIN, ROLES.COMPANY_ADMIN],
  },
];

const adminSidebar = [
  {
    title: "Dashboard",
    path: ROUTES.dashboard,
    icon: AiOutlineHome,
  },
];

export default {
  [ROUTES.dashboard]: mainSidebar,
  [ROUTES.admin]: adminSidebar,
};
