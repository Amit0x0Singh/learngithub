import { useState } from "react"; 
import FilterFormPopup from "./component/Filter/filter";

function App() {
    const [isPopupOpen, setPopupOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setPopupOpen(true)}>Open Filter</button>
            <FilterFormPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
}

export default App;
