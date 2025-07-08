export type CatalogItem = {
    id: number;
    title: string;
    featured_image: string;
    catalogs: Catalog[]; // Changed "catalogs" to PascalCase
};

export type Catalog = { // Changed "catalogs" to "Catalog"
    id: number;
    image_url: string;
};

export type Pagination = {
    currentPage: number;
    totalPages: number;
    limit: number;
    totalCount: number;
};

export type CatalogApiResponseType = {
    message: string;
    items: CatalogItem[];
    pagination: Pagination;
};

export interface CatalogQueryArguments {
    currentPage?: number;
    limit?: number;
}

export interface CategoryCatalogQueryArguments {
    id: number | null;
    currentPage?: number;
    limit?: number;
}

export interface CatalogSearchQueryArguments {
    param: string;
    currentPage?: number;
    limit?: number;
}
