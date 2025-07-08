import { Variants } from "framer-motion";

export interface DropdownType {
    lists: { name: string; path: string }[];
    images: string[];
}
export interface DropLoginType {
    fadeVariants: Variants
    showLogin: boolean
}
export interface CommonDropType {
    lists: { name: string, path: string }[],
    images: string[],
    fadeVariants: Variants,
}