import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header tittle="Pictorial Representation of Risk" subtittle="High-Threat Analysis" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;