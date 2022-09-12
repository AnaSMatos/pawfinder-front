import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./UserContext/"
import SignIn from "./components/Home/"
import SignUp from "./components/SignUp/"
import Feed from "./components/Feed/";
import CreatePost from "./components/CreatePost";

import "./assets/reset.css"
import "./assets/index.css"


function App() {
    const [page, setPage] = useState("")

    return (
        <UserContext.Provider value={{page, setPage}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/feed" element={<Feed/>}/>
                    <Route path="/create" element={<CreatePost/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;