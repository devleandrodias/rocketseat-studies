import Image from "next/future/image";
import { useKeenSlider } from "keen-slider/react";
import { HomeContainer, Product } from "../styles/pages/home";

import shirt1 from "../assets/shirts/Shirt1.png";
import shirt2 from "../assets/shirts/Shirt2.png";
import shirt3 from "../assets/shirts/Shirt3.png";

import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Z</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt2} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Z</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Z</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Z</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}