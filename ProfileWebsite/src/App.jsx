import './App.scss'
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import MainPage from "./pages/main-page.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Routes>
                        <Route path={"/"} element={<MainPage/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App
