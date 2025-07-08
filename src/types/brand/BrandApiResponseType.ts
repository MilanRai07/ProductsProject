import { Pagination } from "../product/ApiResponseTypes";

export interface BrandApiResposeType {
    message: string,
    items: Brand[],
    pagination: Pagination
}

//getting infomration of brands
interface Brand {
    id: number;
    brand_name: string;
    slugs: string;
    author: number;
    brand_details: string;
    createdAt: string;
    updatedAt: string;
    brand_logo: string;
}

//for getting products filtering with brands id

export interface ProductsByBrandApiResponse {
    messagae: string,
    items: BrandItemCategory[]
}

export type ProductsFromBrand = {
    id: number;
    title: string;
    slugs: string;
    author_id: number;
    category_id: number;
    tags: string[]; // Assuming the string is an array of tags
    description: string;
    content: string;
    specification: string;
    featured_image: string;
    images: string[]; // Array of image URLs
    createdAt: string;
    updatedAt: string;
};

export type BrandItemCategory = {
    id: number;
    product_id: number;
    brand_id: number;
    created_at: string;
    updated_at: string;
    product: ProductsFromBrand;
};