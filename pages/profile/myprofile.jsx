import {userRouter} from 'next/router';
import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../../Components/Footer";
import MLayout from "../../Components/MLayout";
import withPrivateRoute from "../../Components/Auth/withPrivateRoute";

export default withPrivateRoute(({session}) => {
    return (
        <>
            <MLayout isAuth={session}>
                <main>
                    My profile
                </main>
            </MLayout>
        </>
    );
});

/**
 * Created by iSnakeBuzz_ at 10/10/2020
 */
