import {
    Avatar,
    Box,
    Fab,
    Modal,
    styled,
    Tooltip,
    Typography,
    TextField,
    Stack,
    ButtonGroup,
    Button
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, {useState} from "react";
import {DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CodeIcon from '@mui/icons-material/Code';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})

const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <Box>
            <Tooltip onClick={(e) => setOpen(true)} title="post"
                     sx={{position: 'fixed', bottom: 20, left: {xs: "calc(50% - 25px)", md: 30}}}>
                <Fab color="primary" aria-label="add">
                    <AddIcon/>
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} backgroundColor={"background.default"} color={"text.primary"}
                     borderRadius={5} p={2}>
                    <Typography variant="h6" textAlign="center">Create Post</Typography>
                    <UserBox>
                        <Avatar alt="Remy Sharp"
                                src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                sx={{width: 30, height: 30}}
                        />
                        <Typography variant="span" fontWeight={500}>Jon Snow</Typography>
                    </UserBox>
                    <TextField
                        sx={{width: "100%"}}
                        id="standard-multiline-static"
                        label="What's on your mind?"
                        multiline
                        rows={3}
                        defaultValue=""
                        variant="standard"
                    />
                    <Stack direction="row" gap={2} mt={2} mb={3}>
                        <EmojiEmotions/>
                        <Image color="secondary"/>
                        <VideoCameraBack color="success"/>
                        <PersonAdd color="error"/>
                        <AddLocationAltIcon color="primary"/>
                        <CodeIcon/>
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button
                            sx={{width: "100px"}}
                        ><DateRange/></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </Box>
    )
}

export default Add;