// for whole query
export interface ApiResponseType {
    items: ProductTypes[];
    message: string;
    pagination: Pagination;
}

//for products in item
export interface ProductTypes {
    id: number;
    title: string;
    slugs: string;
    author_id: number;
    category_id: number;
    content: string;
    description: string;
    featured_image: string;
    images: string[];
    specification: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
    productColors: ProductColorType[] | []
}

//for pagination
export interface Pagination {
    currentPage: number;
    totalPages: number;
    limit: number;
    totalCount: number;
}

//for productCOlorTypes
export interface ProductColorType {
    id: number;
    product_id: number;
    color_id: number;
    color_image: string;
    price_adjustment: string;
    stock: number;
    created_at: string;
    updated_at: string;
    color: ColorType;
}

//for colors
export interface ColorType {
    id: number;
    name: string;
    hex_code: string;
}
//for the query argument, for products, pagination
export interface ProductsQueryArguments {
    currentPage?: number,
    limit?: number
}
export interface CategoryQueryArguments {
    id: number | null,
    currentPage?: number,
    limit?: number
}
export interface SearchQueryArguments {
    param: string,
    currentPage?: number,
    limit?: number,
    id?: number,
    sortOrder?: string
}
