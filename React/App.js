import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState, useContext} from "react";
import MainContext from "./context/MainContext";

import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import AddPhotoPage from './pages/AddPhotoPage';
import TestPage from './pages/TestPage';



function App() {

    const [user, setUser] = useState(null)
    const [users, setUsers] = useState([])
    const [myphotos, setMyphotos] = useState([])
    
    


    return (
        <div className="App">

            <MainContext.Provider value={{ user, setUser,  myphotos, setMyphotos }}>

                <BrowserRouter>

                    <Routes>
                        <Route path="/" element={<AuthPage setUser={setUser} />}/>
                        <Route path="/profile" element={<ProfilePage user={user}/>}/>
                        <Route path="/addphoto" element={<AddPhotoPage />}/>
                        <Route path="/test" element={<TestPage />}/>
                    

                    </Routes>

                </BrowserRouter>

            </MainContext.Provider>




        </div>
    );
}

export default App;
