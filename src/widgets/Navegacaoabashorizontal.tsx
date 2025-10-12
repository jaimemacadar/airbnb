"use client"

import { IconAdjustmentsHorizontal } from '@/assets/icons'
import BotaoIcone from '@/components/BotaoIcone'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

const NavegacaoAbasHorizontal =() => {
    return (
      <div className='flex flex-row items-center '>
        
        <Swiper 
        spaceBetween={10} 
        slidesPerView={3}
        breakpoints={{
            640: {slidesPerView: 3},
            768: {slidesPerView: 4},
            1024: {slidesPerView: 6},
            1280: {slidesPerView: 9},
        }}
        >
            <SwiperSlide>Acomodações</SwiperSlide>
        </Swiper>

        <BotaoIcone 
        icone={(
          <IconAdjustmentsHorizontal
          aria-label="Ícone de usuário" 
          size={20} 
          />
       )}>
       Filtros
       </BotaoIcone>
      </div>
    )
  }

  export default NavegacaoAbasHorizontal