import { lazy, Suspense } from "react"
import HeroBrands from "../../../components/heroComponent/HeroBrands"
import { useGetBrandQuery } from "../../../services/BrandApi"
const BrandsContainer = lazy(() => import('../../../components/container/brands-container/BrandsContainer'))

const AllBrandsIndex: React.FC = () => {
    const { data, isFetching } = useGetBrandQuery();
    return (
        <main className="bg-white text-black">
            <HeroBrands />
            {
                isFetching ? (
                    <div className="Loading flex justify-center">
                        Datas are loading please wait for a while...
                    </div>
                )
                    :
                    data?.items.map((item) => {
                        return (
                            <div key={item.id}>
                                <Suspense fallback={<div className="Loading w-full flex justify-center min-h-[200px]">Loading brand details...</div>}>
                                    <BrandsContainer
                                        title={item.brand_name}
                                        detail={item.brand_details}
                                        id={item.id}
                                    />
                                </Suspense>
                            </div>
                        )
                    })
            }
        </main>
    )
}
export default AllBrandsIndex