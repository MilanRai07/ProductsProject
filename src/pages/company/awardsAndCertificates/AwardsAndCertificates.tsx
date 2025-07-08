import { lazy, Suspense } from "react";
import HeroAwards from "../../../components/heroComponent/HeroAwards";
const AwardsContainer = lazy(() => import('./AwardsContainer'))

const AwardsAndCertificates: React.FC = () => {
    return (
        <main>
            <HeroAwards />
            <section className="p-[75px] bg-white text-black sm:p-[60px] xs:p-[50px]">
                <Suspense fallback={<div className="w-full flex justify-center min-h-44 Loading">Loading Awards...</div>}>
                    <AwardsContainer />
                </Suspense>
            </section>
        </main>
    )
}
export default AwardsAndCertificates;