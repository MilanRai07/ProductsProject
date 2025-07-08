import { useEffect, useState } from 'react';
import { useGetCategoryQuery } from '../services/CategoryApi';


type BrandItem = {
    name: string;
    path: string;
};

const useGetAssetsNav = () => {
    const [AssetList, setAssetList] = useState<BrandItem[]>([]);
    const { data } = useGetCategoryQuery();

    useEffect(() => {
        if (data?.items) {
            const collectList = data.items
                .filter((item) => item.name.toLowerCase() !== 'event')
                .map((item) => ({
                    name: item.name,
                    path: `/assets/${item.name.toLowerCase()}`
                }));

            // Optionally add a static "All Brands" at the beginning
            setAssetList([{ name: 'All Assets', path: '/all-assets' }, ...collectList]);
        }
    }, [data]);

    return { AssetList }
};

export default useGetAssetsNav;
