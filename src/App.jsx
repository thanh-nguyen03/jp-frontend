import { Box, useToast } from "@chakra-ui/react";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import ROLES from "src/constants/roles";
import router from "src/constants/router.jsx";
import ROUTES from "src/constants/routes";
import useAuth from "src/hooks/useAuth";
import { setCredential } from "src/redux/state/reducers/authReducer";

const App = () => {
  const [isDecoded, setIsDecoded] = useState(false);
  const { isAuthenticated, hasAnyRole } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const decodedToken = accessToken ? jwtDecode(accessToken) : null;
    const user = decodedToken?.user;
    if (user) {
      dispatch(setCredential({ user }));
    }
    setIsDecoded(true);
  }, [dispatch]);

  useEffect(() => {
    if (!isDecoded) return;
    if (pathname.includes(ROUTES.admin) && !hasAnyRole(ROLES.ADMIN, ROLES.COMPANY_ADMIN)) {
      navigate(ROUTES.dashboard);
      toast({
        title: "Forbidden",
        description: "You don't have permission to access this page.",
        status: "error",
      });
    }

    if (pathname.includes(ROUTES.auth) && isAuthenticated) {
      navigate(ROUTES.dashboard);
      toast({
        title: "Error",
        description: "You are already logged in.",
        status: "warning",
      });
    }
  }, [hasAnyRole, isAuthenticated, isDecoded, navigate, pathname, toast]);

  return <Box>{useRoutes(router)}</Box>;
};

export default App;
