import { lazy } from "react";
import Loadable from "src/components/Loadable";

// Auth
const Login = Loadable(lazy(() => import("src/pages/auth/Login")));
const Register = Loadable(lazy(() => import("src/pages/auth/Register")));

const MainDashboard = Loadable(lazy(() => import("src/pages/main/Dashboard")));
const RecruiterDashboard = Loadable(lazy(() => import("src/pages/recruiter/Dashboard")));
const AdminDashboard = Loadable(lazy(() => import("src/pages/admin/Dashboard")));

export { Login, Register, MainDashboard, RecruiterDashboard, AdminDashboard };
