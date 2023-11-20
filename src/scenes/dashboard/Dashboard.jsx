import { Box,Typography,useTheme,Button,IconButton } from "@mui/material";
import { tokans } from "../../theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import WarningIcon from '@mui/icons-material/Warning';
import PersonIcon from '@mui/icons-material/Person';
import TrafficIcon from '@mui/icons-material/Traffic';
import StatBox from "../../components/StatBox";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart.jsx";
const Dashboard=()=>{
    const theme=useTheme()
    const colors=tokans(theme.palette.mode)
    return <Box m="20px">
    <Box display="flex" justifyContent="space-between">
    <Box>
        <Header tittle="DASHBOARD" subtittle="WELCOME TO DASHBOARD"/>
       </Box>
       <Box>
        <Button
          sx={{backgroundColor:colors.blueAccent[700],color:colors.grey[100],fontSize:"14px",fontWeight:"bold",padding:"10px 10px"}}>
          <DownloadOutlinedIcon sx={{mr:"8px"}}/>
          DownLoad Report
        </Button>
       </Box>
    </Box>
    {/* Grids and charts */}
    <Box display="grid" gridTemplateColumns="repeat(12,1fr)" gap="20px" gridAutoRows="140px">
     {/* Row 1 */}
     
     <Box gridColumn="span 3" backgroundColor={colors.primary[400]}
       display="flex"
       alignItems="center" 
       justifyContent="center">
       <StatBox
        tittle="45,678"
        subtitle="Total user"
        icon={<PersonIcon sx={{color:colors.greenAccent[600],fontSize:"26px"}}/>}
        sx={{
            [theme.breakpoints.down("sm")]: {
              gridColumn: "span 6",
            },
          }}
       />
     </Box>
     <Box gridColumn="span 3" backgroundColor={colors.primary[400]}
       display="flex"
       alignItems="center" 
       justifyContent="center">
       <StatBox
        tittle="12345"
        subtitle="Traffic Recived"
        icon={<TrafficIcon sx={{color:colors.greenAccent[600],fontSize:"26px"}}/>}
        sx={{
            [theme.breakpoints.down("sm")]: {
              gridColumn: "span 6",
            },
          }}
       />
     </Box>
     <Box gridColumn="span 3" backgroundColor={colors.primary[400]}
       display="flex"
       alignItems="center" 
       justifyContent="center">
       <StatBox
        tittle="1200+"
        subtitle="Total Risky Traffic"
        icon={<WarningIcon sx={{color:colors.greenAccent[600],fontSize:"26px"}}/>}
        padding="30px"
        sx={{
            [theme.breakpoints.down("sm")]: {
              gridColumn: "span 8",
            },
          }}
       />
     </Box>
     <Box gridColumn="span 3" backgroundColor={colors.primary[400]}
       display="flex"
       alignItems="center" 
       justifyContent="center">
       <StatBox
        tittle="600+"
        subtitle="Upcoming Risky traffic"
        icon={<NotificationImportantIcon sx={{color:colors.greenAccent[600],fontSize:"26px"}}/>}
        sx={{
            [theme.breakpoints.down("sm")]: {
              gridColumn: "span 6",
            },
          }}
       />
     </Box>
    
    {/* Chartsand Risky */}
     {/* ROW 2 */}
     <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          sx={{
            [theme.breakpoints.down("sm")]: {
              gridColumn: "span 12",
            },
          }}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h4"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Risk Analysis of users
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                1200+
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          sx={{
            [theme.breakpoints.down("sm")]: {
              gridColumn: "span 12",
            },
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
            sx={{
            [theme.breakpoints.down("sm")]: {
              gridColumn: "span 12",
            },
          }}
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Users
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px" width="70px" textAlign="center" textTransform="capitalize"
              >
                {transaction.risk}
              </Box>
            </Box>
          ))}
        </Box>
         
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          sx={{
            [theme.breakpoints.down("sm")]: {
              gridColumn: "span 12",
            },
          }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Total Risk Analysis of Teams
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
          sx={{
            [theme.breakpoints.down("sm")]: {
              gridColumn: "span 12",
            },
          }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>



        </Box>

    </Box>
}
export default Dashboard; 