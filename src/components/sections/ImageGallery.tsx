import classNames from "classnames/bind";
import { useState } from "react";
import ImageViewer from "../imageViewer";
import Section from "../shared/Section";
import styles from './ImageGallery.module.scss'

const cx = classNames.bind(styles);

export default function ImageGallery({images} : {images: string[]}) {
    const [selectedIdx, setSelectedIdx] = useState(-1)
    
    const open = selectedIdx > -1

    const handleSelectedImage = (idx : number) => {
        setSelectedIdx(idx);
    }

    const handleClose = () => {
        setSelectedIdx(-1);
    }

    return(
        <>
            <Section title = "사진첩">
                <ul className={cx('images')}>
                    {images.map((src, index)=>(
                        <li 
                            className={cx('image')} 
                            key = {index}
                            onClick = {()=>{handleSelectedImage(index)}}
                        >
                           <picture>
                            <source srcSet={`${src}.webp`} type="image/webp" />
                            <img src = {`${src}.jpg`} alt = "photo" />
                           </picture>
                        </li>
                    ))}
                </ul>
            </Section>
            <ImageViewer 
                images = {images} 
                open={open} 
                selectedIdx = {selectedIdx}
                onClose = {handleClose}
            /> 
        </>
    ) 
}
