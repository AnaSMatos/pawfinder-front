import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/Home/"
import SignUp from "./components/SignUp/"

import "./assets/reset.css"
import "./assets/index.css"


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;