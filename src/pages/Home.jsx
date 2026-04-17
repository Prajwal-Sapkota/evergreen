import About from "../components/About"
import Blog from "../components/Blogs"
import Choose from "../components/Choose"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Plans from "../components/Plans"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"

const Home = () => {
    return(
        <div className="overflow-x-hidden">
           
            <Hero/>
            <About/>
            <Services/>
            <Choose/>
            <Plans/>
            <Testimonials/>
            <Blog/>
            
        </div>
    )
}
export default Home