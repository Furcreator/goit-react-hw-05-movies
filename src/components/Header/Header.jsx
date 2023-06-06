import { HeaderContainer, NavLinkStyled, NavStyled } from './Header.styled';

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        {/* <div>Logo</div> */}
        <NavStyled>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </NavStyled>
      </HeaderContainer>
    </header>
  );
};
export default Header;
