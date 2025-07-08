import HeroAssets from "../../../../components/heroComponent/HeroAssets"
import HeroAsset from '../../../../assets/images/heroImages/heroAssets.webp';
import { lazy, Suspense } from "react"
import { useParams } from "react-router";
const SubAssetContainer = lazy(() => import('../../../../components/container/sub-asset-container/SubAssetContainer'))

const CommonAssetsContainerIndex: React.FC = () => {
    const { slugs } = useParams();
    const decodeBrandName = decodeURIComponent(slugs || '');

    const capitalizeFirstLetter = (str: string) => str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <main>
            <HeroAssets image={HeroAsset} title={capitalizeFirstLetter(decodeBrandName)} />
            <Suspense fallback={<div className="w-full min-h-48 flex justify-center Loading">Loading...</div>}>
                <SubAssetContainer name={decodeBrandName} />
            </Suspense>
        </main>
    )
}
export default CommonAssetsContainerIndex;