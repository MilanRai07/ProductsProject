import { useEffect, useState } from 'react';
import { useGetBrandQuery } from '../services/BrandApi';


type BrandItem = {
    name: string;
    path: string;
};

const useGetBrandsNav = () => {
    const [brandList, setBrandList] = useState<BrandItem[]>([]);
    const { data } = useGetBrandQuery();

    useEffect(() => {
        if (data?.items) {
            const collectList = data.items.map((item) => ({
                name: item.brand_name,
                path: `/brands/${item.brand_name.toLowerCase()}`
            }));

            // Optionally add a static "All Brands" at the beginning
            setBrandList([{ name: 'All Brands', path: '/all-brands' }, ...collectList]);
        }
    }, [data]);

    return { brandList }
};

export default useGetBrandsNav;
