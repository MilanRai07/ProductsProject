import { Dispatch, SetStateAction } from "react";

export interface NavbarListProps {
    setActive: (value: string | null) => void;
    showDrop: boolean;
    setShowDrop: Dispatch<SetStateAction<boolean>>;
    active: string | null;
    setShowLogin: Dispatch<SetStateAction<boolean>>;
    setShowContact: Dispatch<SetStateAction<boolean>>;
    showContact: boolean;
    prevActive: string | null;
    setPrevActive: Dispatch<SetStateAction<string | null>>
}