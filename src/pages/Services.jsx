import ServicesList from "./Services/Services"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero from "./Services/Hero"
import MainServices from "./Services/MainServices"
import usePageTitle from "../hooks/usePageTitle"
const Services = () => {
    usePageTitle('Services');
    return (

        <div className="">
           
            <Hero/>
            <MainServices/>
            <ServicesList />
            
            

        </div>
    )
}
export default Services