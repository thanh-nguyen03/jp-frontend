import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

const useAuth = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const hasRole = useCallback(
    (role) => {
      if (!isAuthenticated) {
        return false;
      }

      return user.roles.map((role) => role.name).includes(role);
    },
    [isAuthenticated, user?.roles],
  );

  const hasAnyRole = useCallback(
    (roles) => {
      if (!isAuthenticated) {
        return false;
      }

      return user.roles.map((role) => role.name).some((role) => roles.includes(role));
    },
    [isAuthenticated, user?.roles],
  );

  const displayName = useMemo(() => (isAuthenticated ? user.fullName.trim() : null), [isAuthenticated, user]);
  const username = useMemo(() => (isAuthenticated ? user.username.trim() : null), [isAuthenticated, user]);

  return {
    isAuthenticated,
    hasRole,
    hasAnyRole,
    displayName,
    username,
  };
};

export default useAuth;
