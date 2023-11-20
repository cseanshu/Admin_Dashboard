import { Typography,Box,useTheme } from "@mui/material";
import { tokans } from "../theme";

const Header=({tittle,subtittle})=>{
    const theme=useTheme()
    const colors=tokans(theme.palette.mode)
return <Box mb="30px">
    <Typography varient="h2" color={colors.grey[100]} fontWeight="bold" sx={{mb:"5px"}}>
    {tittle}
    </Typography>
    <Typography varient="h5" color={colors.greenAccent[400]}>
    {subtittle}
    </Typography>
</Box>
}
export default Header;
