import { Box, Grid, Paper, Container, Typography, Divider, Hidden } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';

const Profile = ({ name, profilePic, profileClass }) => {
    return (
        <Grid container spacing={"3"} direction="row" justify="center" wrap="wrap" >
            <Grid item xs={9}>
                <Paper>
                    <div className="py-3">
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center">
                            <Avatar alt={name} src={profilePic} className={profileClass} />
                        </Box>
                        <Typography className="mt-2 text-center px-3" noWrap>
                            {name}
                        </Typography>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Profile;