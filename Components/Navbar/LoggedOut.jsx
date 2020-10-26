import {userRouter} from 'next/router';
import {Button} from "@material-ui/core";
import Link2 from "next/link";

export default () => {
    return (
        <Link2 href={"/auth/sign-in"} passHref>
            <Button className="text-white">LOGIN</Button>
        </Link2>
    );
}

/**
 * Created by iSnakeBuzz_ at 25/10/2020
 */
