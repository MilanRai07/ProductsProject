import { createContext, useContext, useState, ReactNode } from "react";

type NavbarContextType = {
    active: string | null;
    setActive: React.Dispatch<React.SetStateAction<string | null>>;
};

// Create the context
const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

// Custom hook to use the Navbar context
export const useNavbar = () => {
    const context = useContext(NavbarContext);
    if (!context) {
        throw new Error("useNavbar must be used within a NavbarProvider");
    }
    return context;
};

// Provider component to wrap your application and provide the context
export const NavbarProvider = ({ children }: { children: ReactNode }) => {
    const [active, setActive] = useState<string | null>(null);

    return (
        <NavbarContext.Provider value={{ active, setActive }}>
            {children}
        </NavbarContext.Provider>
    );
};
