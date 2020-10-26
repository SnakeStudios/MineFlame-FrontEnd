import React from "react";
import NavBar from '../Components/Navbar/NavBar';
import Footer from "../Components/Footer";
import MLayout from "../Components/MLayout";
import isAuth from "../Components/Auth/isAuth";

export default isAuth(({session}) => {
    return (
        <>
            <MLayout isAuth={session}>
                <main className="text-center mt-3">
                    Home
                </main>
            </MLayout>
        </>
    )
});
