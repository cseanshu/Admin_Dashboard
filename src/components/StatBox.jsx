import { Box,Typography,useTheme } from "@mui/material";
import { tokans } from "../theme";
const StatBox=({tittle,subtitle,icon})=>{
 const theme=useTheme();
 const colors=tokans(theme.palette.mode);
 return (
    <Box width="100%" m="0 30px" >
     <Box display="flex" justifyContent="space-evenly" alignItems="center">
     <Box>
        {icon}
        <Typography varient="h4" fontWeight="bold" sx={{color:colors.grey[100]}}>
            {tittle}
        </Typography>
     </Box>
     </Box>
    <Box display="flex" justifyContent="space-evenly">
        <Typography varient="h5" sx={{color:colors.greenAccent[500]}}>
            {subtitle}
        </Typography>
    </Box>
    </Box>
 )
}
export default StatBox;