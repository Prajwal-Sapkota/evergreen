import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Appointment from "./About/Appointment"
import Hero from "./About/Hero"
import Principles from "./About/Principles"
import Story from "./About/Story"

const About = () => {
    return (
        <div className="overfloe-x-hidden">
            <Navbar/>
            <Hero/>
            <Story/>
            <Principles/>
            <Appointment/>
            <Footer/>
            
        </div>
    )
}
export default About