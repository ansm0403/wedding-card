import 'swiper/css'
import './swiper.css'
import classNames from "classnames/bind"
import {Swiper, SwiperSlide} from "swiper/react";
import styles from './ImageViewer.module.scss'
import CloseButton from '../icons/CloseButton';
import Dimmed from '../shared/Dimmed';

const cx = classNames.bind(styles);

export default function ImageViewer({
    images, 
    open = false,
    selectedIdx,
    onClose,
} : {
    images : string[] 
    open : boolean
    selectedIdx : number
    onClose : () => void
}) {
    if(!open) {
        return null
    }
    return (
        <Dimmed> 
            <CloseButton className = {cx('close-button')} onClose = {onClose} />
            <Swiper 
                spaceBetween={20} 
                slidesPerView = {1} 
                loop 
                initialSlide={selectedIdx}
             
            >
                {images.map((src, index)=>(
                    <SwiperSlide key={index}>
                        <img src = {src} alt = "이미지뷰어" />
                    </SwiperSlide>
                ))}
            
            </Swiper>

        </Dimmed>
    )
}
