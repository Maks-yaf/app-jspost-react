import React from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import {privateRoutes, publicRoutes} from "../router";
import Login from "../pages/Login";

const AppRouter = () => {
    const isAuth = true;
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map((route, index) =>
                    <Route
                        element={<route.element/>}
                        path={route.path}
                        key={index}
                    />
                )}
                <Route path="*" element={<Posts/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route, index) =>
                    <Route
                        element={<route.element/>}
                        path={route.path}
                        key={index}
                    />
                )}
                <Route path="*" element={<Login/>}/>
            </Routes>
    );
};

export default AppRouter;