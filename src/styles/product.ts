import styled from "styled-components";

export const ProductContent = styled.div`
  width: 100%;
  max-width: 1100px;
  height: calc(100% - 10vh);
  margin: 3rem auto;
  display: flex;
`;

export const SectionProductInformation = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3rem 4rem;

  p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    color: hsl(26, 100%, 55%);
    font-weight: bold;
  }

  h1 {
    font-size: 1.7rem;
    margin-bottom: 2rem;
  }

  span {
    font-size: 1rem;
    line-height: 26px;
    margin-bottom: 1.5rem;
    color: hsl(219, 9%, 45%);
    opacity: 0.8;
  }
`;

export const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.2rem;
    display: flex;
    align-items: flex-start;
    gap: 15px;

    strong {
      color: hsl(26, 100%, 55%);
      font-size: 0.8rem;
    }
  }

  h5 {
    font-size: 0.8rem;
    color: hsl(219, 9%, 45%);
    opacity: 0.8;
    text-decoration: line-through;
  }
`;

export const ProductAddCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 1rem;

  button:nth-child(1),
  button:nth-child(3) {
    background-color: transparent;
    border: 0;
    outline: none;
    padding: 10px 20px;
    color: hsl(26, 100%, 55%);
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
  }

  p {
    font-size: 1rem;
    color: black;
    margin: 0;
  }
`;

export const ButtonAddCart = styled.button`
  background-color: hsl(26, 100%, 55%);
  width: 200px;
  padding: 15px 30px;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 15px;
  color: #fff;
  border: 0;
  outline: none;
  cursor: pointer;
`;
