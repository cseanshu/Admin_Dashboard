import './App.css'
import Topbar from './scenes/global/topBar';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline,ThemeProvider } from '@mui/material'
import Dashboard from './scenes/dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import SideBar from './scenes/global/Sidebar';
import Team from './scenes/team/Team';
import Contacts from './scenes/contacts/Contacts';
import Form from './scenes/form/Form';
import Bar from './scenes/bar/Bar';
import Line from './scenes/line/Line';
import Pie from './scenes/pie/Pie';
import GeographyChart from './components/GeographyChart.jsx';
function App() {
  const[theme,colorMode]=useMode();
return (
  <ColorModeContext.Provider value={colorMode}>
  <ThemeProvider theme={theme}>
  <CssBaseline/>
  <div className="app">
  <SideBar/>
    <main className="content" style={{marginLeft:"74px"}}>
    <Topbar/>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/team" element={<Team/>} />
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/form' element={<Form/>}/>
       <Route path='/bar' element={<Bar/>}/>
       <Route path='/line' element={<Line/>}/>
       <Route path='/pie' element={<Pie/>}/>
       <Route path='/geography' element={<GeographyChart/>}/>
    </Routes>
    </main>
  </div>
  </ThemeProvider>
  </ColorModeContext.Provider>
)
}

export default App
