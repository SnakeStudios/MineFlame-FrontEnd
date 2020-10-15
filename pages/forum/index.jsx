import {userRouter} from 'next/router';
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";

export default () => {
    return (
        <>
            <div id="page-container">
                <NavBar/>


                <main className="mainBg text-center" id="content-wrap">
                    Forum Page
                </main>


                <Footer/>
            </div>
        </>
    );
}

/**
 * Created by iSnakeBuzz_ at 09/10/2020
 */
