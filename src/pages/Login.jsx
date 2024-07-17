import React from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Login = () => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Login page</h2>
            <form>
                <MyInput type="text" placeholder="Login" />
                <MyInput type="password" placeholder="Password" />
                <MyButton type="submit">Login</MyButton>
            </form>
        </div>
    );
};

export default Login;