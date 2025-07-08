
export type ApiDescription = {
    title: string;
    discount: number;
    subTitle: string;
    btnText: string;
    btnPath: string;
};

export type PopUpApiItem = {
    id: number;
    title: string;
    description: ApiDescription;
    isPinned: number;
    image_url: string;
    createdAt: string;
    updatedAt: string;
};

export type Pagination = {
    currentPage: number;
    totalPages: number;
    limit: number;
    totalCount: number;
};

export type PopUpApiResponseType = {
    message: string;
    items: PopUpApiItem[];
    pagination: Pagination;
};

export type PopUpQuery = {
    currentPage?: number,
    limit?: number
}