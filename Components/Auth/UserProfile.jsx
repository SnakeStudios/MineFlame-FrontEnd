import React from 'react';
import Router from 'next/router';
import Cookies from 'universal-cookie';
import { getAPI } from '../Utils/EndPoints'

/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{session: any}}
 */
const checkUserAuthentication = (cookieString) => {
    const cookies = new Cookies(cookieString);
    let session = cookies.get("session");
    console.log(session)
    return { session: session, debug: true };
};

const checkUserProfile = (profileName) => {
    let { name } = profileName;
    let resp = fetch(getAPI() + `/profile/user/${name}`).then(res => res.json());
    return resp;
}

export default function UserProfile(WrappedComponent) {
    const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;
    hocComponent.getInitialProps = async ({ req, res, query }) => {
        const isAuth = await checkUserAuthentication(req ? req.headers.cookie : document.cookie);
        const profile = await checkUserProfile(query);
        console.log("Profile:", profile)
        if (profile?.error) {
            if (res) {
                res?.writeHead(302, {
                    Location: '/',
                });
                res?.end();
            } else {
                Router.replace('/');
            }
        }

        if (WrappedComponent.getInitialProps) {
            const wrappedProps = await WrappedComponent.getInitialProps(isAuth);
            return { ...wrappedProps, isAuth };
        }

        return { session: isAuth, profileInfo: profile };
    };

    return hocComponent;
};
