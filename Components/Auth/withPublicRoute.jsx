import React from 'react';
import Router from 'next/router';
import Cookies from 'universal-cookie';

const login = '/'; // Define your login route address.

/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: boolean}}
 */
const checkUserAuthentication = (cookieString) => {
    const cookies = new Cookies(cookieString);
    let session = cookies.get("session");
    let logged = (typeof session === 'undefined');
    /*console.log(session, logged)*/
    return {auth: logged, session:{session: session, debug: false}};
};

export default function withPublicRoute(WrappedComponent) {
    const hocComponent = ({...props}) => <WrappedComponent {...props} />;

    hocComponent.getInitialProps = async ({req, res}) => {
        const userAuth = await checkUserAuthentication(req ? req.headers.cookie : document.cookie);

        // Are you an authorized user or not?
        if (!userAuth?.auth) {
            // Handle server-side and client-side rendering.
            if (res) {
                res?.writeHead(302, {
                    Location: login,
                });
                res?.end();
            } else {
                Router.replace(login);
            }
        } else if (WrappedComponent.getInitialProps) {
            const wrappedProps = await WrappedComponent.getInitialProps(userAuth);
            return {...wrappedProps, userAuth};
        }

        return userAuth;
    };


    return hocComponent;
};
