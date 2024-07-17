import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import {privateRoutes, publicRoutes} from "../router";
import Login from "../pages/Login";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth, setIsAuth}= useContext(AuthContext);
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