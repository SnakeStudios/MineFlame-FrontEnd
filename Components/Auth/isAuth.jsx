import React from 'react';
import Cookies from 'universal-cookie';

/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{session: any}}
 */
const checkUserAuthentication = (cookieString) => {
    const cookies = new Cookies(cookieString);
    let session = cookies.get("session");
    return {session: session, debug: true};

};

export default function isAuth(WrappedComponent) {
    const hocComponent = ({...props}) => <WrappedComponent {...props} />;
    hocComponent.getInitialProps = async ({req, res}) => {
        const isAuth = await checkUserAuthentication(req ? req.headers.cookie : document.cookie);

        if (WrappedComponent.getInitialProps) {
            const wrappedProps = await WrappedComponent.getInitialProps(isAuth);
            return {...wrappedProps, isAuth};
        }

        // console.log("isAuth:", isAuth)

        return {session: isAuth};
    };

    return hocComponent;
};
