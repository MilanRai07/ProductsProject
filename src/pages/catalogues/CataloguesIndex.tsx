import { lazy, Suspense } from "react";
import HeroCatalogues from "../../components/heroComponent/HeroCatalogues";
const ShowCatalogues = lazy(() => import('./ShowCatalogues'));

const CataloguesIndex: React.FC = () => {
    return (
        <main>
            <HeroCatalogues />
            <Suspense fallback={<div className="w-full min-h-48 flex justify-center Loading text-white/60">Loading...</div>}>
                <ShowCatalogues />
            </Suspense>
        </main>
    )
}
export default CataloguesIndex;