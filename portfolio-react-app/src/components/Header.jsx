import Logo from "./header/Logo.jsx";
import MenuList from "./commons/MenuList.jsx";
import ToggleButton from "./header/ToggleButton.jsx";

export default function Header({data}) {
    const {menus = [] } = data || {};
    // const {menus} = data;
    
    return (
        <header class="header">
            <Logo   img="/images/favicon.ico"
                    alt="header-logo"
                    style="header-logo-img"
                    title="Judy"
            />
            <MenuList menus={menus} style="header-menu open" />
            <ToggleButton />
        </header>
    )
}