import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

const useAuth = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const hasRole = useCallback(
    (role) => {
      if (!isAuthenticated) {
        return false;
      }

      return user.role === role;
    },
    [isAuthenticated, user?.role],
  );

  const hasAnyRole = useCallback(
    (...roles) => {
      if (!isAuthenticated) {
        return false;
      }

      return roles.some((role) => user.role === role);
    },
    [isAuthenticated, user?.role],
  );

  const displayName = useMemo(
    () => (isAuthenticated ? `${user.firstName} ${user.lastName}` : null),
    [isAuthenticated, user],
  );
  const email = useMemo(() => (isAuthenticated ? user.email.trim() : null), [isAuthenticated, user]);

  return {
    isAuthenticated,
    hasRole,
    hasAnyRole,
    displayName,
    email,
  };
};

export default useAuth;
