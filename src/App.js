import Labs from "./labs"
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Added the redirect from the main page so that /labs also works! Hope this is ok. */}
                <Route index path="/*" element={<Labs/>}/>
                <Route path="/labs" element={<Labs/>}/>
                <Route path="/hello" element={<HelloWorld/>}/>
                <Route path="/tuiter/*" element={<Tuiter/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
