import { DefaultSize } from "../defaultSIze/defaultSize";
import { StyledHeader, StyledNav, StyledNavUl } from "./Styledheader";

const Header = () => {
    return (
        <StyledHeader>
            <DefaultSize>
                <StyledNav>
                    <h1>Logo</h1>
                    <StyledNavUl>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </StyledNavUl>
                </StyledNav>
            </DefaultSize>
        </StyledHeader>
    );
};

export default Header;
