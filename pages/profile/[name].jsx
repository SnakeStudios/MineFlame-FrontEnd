import {useRouter} from 'next/router';
import NavBar from "../../Components/Navbar/NavBar";
import Footer from "../../Components/Footer";

export default () => {

    const router = useRouter();
    const {name} = router.query;

    return (
        <>
            <div id="page-container">
                <NavBar/>


                <main className="mainBg" id="content-wrap">
                    {name}
                </main>


                <Footer/>
            </div>
        </>
    );
}

/**
 * Created by iSnakeBuzz_ at 10/10/2020
 */
