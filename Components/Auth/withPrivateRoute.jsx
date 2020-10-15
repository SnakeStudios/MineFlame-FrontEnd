import React from 'react';
import Router from 'next/router';

const login = '/auth/sign-in?redirected=true'; // Define your login route address.

/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */
const checkUserAuthentication = () => {
    if (localStorage.getItem("session") == null) {
        return {auth: null};
    }

    let data = JSON.parse(localStorage.getItem("session"));

    return {auth: data}; // change null to { isAdmin: true } for test it.

};

export default WrappedComponent => {
    const hocComponent = ({...props}) => <WrappedComponent {...props} />;

    hocComponent.getInitialProps = async ({res}) => {
        const userAuth = await checkUserAuthentication();

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

        return {userAuth};
    };

    return hocComponent;
};
