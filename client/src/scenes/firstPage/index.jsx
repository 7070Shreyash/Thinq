import Featured from "../../components/featured";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Questions from "../../components/questions";
import "./index.css"

const FirstPage = () => {
    return (
        <div className="wrapper"> 
        <Navbar/>
        <Featured/>
        <Questions/>
        <Footer/>
        </div>
    )
}

export default FirstPage;