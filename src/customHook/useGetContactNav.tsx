import { useEffect, useState } from 'react';
import { useGetBrandQuery } from '../services/BrandApi';


type BrandItem = {
    name: string;
    path: string;
};

const useGetContactNav = () => {
    const [contactList, setContactList] = useState<BrandItem[]>([]);
    const { data } = useGetBrandQuery();

    useEffect(() => {
        if (data?.items) {
            const collectList = data.items.map((item) => ({
                name: item.brand_name,
                path: `/contactus/${item.brand_name.toLowerCase()}`
            }));

            // Optionally add a static "All Brands" at the beginning
            setContactList([{ name: 'Contact Us', path: '/contactus' }, ...collectList]);
        }
    }, [data]);

    return { contactList }
};

export default useGetContactNav;
