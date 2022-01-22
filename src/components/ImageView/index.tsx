import { useState } from "react";
import { ImagesArray } from "../../helper/imagesArray";
import { SectionImages, ImageMain, ThumbnailImages } from "./styles";

import product1Img from "../../assets/image-product-1.jpg";
import product2Img from "../../assets/image-product-2.jpg";
import product3Img from "../../assets/image-product-3.jpg";
import product4Img from "../../assets/image-product-4.jpg";

const ImageView = () => {
  const [exchangeImage, setExchangeImage] = useState(product1Img);

  function handleSwapImage(imgPath: string) {
    let imgSrc;

    if (imgPath === product1Img) {
      imgSrc = product1Img;
    } else if (imgPath === product2Img) {
      imgSrc = product2Img;
    } else if (imgPath === product3Img) {
      imgSrc = product3Img;
    } else {
      imgSrc = product4Img;
    }

    setExchangeImage(imgSrc);
  }

  return (
    <SectionImages>
      <ImageMain>
        <img src={exchangeImage} alt="Imagem Produto Principal" />
      </ImageMain>
      <ThumbnailImages>
        {ImagesArray.map((img) => (
          <img
            onClick={() => {
              handleSwapImage(img.pathDestination);
            }}
            key={img.id}
            src={img.src}
            alt="Imagem Thumbnail"
          />
        ))}
      </ThumbnailImages>
    </SectionImages>
  );
};

export default ImageView;
