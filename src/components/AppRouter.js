import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";

const AppRouter = () => {
  const {user} = useContext(Context)
  console.log(user)
  return (
      <Routes>
        {user.isAuth &&
            authRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={Component} exact></Route>
            ))}
        {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={Component} exact></Route>
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  );
};

export default AppRouter;
