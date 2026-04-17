import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import usePageTitle from "../hooks/usePageTitle"
import Departments from "./Department/Departments"
import Hero from "./Department/Hero"


const Department = () => {
    usePageTitle('Department');
    return(
        <div className="overflow-x-hidden">
            
            <Hero/>
            
            <Departments/>
            
            

        </div>
    )
}
export default Department