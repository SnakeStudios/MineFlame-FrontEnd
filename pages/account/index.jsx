import {userRouter} from 'next/router';
import withPrivateRoute from "../../Components/Auth/withPrivateRoute";
import MLayout from "../../Components/MLayout";

export default withPrivateRoute(({session}) => {
    return (
        <MLayout isAuth={session}>
            <main>
                Hello world
            </main>
        </MLayout>
    );
})

/**
 * Created by iSnakeBuzz_ at 25/10/2020
 */
