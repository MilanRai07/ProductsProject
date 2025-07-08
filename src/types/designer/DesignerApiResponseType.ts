import { Pagination } from "../product/ApiResponseTypes";

export type DesignerGalleryItem = {
    id: number;
    image_url: string;
};

export type DesignerProfile = {
    id: number;
    fullname: string;
    location: string;
    description: string;
    createdAt: string;  // Can be changed to Date if needed
    updatedAt: string;  // Can be changed to Date if needed
    designer_gallery: DesignerGalleryItem[];
    image_url: string;
    socialmedia: string;
};

// for whole query
export interface DesignerApiResponseType {
    items: DesignerProfile[];
    message: string;
    pagination: Pagination;
}