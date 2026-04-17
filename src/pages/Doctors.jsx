import usePageTitle from "../hooks/usePageTitle";
import DoctorsList from "./Doctors/DoctorsList"
import Hero from "./Doctors/Hero"

const Doctors = () => {
    usePageTitle('Doctors');
    return (
        <div className="overflow-x-hidden">
            <Hero/>
            <DoctorsList/>
        </div>
    )
}
export default Doctors