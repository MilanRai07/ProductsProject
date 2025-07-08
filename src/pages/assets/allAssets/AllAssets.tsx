import HeroAssets from "../../../components/heroComponent/HeroAssets";
import HeroAsset from '../../../assets/images/heroImages/heroAssets.webp';
import { lazy, Suspense } from "react";
const ShowAssets = lazy(() => import('./ShowAssets'))

const AllAssets: React.FC = () => {
    return (
        <main>
            <HeroAssets image={HeroAsset} title='Assets' />
            <Suspense fallback={<div className="Loading flex w-full justify-center min-h-44 text-white/50">Loading...</div>}>
                <ShowAssets />
            </Suspense>
        </main>
    )
}
export default AllAssets;