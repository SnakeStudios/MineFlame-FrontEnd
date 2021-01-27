import UserProfile from "../../Components/Auth/UserProfile";
import MLayout from "../../Components/MLayout"
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper, Container, Typography, Divider, Hidden } from '@material-ui/core'
import CommentBox from '../../Components/Profile/CommentBox';
import Profile from '../../Components/Mobile/Profile';

const useStyles = makeStyles((theme) => ({
    profilePic: {
        width: theme.spacing(9),
        height: theme.spacing(9)
    },
    dividerColor: {
        backgroundColor: "#0093de"
    }
}));

export default UserProfile(({ session, profileInfo }) => {

    const { username, banned, imageURL, comments, description, socialMedia } = profileInfo;
    const { Discord, Twitter, YouTube } = socialMedia;
    const classes = useStyles();

    return (
        <MLayout isAuth={session}>
            <main className="mt-5">

                <Container>

                    <Hidden mdUp>
                        <Profile name={username} profilePic={imageURL} profileClass={classes.profilePic} />
                    </Hidden>

                    <Grid container spacing={3} direction="row" justify="center" wrap="wrap" >

                        <Hidden smDown>
                            <Grid item xs={2}>
                                <Paper>
                                    <div className="py-3">
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center">
                                            <Avatar alt={username} src={imageURL} className={classes.profilePic} />
                                        </Box>
                                        <Typography className="mt-2 text-center px-3" noWrap>
                                            {username}
                                        </Typography>
                                    </div>
                                </Paper>

                                <Paper className="mt-3">
                                    <div className="py-3">

                                    </div>
                                </Paper>
                            </Grid>
                        </Hidden>



                        <Grid item xs={9}>
                            <Paper>
                                <div className="py-3">
                                    <Typography variant="h6" component="h1" className="pb-2 px-3">Description</Typography>
                                    <Divider className={classes.dividerColor} />
                                    <div className="pt-3 px-3">{description}</div>
                                </div>
                            </Paper>

                            <CommentBox isAuth={session} />


                        </Grid>
                    </Grid>

                </Container>
            </main>

        </MLayout>
    );
})

/**
 * Created by iSnakeBuzz_ at 10/10/2020
 */
