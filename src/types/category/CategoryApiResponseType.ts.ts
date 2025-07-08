import { Pagination } from "../product/ApiResponseTypes";

export interface CategoryItems {
    id: number;
    name: string;
    slugs: string;
    author: number;
    parent_id: number | null;
    createdAt: string;
    updatedAt: string;
}
export interface CategoryApiResponseType {
    message: string,
    items: CategoryItems[],
    pagination: Pagination
}