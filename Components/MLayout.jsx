import {userRouter} from 'next/router';
import NavBar from "./Navbar/NavBar";
import Footer from "./Footer";

export default ({children, isAuth}) => {
    return (
        <>
            <div id="page-container">
                <NavBar isAuth={isAuth}/>

                <div className="mainBg" id="content-wrap">
                    {children}
                    <Footer/>
                </div>

            </div>
        </>
    );
}

/**
 * Created by iSnakeBuzz_ at 25/10/2020
 */
