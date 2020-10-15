import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link, Button, Hidden} from "@material-ui/core";
import Link2 from "next/link";
import NavMenu from "./NavMenu";

const classes = makeStyles((theme) => ({
    root: {
        color: "#fff"
    }
}));

export default () => {

    const [state, setState] = React.useState({
        openedMenu: false
    });

    const toggleMenu = (bol = false) => {
        setState({
            openedMenu: bol
        });
    };

    return (
        <>
            <div className="headBanner image">
                <div className="headBannerBlur">

                    <div className="headBannerText">

                        <div className="container">
                            <div className="row mx-auto w-100 justify-content-center">
                                <div className="col col-auto my-auto">
                                    <div className=" font-weight-bold playersWeight">1,420</div>
                                    <div>PLAYING</div>
                                </div>
                                <div className="col col-lg-7">
                                    <img className="" src="/images/mineflame.logo.svg" alt="MineFlame Logo" height="150px"/>
                                </div>
                                <div className="col col-auto my-auto">
                                    <div className="font-weight-bold playersWeight">14,857</div>
                                    <div>DISCORD</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <div className="navBar">
                {/*<div>Inicio</div>*/}

                <div className="container">
                    <div className="row mx-auto w-100 h-100 align-items-center">

                        <Hidden smUp>
                            <div className="col col-auto ">
                                <IconButton edge="start" color="inherit" aria-label="menu"
                                            onClick={() => toggleMenu(true)}>
                                    <MenuIcon/>
                                </IconButton>
                            </div>
                        </Hidden>

                        <Hidden xsDown>
                            <div className="col col-auto">
                                <Link2 href={"/"} passHref>
                                    <Link href="#" className="link" color="inherit">
                                        HOme
                                    </Link>
                                </Link2>
                            </div>

                            <div className="col col-auto">
                                <Link2 href={"/forum"} passHref>
                                    <Link href="#" className="link" color="inherit">
                                        forum
                                    </Link>
                                </Link2>
                            </div>

                            <div className="col col-auto">
                                <Link2 href={"/help"} passHref>
                                    <Link href="#" className="link" color="inherit">
                                        HELP
                                    </Link>
                                </Link2>
                            </div>

                            <div className="col col-auto">
                                <Link2 href={"/api/redirects/discord"} passHref>
                                    <Link href="#" target="_blank" className="link" color="inherit">
                                        discord
                                    </Link>
                                </Link2>
                            </div>

                        </Hidden>


                        <div className="col col-auto ml-auto">
                            <Link2 href={"/auth/sign-in"} passHref>
                                <Button className="text-white">LOGIN</Button>
                            </Link2>
                        </div>

                    </div>
                </div>
            </div>

            <NavMenu open={state.openedMenu} onClose={() => toggleMenu(false)}/>

            <style jsx>{`
                .image {
                    background-image: url("/images/2020-09-17_04.51.46.webp");
                }
           `}</style>

        </>
    );
}

/**
 * Created by iSnakeBuzz_ at 08/10/2020
 */
