import { NavLink } from "react-router-dom";

type FooterListProps = {
    title: string,
    lists: { name: string, path: string }[]
}
const FooterLists: React.FC<FooterListProps> = ({ title, lists }) => {
    return (
        <div>
            <h1 className="font-extrabold text-[20px] mlg:text-[18px] mlg:leading-[27px] leading-[30px] mb-3 ">{title}</h1>
            <ul className="Footer-List">
                {lists.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item.path}>
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default FooterLists;