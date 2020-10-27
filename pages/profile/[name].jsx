import { useRouter } from 'next/router';
import isAuth from "../../Components/Auth/isAuth";
import MLayout from "../../Components/MLayout"
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper, Container } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    profilePic: {
        width: theme.spacing(9),
        height: theme.spacing(9)
    },
}));

export default isAuth(({ session }) => {

    const router = useRouter();
    const classes = useStyles();
    const { name } = router.query;

    return (
        <MLayout isAuth={session}>
            <main className="text-center mt-5">

                <Container>
                    <Grid container spacing={"3"}>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}>xs=4</Paper>
                        </Grid>

                        <Grid item xs={8}>
                            <Paper className={classes.paper}>xs=8</Paper>
                        </Grid>
                    </Grid>

                    <div className="row mx-auto my-auto justify-content-center">
                        <div className="col col-auto">

                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center">
                                <Avatar alt={name} src="" className={classes.profilePic} />
                            </Box>
                            <span className="text-center mt-2">{name}</span>
                        </div>
                        <div className="col col-auto">

                        </div>
                    </div>

                </Container>
            </main>

        </MLayout>
    );
})

/**
 * Created by iSnakeBuzz_ at 10/10/2020
 */
