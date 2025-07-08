export type GalleryItem = {
    id: number;
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

export type GalleryApiResponse = {
    message: string;
    items: GalleryItem[];
    pagination: Pagination;
};
export type GalleryQueryType = {
    currentPage?: number,
    limit?: number
}