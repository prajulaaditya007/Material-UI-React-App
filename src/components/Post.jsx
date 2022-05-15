import React from 'react';
import {
    Avatar, Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";


const Post = () => {

    return (
        <Box>
            <Card sx={{margin: "5px"}}>
                <CardHeader
                    avatar={
                        <Avatar
                            src="https://cdn.vox-cdn.com/thumbor/LMbBeUUwtWh4kn_lNjYRlRO3f4I=/99x0:1179x810/1400x1050/filters:focal(99x0:1179x810):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/46094226/Jon_snow.0.jpg"
                            aria-label="user">
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title="Jon Snow"
                    subheader="May 15, 2022"
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
            <Card sx={{margin: "5px"}}>
                <CardHeader
                    avatar={
                        <Avatar
                            src="data:image/jpeg;base64,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"
                            aria-label="user">
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title="Daenerys Targaryen"
                    subheader="May 15, 2022"
                />
                <CardMedia
                    component="img"
                    // height="20%"
                    image="https://images.pexels.com/photos/34223/mont-saint-michel-france-normandy-europe.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            <Card sx={{margin: "5px"}}>
                <CardHeader
                    avatar={
                        <Avatar
                            src="https://sites.rutgers.edu/acal51/wp-content/uploads/sites/291/2017/12/3859882-6269102771-Bruce.jpg"
                            aria-label="user">
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title="Bruce Wayne"
                    subheader="May 15, 2022"
                />
                <CardMedia
                    component="img"
                    // height="20%"
                    image="https://images.pexels.com/photos/10282494/pexels-photo-10282494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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

}
export default Post;
