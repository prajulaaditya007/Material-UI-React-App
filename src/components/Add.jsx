import {Box, Fab, Tooltip} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Add = () => {
    return (
        <Box>
            <Tooltip title="post" sx={{position: 'fixed', bottom: 20, left: {xs: "calc(50% - 25px)", md: 30}}}>
                <Fab color="primary" aria-label="add">
                    <AddIcon/>
                </Fab>
            </Tooltip>
        </Box>
    )
}

export default Add;