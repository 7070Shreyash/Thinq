import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import FirstPage from "./scenes/firstPage";
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import QuesPage from "./scenes/quesPage";
import UserPage from "./scenes/userPage";
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<FirstPage/>} />
            <Route path = "/auth" element = {<LoginPage/>}/>
            <Route path = "/home" element = {<HomePage />} />
            <Route path = "/user/:userId" element = { <UserPage/>} />
            <Route path = "/ques/:quesId" element = { <QuesPage/> } />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;