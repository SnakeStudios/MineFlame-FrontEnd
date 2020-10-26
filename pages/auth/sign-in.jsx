import React, {useState} from 'react';
import withPublicRoute from "../../Components/Auth/withPublicRoute";

import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../../Components/Footer";
import {TextField, Button} from "@material-ui/core"
import Link from "next/link"
import ReCAPTCHA from "react-google-recaptcha";
import {getAPI} from '../../Components/Utils/EndPoints';
import cookieCutter from 'cookie-cutter'
import MLayout from "../../Components/MLayout";

export default withPublicRoute(({session}) => {
    const [password, setPassword] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [ga, setGa] = useState("none");

    function login() {
        console.log(ga)
        fetch(getAPI() + "auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password, ga, application: {
                    appVersion: navigator.appVersion, userAgent: navigator.userAgent, appName: navigator.appName
                }
            })
        }).then(value => value.json()).then(res => {
            console.log(res)
            if (res.token) {
                let date = new Date();
                cookieCutter.set('session', JSON.stringify(res), {
                    expires: new Date(date.getFullYear() + 1, date.getMonth(), date.getDay()),
                    path: '/'
                })

                setTimeout(() => {
                    // window.location.reload();
                }, 1000 * 5);
            } else {

            }
        }).catch(reason => {
            console.log("error", reason)
        })
    }

    return (
        <>
            <MLayout isAuth={session}>
                <main className="auth-layout">

                    <div className="auth-box">
                        <h1 className="text-left w-100 ">Sign in</h1>

                        <TextField id="email" className="w-100 mt-2" label="Email" default-value="aa"
                                   onChange={(e) => setEmail(e.target.value)}/>
                        <TextField id="password" type="password" className="w-100 mt-3" label="Password"
                                   onChange={(e) => setPassword(e.target.value)}/>

                        <div className="mt-4">
                            <ReCAPTCHA
                                sitekey="6LeO_NUZAAAAAPqAB3Kk935N9zQWSxyxwb6l40mC"
                                onChange={(e) => setGa(e)}
                                /*theme="dark"*/
                            />
                        </div>

                        < Button variant="contained" color="secondary" className="mt-4" onClick={login}>
                            Sign in
                        </Button>

                        <hr className="hr"/>

                        <Link href={"/auth/sign-up"} passHref>
                            <a>Need an Account? Click here</a>
                        </Link>

                    </div>
                </main>
            </MLayout>

            <style jsx>{`
                h1 {
                font-size: 40px;
                margin: 0px;
                }
            `}</style>

        </>
    );
});

/**
 * Created by iSnakeBuzz_ at 09/10/2020
 */
