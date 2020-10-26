import React, {useState} from 'react';
import withPublicRoute from "../../Components/Auth/withPublicRoute";

import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../../Components/Footer";
import {TextField, Button, InputLabel, Select, MenuItem} from "@material-ui/core"
import Link from "next/link"
import ReCAPTCHA from "react-google-recaptcha";
import {getAPI} from '../../Components/Utils/EndPoints';
import cookieCutter from 'cookie-cutter'
import MLayout from "../../Components/MLayout";


export default withPublicRoute(({session}) => {

    const [email, setEmail] = useState(undefined);
    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [passwordConfirm, setPasswordConfirm] = useState(undefined);
    const [gender, setGender] = useState("SELECT ONE");
    const [ga, setGa] = useState("none");

    function signUp() {
        if (password !== passwordConfirm) return;

        fetch(getAPI() + "auth/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password, gender, username, ga, application: {
                    appVersion: navigator.appVersion, userAgent: navigator.userAgent, appName: navigator.appName
                }
            })
        }).then(res => res.json()).then(res => {
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
        });
    }

    return (
        <>
            <MLayout isAuth={session}>
                <main className="auth-layout">

                    <div className="auth-box">
                        <h1 className="text-left w-100 ">Sign up</h1>

                        <TextField className="w-100 mt-2" label="Username"
                                   onChange={(e) => setUsername(e.target.value)}/>
                        <TextField className="w-100 mt-3" label="Email" onChange={(e) => setEmail(e.target.value)}/>
                        <TextField type="password" className="w-100 mt-3" label="Password"
                                   onChange={(e) => setPassword(e.target.value)}/>
                        <TextField type="password" className="w-100 mt-3" label="Password Confirmation"
                                   onChange={(e) => setPasswordConfirm(e.target.value)}/>

                        <div className="w-100 mt-4">
                            <div className="row justify-content-start mx-auto  w-100">
                                <InputLabel id="demo-simple-select-label" className="text-left">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}>

                                    <MenuItem value={"SELECT ONE"} disabled>SELECT ONE</MenuItem>
                                    <MenuItem value={"MAN"}>MAN </MenuItem>
                                    <MenuItem value={"WOMAN"}>WOMAN</MenuItem>
                                    <MenuItem value={"OTHER"}>OTHER</MenuItem>
                                </Select>
                            </div>
                        </div>

                        <div className="mt-4">
                            <ReCAPTCHA
                                sitekey="6LeO_NUZAAAAAPqAB3Kk935N9zQWSxyxwb6l40mC"
                                onChange={(e) => setGa(e)}
                                /*theme="dark"*/
                            />
                        </div>

                        <Button variant="contained" color="secondary" className="mt-3" onClick={signUp}>
                            Sign up
                        </Button>

                        <hr className="hr"/>

                        <Link href={"/auth/sign-in"} passHref>
                            <a>Already have one? Click here</a>
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
})


/**/

/**
 * Created by iSnakeBuzz_ at 09/10/2020
 */
