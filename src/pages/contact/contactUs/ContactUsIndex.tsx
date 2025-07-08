import HeroContactUs from "../../../components/heroComponent/HeroContactUs";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";
import GetInTouch from "./GetInTouch";

const ContactUsIndex: React.FC = () => {
    return (
        <main className="relative z-0">
            <HeroContactUs title='Contact Us' />
            <ContactInfo />
            {/* 0 for default for now */}
            <GetInTouch brand_id={1} />
            <ContactMap />
        </main>
    )
}
export default ContactUsIndex;