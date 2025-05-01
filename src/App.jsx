import Navbar from './Navbar';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import {HomeIcon} from "lucide-react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Person2Icon from '@mui/icons-material/Person2';
import SplitButton from './SplitButton';
import {useState} from "react";
import FloatingWindow from "./FloatingWindow.jsx";


function App() {
    const [isOpen, setIsOpen] = useState(false);



    return(<div>
        <SplitButton options={['new profile', 'profile','another profile']} onCreateMenu={setIsOpen}/>
        <FloatingWindow isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div style={{backgroundColor:'aqua', width:'100px', height:'100px'}}></div>
        </FloatingWindow>

        <p>{isOpen?'true':'false'}</p>
    </div>);
}

export default App;
