import useGetAssetsNav from "../customHook/useGetAssetsNav";
import useGetBrandsNav from "../customHook/useGetBrandsNav";

const useFooterList = () => {
    const { AssetList } = useGetAssetsNav();
    const { brandList } = useGetBrandsNav();

    return {
        about: {
            title: 'About',
            lists: [
                { name: 'About us', path: '/about-us' },
                { name: 'Awards and Certificate', path: '/awards-certificates' },
                { name: 'Blogs', path: '/blogs' },
            ]
        },
        assets: {
            title: 'Assets',
            lists: AssetList.slice(0, 4),
        },
        solutions: {
            title: 'Brands',
            lists: brandList.slice(0, 4),
        },
        support: {
            title: 'Others',
            lists: [
                { name: 'Contact Us', path: '/contactus' },
                { name: 'Designers', path: '/collections' },
                { name: 'Catalogues', path: '/catalogues' },
                { name: 'Gallery', path: '/gallery' }
            ]
        },
    };
};

export default useFooterList;