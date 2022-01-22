import { HeaderMain, Nav, MenuNavigation, CartAndAvatar } from "./styles";
import logoImg from "../../assets/logo.svg";
import cartIcon from "../../assets/icons/icon-cart.svg";
import avatarImg from "../../assets/image-avatar.png";
import LinkNavigation from "../LinkNavigation";

const Header = () => {
  return (
    <HeaderMain>
      <Nav>
        <MenuNavigation>
          <img src={logoImg} alt="Logo sneakers" />
          <LinkNavigation />
        </MenuNavigation>
        <CartAndAvatar>
          <button>
            <img src={cartIcon} alt="Ícone carrinho" />
          </button>
          <img src={avatarImg} alt="Avatar" />
        </CartAndAvatar>
      </Nav>
    </HeaderMain>
  );
};

export default Header;
