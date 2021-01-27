import { Paper, InputAdornment, Avatar, TextField, Button, Box, Grid } from "@material-ui/core/";
import { makeStyles } from '@material-ui/core/styles';
import { Send } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    profilePic: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    },
    dividerColor: {
        backgroundColor: "#0093de"
    }
}));

const CommentBox = ({ isAuth }) => {
    const classes = useStyles();
    const { session } = isAuth;

    if (session) {
        const { username, imageURL } = session;
        return (
            <Paper className="mt-4">
                <div className="py-2 px-1">

                    <Grid
                        container
                        justify="center"
                        spacing={2}
                        alignItems="center"
                    >
                        <Grid item sm={10} xs={7} >
                            <TextField
                                className="w-100"
                                id="input-with-icon-textfield"
                                label="Write something..."
                                multiline
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Avatar alt={username} src={imageURL} className={classes.profilePic} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>

                        <Grid item>

                            <Button
                                className="w-100"
                                variant="contained"
                                color="primary"
                                endIcon={<Send />}
                            >
                                Send
                                </Button>

                        </Grid>

                    </Grid>


                </div>
            </Paper>
        );
    } else return null;

};

export default CommentBox;