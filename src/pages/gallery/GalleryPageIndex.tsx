import { lazy, Suspense } from "react"
import HeroGallery from "../../components/heroComponent/HeroGallery"

const GalleryImages = lazy(() => import('./GalleryImages'))

const GalleryPageIndex: React.FC = () => {
    return (
        <main className="bg-white w-full h-auto">
            <HeroGallery />
            <Suspense>
                <GalleryImages />
            </Suspense>
        </main>
    )
}
export default GalleryPageIndex