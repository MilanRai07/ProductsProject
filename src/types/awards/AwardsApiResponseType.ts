export type AwardsItem = {
    id: number;
    title: string;
    slugs: string;
    description: string;
    image_url: string;
    date_of_achivement: string;
    createdAt: string;
    updatedAt: string;
};

type Pagination = {
    currentPage: number;
    totalPages: number;
    limit: number;
    totalCount: number;
};

export type AwardsApiResponseType = {
    message: string;
    items: AwardsItem[];
    pagination: Pagination;
};

export type AwardsQueryParams = {
    page?: number;
    limit?: number;
    sort?: 'asc' | 'desc';
    q?: string;
}