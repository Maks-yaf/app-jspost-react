import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth", 'true');
    }

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Login page</h2>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Login" />
                <MyInput type="password" placeholder="Password" />
                <MyButton type="submit">Login</MyButton>
            </form>
        </div>
    );
};

export default Login;