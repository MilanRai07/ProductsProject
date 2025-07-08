import { useGetPopUpQuery } from "../services/PopUpApi";

const usePopAvailable = () => {
    let currentPage = 2;
    let limit = 1;
    const { data, isFetching, error } = useGetPopUpQuery({
        currentPage,
        limit,
    });

    if (isFetching || !data?.items || data.items.length === 0) {
        return false;
    } else {
        return true;
    }
};

export default usePopAvailable;