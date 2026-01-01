"use client";

import { IconAdjustmentsHorizontal } from "@/assets/icons";
import BotaoIcone from "@/components/BotaoIcone";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import { Photo } from "@/types/AirbnbDados";

interface NavegacaoAbasHorizontalProps {
  icons: Photo[];
}

const NavegacaoAbasHorizontal = (props: NavegacaoAbasHorizontalProps) => {
  const icones = props.icons;

  return (
    <div className="flex flex-row items-center ">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 9 },
        }}
      >
        {icones.map((icone, indice) => (
          <SwiperSlide key={indice}>
            <Link
              href={icone.url}
              className="flex flex-col items-center hover:text-red-600"
            >
              <Image
                src={icone.source}
                alt={icone.description}
                width={24}
                height={24}
              />
              <span className="text-sm">{icone.description}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <BotaoIcone
        icone={
          <IconAdjustmentsHorizontal aria-label="Ícone de usuário" size={20} />
        }
      >
        Filtros
      </BotaoIcone>
    </div>
  );
};

export default NavegacaoAbasHorizontal;
