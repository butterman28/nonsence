import './css/styles.css';
import './css/link.css';
import Header from "./components/Header";
import NavBar from './components/NavBar';
import About from './components/About';
import DrawerAppBar from './components/Newnavbar';
import Experiance from './components/experiance';
import Contact from './components/contact';
import "./App.css";
import {Divider} from '@mui/material';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <Header />
      <About />  
      <Experiance/>
      <Divider sx={{
          borderColor: '#CCD6F6', // Change the color
          borderWidth: '1px', // Change the thickness
          my: 2, // Margin top and bottom
        }}></Divider>
      <Contact/>
    </div>

  )
}

export default App
