import HeroAboutUs from "../../../components/heroComponent/HeroAboutUs";
import ContactSection from "./ContactSection";
import Missions from "./Missions";
import Welcome from "./Welcome";

const AboutUsIndex: React.FC = () => {
    return (
        <main>
            <HeroAboutUs />
            <Welcome />
            <Missions />
            <ContactSection />
        </main>
    )
}
export default AboutUsIndex;