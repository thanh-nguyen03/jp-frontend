import { AiOutlineHome } from "react-icons/ai";
import { GoOrganization } from "react-icons/go";
import { ImProfile } from "react-icons/im";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";
import ROLES from "src/constants/roles";
import ROUTES from "src/constants/routes";

const mainSidebar = [
  {
    title: "Home",
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
    icon: RiAdminFill,
    roles: [ROLES.ADMIN, ROLES.COMPANY_ADMIN],
  },
];

const adminSidebar = [
  {
    title: "Home",
    path: ROUTES.dashboard,
    icon: IoArrowBackCircleSharp,
  },
  {
    title: "Admin Dashboard",
    path: ROUTES.admin,
    icon: RiAdminFill,
  },
  {
    title: "Companies",
    path: ROUTES.adminManageCompanies,
    icon: GoOrganization,
  },
];

export default {
  [ROUTES.dashboard]: mainSidebar,
  [ROUTES.admin]: adminSidebar,
};
