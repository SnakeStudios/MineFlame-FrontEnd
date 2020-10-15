import {userRouter} from 'next/router';
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";

export default () => {
    return (
        <>
            <div id="page-container">
                <NavBar/>


                <main className="mainBg" id="content-wrap">
                    My profile
                </main>


                <Footer/>
            </div>
        </>
    );
}

/**
 * Created by iSnakeBuzz_ at 10/10/2020
 */
