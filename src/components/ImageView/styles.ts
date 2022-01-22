import styled from "styled-components";

export const SectionImages = styled.section`
  width: 45%;
  display: flex;
  flex-direction: column;
`;

export const ImageMain = styled.div`
  width: 100%;
  display: flex;

  img {
    width: 80%;
    border-radius: 12px;
    transition: 600ms;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      opacity: 0.8;
      box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.6);
    }
  }
`;

export const ThumbnailImages = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  margin-top: 1rem;

  img {
    width: 85px;
    border-radius: 12px;
    cursor: pointer;
  }
`;
