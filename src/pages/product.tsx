import {
  ProductContent,
  SectionProductInformation,
  ProductPrice,
  ProductAddCart,
  ButtonAddCart,
} from "../styles/product";

import ImageView from "../components/ImageView";
import cartIcon from "../assets/icons/icon-cart-white.svg";

const Product = () => {
  return (
    <ProductContent>
      <ImageView />
      <SectionProductInformation>
        <p>SNEAKER COMPANY</p>
        <h1>
          Fall Limited Edtion
          <br />
          Sneakers
        </h1>
        <span>
          These low-profile sneakers are you perfect casual wear
          <br />
          companion. Featuring a durable rubber outer sole, they'll
          <br />
          withstand everything the weather can offer.
        </span>
        <ProductPrice>
          <h3>
            $125.00 <strong>50%</strong>
          </h3>
          <h5>$250.00</h5>
        </ProductPrice>
        <ProductAddCart>
          <button>-</button>
          <p>0</p>
          <button>+</button>
          <ButtonAddCart>
            <img src={cartIcon} alt="Ícone carrinho" />
            Add to cart
          </ButtonAddCart>
        </ProductAddCart>
      </SectionProductInformation>
    </ProductContent>
  );
};

export default Product;
