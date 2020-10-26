import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../themes/default';


// CSS IMPORTS
import '../styles/globals.css'
import '../styles/snake/Snake.css'
import '../styles/snake/Footer.css'
import '../styles/snake/Colors.css'
import '../styles/Bootstrap/bootstrap-grid.min.css'
import '../styles/Bootstrap/bootstrap-utilities.min.css'
import 'fontsource-roboto';

export default function MyApp(props) {
    const {Component, pageProps} = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>MineFlame Network</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
                <meta name="description" content="Join to mineflame network using mc.mineflame.net"/>

                <meta name="theme-color" content="#EA3727"/>
                <meta name="google" content="notranslate"/>

                <meta property="og:url" content="https://www.mineflame.net/"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="MineFlame Network"/>
                <meta property="og:image" content="https://i.imgur.com/CvcYSb4.png"/>
                <meta property="og:image:alt" content="MineFlame with fire in the background"/>
                <meta property="og:description" content="Join to MineFlame Network using play.mineflame.net"/>
                <meta property="og:site_name" content="MineFlame Network"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="article:author" content="iSnakeBuzz_"/>
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <Component {...pageProps} />
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};
