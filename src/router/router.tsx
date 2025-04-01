import {FC} from "react";
import {BrowserRouter, Route, Routes} from "react-router";
import {routeMap} from "./routeMap.tsx";

export const Router: FC = () => {
    return (
      <BrowserRouter>
        <Routes>
          {routeMap.map((route) => (
            <Route key={route.path} path={route.path} element={route.component}/>
          ))}
        </Routes>
      </BrowserRouter>
    )
}