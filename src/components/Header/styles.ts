import styled from "styled-components";

export const HeaderMain = styled.header`
  background-color: #fff;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(212, 211, 207);
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const CartAndAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  button {
    background-color: transparent;
    border: 0;
    outline: none;
  }

  img:nth-child(2) {
    width: 40px;
  }
`;
