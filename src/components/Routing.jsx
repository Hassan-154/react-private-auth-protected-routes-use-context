import React, { useContext, useMemo } from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import UserContext from '../context/userContext';
import { authRoutes, nonAuthRoutes } from '../Routes/Routes';

const Routing = () => {

  const { token } = useContext(UserContext);

  const routes = useMemo(() => {
    return token ? authRoutes : nonAuthRoutes
  }, [token])

  return (
    <RouterProvider router={routes} />
  );
};

export default Routing;
