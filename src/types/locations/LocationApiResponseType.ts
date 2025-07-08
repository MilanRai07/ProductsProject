import { Pagination } from "../product/ApiResponseTypes";

export type Timing = {
    opening: string;
    closing: string;
};

export type Coordinates = {
    lat: string;
    long: string;
};

export type LocationBrands = {
    brand_name: string;
};

export type LocationDetails = {
    id: number;
    brand_id: number;
    province: string;
    municipality: string;
    district: string;
    address: string;
    phone_no: string;
    timing: Timing;
    coordinates: Coordinates;
    createdAt: string;
    updatedAt: string;
    locationBrands: LocationBrands;
};

export type LocationApiResponseType = {
    items: LocationDetails[];
    message: string;
    pagination: Pagination;
}
export interface LocationQueryArgument {
    currentPage: number,
    limit: number,
    brand: number
}