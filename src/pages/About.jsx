import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import usePageTitle from "../hooks/usePageTitle"
import Appointment from "./About/Appointment"
import Hero from "./About/Hero"
import Principles from "./About/Principles"
import Story from "./About/Story"

const About = () => {
    usePageTitle('About');
    return (
        <div className="overfloe-x-hidden">
            
            <Hero/>
            <Story/>
            <Principles/>
            <Appointment/>
            
            
        </div>
    )
}
export default About