export type BlogPost = {
    id: number;
    title: string;
    slugs: string;
    category: number;
    tags: string;
    excerpt: string;
    content: string;
    featured_image: string;
    createdAt: string;
    updatedAt: string;
    blogCategory: {
        name: string;
    };
};

type Pagination = {
    currentPage: number;
    totalPages: number;
    limit: number;
    totalCount: number;
};

export type BlogApiResponseType = {
    message: string;
    items: BlogPost[];
    pagination: Pagination;
};

export type BlogsQueryParams = {
    page?: number;
    limit?: number;
    sort?: 'asc' | 'desc';
    category_title?: string;
    q?: string;
}