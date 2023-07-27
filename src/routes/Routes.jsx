import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from '../components/Header';
import Screen from '../components/Screen';
import Footer from '../components/Footer';

import '../styles/bases/_bases.scss';

function Roads(){
    return(
        <BrowserRouter>
            <div className="main-wrapper">
            <Screen>
                <Header/>
            </Screen>
                <Routes>
                    <Route path="/"/>               
                    <Route path="/"/>               
                    <Route path="/"/>               
                    <Route path="/"/>               
                    <Route path="/"/> 
                </Routes>
            <Footer/> 
            <div className="main-wrapper__shadow-wall"></div>             
            </div>
        </BrowserRouter>
    )
}

export default Roads;