import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../../Containers/Header';
import Footer from '../../Containers/Footer';
import Form from "../../Components/Form";
import './assets/style.scss';
import '../../Pages/Home/assets/style.scss';

const Login = () => {
    const navigate = useNavigate();
    const userToken = localStorage.getItem('userToken');

    useEffect(() => {
        if (userToken === null) {
            navigate('/login');
        } else {
            navigate('/user');
        }
    }, [userToken, navigate]);

    return (
        <section className="login">
            <Header isAuthenticated={false} />
            <section className="main bg_dark">
                <Form />
            </section>
            <Footer />
        </section>
    );
};

export default Login;