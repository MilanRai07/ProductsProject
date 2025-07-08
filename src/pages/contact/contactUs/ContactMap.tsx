import { lazy, Suspense } from "react";
const CompanyMap = lazy(() => import('../../../components/map/CompanyMap'))

const ContactMap: React.FC = () => {
    const position: [number, number] = [27.673925, 85.335454]; // Coordinates for Warsa
    return (
        <section className="my-[90px] xl:my-[40px] md:!my-[30px] px-5 h-[500px]">
            <Suspense fallback={<div className="w-full min-h-[200px] flex justify-center">Location is Loading...</div>}>
                <CompanyMap position={position} />
            </Suspense>
        </section>
    )
}
export default ContactMap;