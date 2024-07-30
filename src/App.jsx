import './css/styles.css';
import './css/link.css';
import Header from "./components/Header";
import NavBar from './components/NavBar';
import About from './components/About';
import DrawerAppBar from './components/Newnavbar';
import Experiance from './components/experiance';
import "./App.css";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <Header />
      <About />  
      <Experiance/>
    </div>
  )
}

export default App
