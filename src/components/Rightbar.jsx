import React from "react";
import {
    Avatar,
    AvatarGroup,
    Box, Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemAvatar, ListItemText,
    Typography
} from "@mui/material";

const Rightbar = () => {
    return (
        <Box
            flex={2}
            p={2}
            sx={{display: {xs: "none", sm: "block"}}}
        >
            <Box position="fixed" width="500px">
                <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
                <AvatarGroup max={7}>
                    <Avatar alt="Remy Sharp"
                            src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <Avatar alt="Travis Howard"
                            src="https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <Avatar alt="Cindy Baker"
                            src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <Avatar alt="Agnes Walker"
                            src="https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <Avatar alt="Trevor Henderson"
                            src="https://images.pexels.com/photos/762527/pexels-photo-762527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <Avatar alt="Remy Sharp"
                            src="https://images.pexels.com/photos/7015865/pexels-photo-7015865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                    <Avatar alt="Travis Howard"
                            src="https://images.pexels.com/photos/2528362/pexels-photo-2528362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                    <Avatar alt="Cindy Baker"
                            src="https://images.pexels.com/photos/2905719/pexels-photo-2905719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                    <Avatar alt="Agnes Walker"
                            src="https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <Avatar alt="Trevor Henderson"
                            src="https://images.pexels.com/photos/762527/pexels-photo-762527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} mt={1} mb={1}>Random Pictures</Typography>
                <ImageList cols={4} gap={3}>
                    <ImageListItem>
                        <img
                            src="https://source.unsplash.com/random/300x300/?mountains"
                            alt="mountains"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://source.unsplash.com/random/300x300/?oceans"
                            alt="oceans"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://source.unsplash.com/random/300x300/?forests"
                            alt="forests"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://source.unsplash.com/random/300x300/?space"
                            alt="space"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://source.unsplash.com/random/300x300/?people"
                            alt="people"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://source.unsplash.com/random/300x300/?science"
                            alt="science"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://source.unsplash.com/random/300x300/?rivers"
                            alt="river"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://source.unsplash.com/random/300x300/?food"
                            alt="food"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://source.unsplash.com/random/300x300/?desert"
                            alt="desert"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://source.unsplash.com/random/300x300/?birds"
                            alt="birds"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://source.unsplash.com/random/300x300/?technology"
                            alt="technology"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://source.unsplash.com/random/300x300/?sports"
                            alt="sports"
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant="h6" fontWeight={100} mt={1}>Latest Conversations</Typography>
                <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random/?girl"/>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{display: 'inline'}}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://source.unsplash.com/random/?boy"/>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{display: 'inline'}}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://source.unsplash.com/random/?indian"/>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{display: 'inline'}}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default Rightbar;
