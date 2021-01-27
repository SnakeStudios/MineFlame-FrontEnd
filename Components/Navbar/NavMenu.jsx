import React, {Component} from 'react';
import {Drawer, Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {
    Home, Forum, Help, NavigateBefore
} from '@material-ui/icons';
import Link from "next/link";
import { Discord } from 'mdi-material-ui'

export default class NavMenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Drawer anchor="left" open={this.props.open} onClose={this.props.onClose}>
                    <div className="mainMenu" role="presentation">

                        <ListItem button onClick={this.props.onClose}>
                            <ListItemText primary={"FlameNetwork"} secondary={"Official Website."}/>
                            <ListItemIcon> <NavigateBefore/> </ListItemIcon>
                        </ListItem>

                        <Divider/>

                        <List>
                            <Link href={"/"} passHref>
                                <ListItem button>
                                    <ListItemIcon> <Home/> </ListItemIcon>
                                    <ListItemText primary={"Home"}/>
                                </ListItem>
                            </Link>

                            <Link href={"/forum"} passHref>
                                <ListItem button>
                                    <ListItemIcon> <Forum/> </ListItemIcon>
                                    <ListItemText primary={"Forum"}/>
                                </ListItem>
                            </Link>

                            <Link href={"/help"} passHref>
                                <ListItem button>
                                    <ListItemIcon> <Help/> </ListItemIcon>
                                    <ListItemText primary={"HELP"}/>
                                </ListItem>
                            </Link>

                            <Link href={"/api/redirects/discord"} passHref>
                                <ListItem button>
                                    <ListItemIcon>
                                        <Discord/>
                                    </ListItemIcon>
                                    <ListItemText primary={"DISCORD"}/>
                                </ListItem>
                            </Link>

                        </List>

                    </div>
                </Drawer>
            </React.Fragment>
        );
    }

}

/**
 * Created by iSnakeBuzz_ on 28/09/2020
 */
