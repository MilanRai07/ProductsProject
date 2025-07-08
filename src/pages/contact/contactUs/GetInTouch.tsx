import GetTouchForm from "../../../components/forms/GetTouchForm";
import PillTitle from "../../../components/titles/PillTitle";
type props = {
    brand_id: number
}
const GetInTouch: React.FC<props> = ({ brand_id }) => {
    return (
        <section className="w-full flex flex-col items-center p-[70px]">
            <div className="mt-3 mb-14">
                <PillTitle titleName="Get In Touch" />
            </div>
            <GetTouchForm brand_id={brand_id} />
        </section>
    )
}
export default GetInTouch;