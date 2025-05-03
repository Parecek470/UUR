import SplitButton from './SplitButton';
import {useState} from "react";
import BasicModal from "./BasicModal.jsx";
import NestedList from "./NestedList.jsx";


function App() {
    const [isOpen, setIsOpen] = useState(false);




    return(<div>
        <SplitButton options={['new profile', 'profile','another profile']} onCreateMenu={setIsOpen}/>
        {isOpen&&<BasicModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <NestedList/>
        </BasicModal>}

        <p>{isOpen?'true':'false'}</p>
    </div>);
}

export default App;
