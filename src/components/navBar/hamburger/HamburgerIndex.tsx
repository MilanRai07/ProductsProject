import { NavLink } from "react-router-dom";
import { ReactComponent as Cross } from "../../../assets/svg/cross.svg";
import { ReactComponent as Chevron } from "../../../assets/svg/chevronLeft.svg";
import { NavbarItem } from "../../../localData/NavbarItem";
import { navitem } from "../../../types/navbar/NavitemTypes";
import { Dispatch, SetStateAction } from "react";

type props = {
  setShowHamMenu: Dispatch<SetStateAction<boolean>>;
  setShowHam: Dispatch<SetStateAction<boolean>>;
  setActive: (value: string | null) => void;
  setShowContactHamMenu: Dispatch<SetStateAction<boolean>>;
};

const HamBurgerIndex: React.FC<props> = ({
  setShowHamMenu,
  setActive,
  setShowHam,
  setShowContactHamMenu,
}) => {

  const itemClicked = (name: string) => {
    setShowHamMenu(true);
    setShowHam(false);
    setActive(name);
    if (name === "Contact") {
      setShowContactHamMenu(true);
    }
    // if (name === "Collections" || name === "Catalogues") {
        if (name === "Collections" || name === "Gallery") {
      setShowHamMenu(false);
    }
  };

  return (
    <div className="bg-white border-[0.5px] border-black/50 rounded-[15px] w-full py-6 px-7 h-[500px] sm-d:h-[475px] xs:h-[450px] text-black ">
      <div className="flex w-full justify-end mb-5">
        <Cross
          className="w-[30px] h-[30px] stroke-black"
          onClick={() => setShowHam(false)}
        />
      </div>
      <ul className="Flex-Col justify-between list-none h-[350px] sm-d:h-[320px] xs:h-[300px] mb-5">
        {NavbarItem.map((item: navitem, index) => {
          const { name, path } = item;
          return (
            <li
              key={index}
              className="flex w-full justify-between items-center border-b-[0.5px] border-b-black/50 pb-2"
              onClick={() => itemClicked(name)}
            >
              <NavLink to={path} className="Nav-Item xs:text-[12px] text-black">
                {name}
              </NavLink>
              {(name === "Company" || name === "Brands") && (
                <div className="border-l-[0.3px] border-l-black pl-3">
                  <Chevron className="h-5 w-5 rotate-180 " />
                </div>
              )}
            </li>
          );
        })}
        <li
          className="flex w-full justify-between items-center Nav-Item text-black  border-b-[0.5px] border-b-black/50 pb-2 "
          onClick={() => itemClicked("Contact")}
        >
          <p className="xs:text-[12px]">Contact</p>
          <div className="border-l-[0.3px] border-l-black pl-3">
            <Chevron className="h-5 w-5 rotate-180 " />
          </div>
        </li>
      </ul>
      <div className="flex justify-center items-center">
        {/* Conditionally render buttons based on user login status */}
        <a
          href="https://account.stlnpl.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-[150px] h-[39px] text-sm leading-[21px] font-bold bg-Golden text-white py-2 rounded-md hover:bg-DarkGolden transition">
            My Account
          </button>
        </a>

      </div>
    </div>
  );
};

export default HamBurgerIndex;
