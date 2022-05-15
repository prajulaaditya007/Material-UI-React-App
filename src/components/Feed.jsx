import React from "react";
import {
    Avatar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia, Checkbox,
    IconButton,
    Typography
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import {Favorite, FavoriteBorder} from "@mui/icons-material";

const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor: "red"}} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title="Night Sky in Mountain Ranges"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    // height="20%"
                    image="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="mountains"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Lovely snowy mountains in the middle of the night, the starry night.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color: "#ff471a"}}/>}/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    );
};

export default Feed;
